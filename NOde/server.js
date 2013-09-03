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

    //client.on('message', function(msg) { console.log("client has sent:"+msg); }) ;
	client.on('message', function (data) {
		handleMessage(data,client);
		//getData(client);
	});
}); 


	//WORKER for deal with client messages
	function handleMessage(data,client){
		//var jsondata = '{"sample": "data", "is": "great", "data": [1, 2, 3, 4]}';
		//var obj = JSON.parse(jsondata);
		//console.log(obj.sample);	
		var obj;
		if(typeof data !== 'object'){
			console.log("error with an object");
			obj = JSON.parse(data);
		}else{
			obj = data;
		}

		var eventType = messageConfig[obj.id];
		
		//Check if this getting data by collection or other call
		if(data.hasOwnProperty("collection")){
				eventType(client, obj.collection);
		}else{
			eventType(client);
		}		
	}

	//WORKER for sending messages to client 
	function sendMessage(client, data){
		client.emit('news', data);
	}

messageConfig = {
	"0001":getData,
	"0002":"getRepro"
}
	
	function getData(client,reqCollection){
		new Db('den_test_arc', new Server("127.0.0.1", 27017, {auto_reconnect: false}), {})
			.open(function(err, db) {
				if(!err) {
					console.log("We are connected");
				}
				db.collection('friends', function(err, dbCollection) {
					dbCollection.find().toArray(function(err, dbRes) {
						 var intCount = dbRes.length;
						 sendMessage(client, dbRes);
						//for (i=0; i<intCount; i++){
						//console.log("item:");
						//console.log(docs[i]);
						//}
						db.close();
					});
				});
			});
	}
				
}


exports.start = start;
