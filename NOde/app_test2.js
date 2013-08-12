// Let's get the 'Classes' used for the driver
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;
new Db('den_test', new Server("127.0.0.1", 27017, {auto_reconnect: false}), {})
	.open(function(err, db) {
		if(!err) {
			console.log("We are connected");
		}
		db.collection('documents', function(err, collection) {
			collection.find().toArray(function(err, docs) {
				 var intCount = docs.length;
				 for (i=0; i<intCount; i++){
					console.log("item:");
					console.log(docs[i]);
				 }
				 db.close();
			});
		});
	});
					  
						
					
				
