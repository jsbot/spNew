// Let's get the 'Classes' used for the driver
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;
// Open a connection to your mongodb server for the database 'simple_tutorial'
// pass in the option for auto_reconnect (in case the server dies the connection
// will restart
new Db('den_test', 
  new Server("127.0.0.1", 27017, {auto_reconnect: false}), {}).open(function(err, db) {
  // Let's grab a collection/table
  db.collection('documents', function(err, collection) {
    // Now's time to insert our brilliant document for permanent storage
    collection.insert({mutherfucking:"cool","testdata":"['1','2']"}, function(err, doc) {
      // The document is inserted asynchronous so control is instantly returned to
      // the calling code thus allowing high write speed, the unique id is actually
      // assigned by the client driver not the mongodb server. you can override
      // the default key factory (see integration_tests.js that comes with the)
      // the driver
      
      // Let's fetch the document using the collection.findOne method
//      collection.findOne({awesome:1}, function(err, document) {
        
        // Let's change the info field to something else and update the object
        // in the collection (you can use the collection.save method if you want
        // to update using the document id as the identifier otherwise you have
        // to pass in the query that selects the document you wish to update
//        document.info = {type:'silly'};
//        collection.update({awesome:1}, document, function(err, document) {
          // Document updated in the database, let's finish off by closing
          // the db connection and thus ending the execution
          db.close();
//        });
//      });
    });
  });
});