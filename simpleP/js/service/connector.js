// Filename: connector.js
define([
	'jquery',
	'socketio'
], function ($, io) {

	var socket = io.connect('http://127.0.0.1:8880');

	/*conn.on('wellcome', function (data) {
		console.log(data);
	});*/


	//conn.emit('message', '{"id":"0001","collection":"friends"}');


	socket.getMessage = function(messageType, callback){
		socket.on(messageType, function (data){
			callback(data);
		});
	}
	socket.sendMessage = function(messageType, data, callback){
		socket.emit('message', data);
		//subscribe for event
	}

	return socket;
});
