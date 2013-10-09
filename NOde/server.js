var http = require("http"),
io = require("socket.io");
var JSON2 = require('./');
//check
function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  server = http.createServer(onRequest).listen(8880);
  console.log("Server has started.");
  
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;

  
var socket = io.listen(server,{log:0}); 
socket.on('connection', function(client){ 

    console.log("New client is here!");
    client.emit('wellcome', "Hey you!");


	client.on('serverRequest', function (messageType,data) {
		handleMessage(messageType,data,client);
	});
}); 


//WORKER for deal with client messages
	function handleMessage(messageType,data,client){
		console.log(data);
		var obj;
		if(typeof data !== 'object'){
			console.log("error with an object");
			obj = JSON.parse(data);
		}else{
			obj = data;
		}

		var eventType = messageConfig[obj.id];

	//Check if this getting data by collection or other call
		if(obj.hasOwnProperty("collection")){
			console.log("PROCESSING: ...  "+obj.collection);
			eventType(messageType, client, obj.collection);
		}else{
			eventType(messageType, client);
		}
	}

//WORKER for sending messages to client
	function sendMessage(messageType,client, data){
		console.log("SEND WERE CALLED");
		client.emit('serverResponse',messageType, data);
	}

/**
 * Block for handling DB responses
 * */
function returnData(messageType, client, reqCollection){
	console.log("inside return data");
	getFRTEMP(reqCollection, function (data) {
		sendMessage(messageType,client, data);
	});
}


messageConfig = {
	"0003": getData,
	"0002": getFRTEMP,
	"0001": returnData
}

	function getData(messageType, client,reqCollection){
		new Db('den_test_arc', new Server("127.0.0.1", 27017, {auto_reconnect: false}), {})
			.open(function(err, db) {
				if(!err) {
					console.log("We are connected");
				}
				db.collection(reqCollection, function(err, dbCollection) {
					dbCollection.find().toArray(function(err, dbRes) {
						//var intCount = dbRes.length;
						sendMessage(messageType, client, dbRes);
						db.close();
					});
				});
			});
	}

	function getFRTEMP(reqCollection, callback) {
		var mongoose = require('mongoose');

		var db = mongoose.connection;

		db.on('error', console.error);
		db.once('open', function () {
			var friendsSchema = new mongoose.Schema({
				id: Number,
				img: { type: String },
				src: { type: String },
				title: { type: String }
			});
			var userSchema = new mongoose.Schema({
				id: Number,
				login: { type: String },
				password: { type: String },
				permission: Number
			});

			var Data = mongoose.model(reqCollection, friendsSchema);
			Data.find(function (err, resultData) {
				if (err) return console.error(err);
				//console.dir(resultData);
				callback(resultData);
			});
		});
		mongoose.connect('mongodb://satan:reboot@ds049848.mongolab.com:49848/sameplace');
	}
	function getDBData(reqCollection, callback){
		new Db('den_test_arc', new Server("127.0.0.1", 27017, {auto_reconnect: false}), {})
			.open(function(err, db) {
				if(!err) {
					console.log("We are connected !!!!!!!!!!!!!!");
				}
				db.collection(reqCollection, function(err, dbCollection) {
					dbCollection.find().toArray(function(err, dbRes) {
						 callback(dbRes);
						db.close();
					});
				});
			});
	}
				
}


exports.start = start;
