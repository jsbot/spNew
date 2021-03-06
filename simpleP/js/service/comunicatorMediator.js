//facade for providing communication on top of socket
define(["service/pupsub", "service/messageHelper"], function (pupsub, messageHelper) {

	var communicatorMediator = function (socket){
		this.io = socket;
		//console.log(pubsub);

		console.log("create facade");

        this.io.on("serverResponse", function (messageType,data){     //TODO: handle responce and publish event
            console.log("=============>");
            console.log("inner responce from server called from mediator object");
            console.log(data);
            console.log("=============>");
            pubsub.publish(messageType,data);
        });


	}

	communicatorMediator.prototype.getMessage = function(messageType, callback){
		this.io.on("serverResponse", function (data){     //TODO: handle responce and publish event
			callback(data);
		});
		console.log("getMessageRequest: "+messageType);
	}
   /* this.io.on("serverResponce", function(){
        ps.publish(messageType,callback);
    })*/
	communicatorMediator.prototype.sendMessage = function(){
		console.log("MESSAGE HELPER:");
        var resData;
            var tArr = new Array();
            for(i=0; i<arguments.length-1; i++){
                tArr.push(arguments[i]);
            }
            resData = tArr;
		var data = messageHelper.createJSON.apply(this,resData);
		this.io.emit('serverRequest',arguments[0], data);
		//subscribe for event
		console.log("sendMessageRequest: "+arguments[0]);
        pubsub.subscribe(arguments[0],arguments[arguments.length-1]);
	}


	return communicatorMediator;
});
/*
* Need add pupsub on sendmessage and refactor it:
* 1. send message to server        - done
* 2. subscribe to message type - done
* 3. need refactor communicator layer (need think regarding messge type and ID)
* 4. add on response normal handler by message type
* 5. on server response handle response and publish event by messagetype
*
*
* */