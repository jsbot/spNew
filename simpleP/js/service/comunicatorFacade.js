//facade for providing communication on top of socket
define([], function () {

	var communicatorFacade = function (socket){
		this.io = socket;
		console.log("cerate facade");
	}

	communicatorFacade.prototype.getMessage = function(messageType, callback){
		this.io.on(messageType, function (data){
			callback(data);
		});
		console.log("getMessageRequest: "+messageType);
	}
	communicatorFacade.prototype.sendMessage = function(messageType, data, callback){
		this.io.emit('message', data);
		//subscribe for event
		console.log("sendMessageRequest: "+messageType);
	}


	return communicatorFacade;
});