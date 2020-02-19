var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'John', tags: ['Highway 71', 'Lowstreet 4']},
    { name: 'Peter', tags: 'Lowstreet 4'},
    { name: 'Amy', tags: ['Apple st 652', 'Lowstreet 4', 'facial']},
    { name: 'Hannah', tags: ['Mountain 21', 'auto', 'profiling']},
    { name: 'Michael', tags: 'Valley 345'},
    { name: 'Sandy', tags: ['Ocean blvd 2', 'passphrase']},
    { name: 'Betty', tags: ['Green Grass 1', 'Lowstreet 4', 'password']},
    { name: 'Richard', tags: 'Sky st 331'},
    { name: 'Susan', tags: ['One way 98', 'racial']},
    { name: 'Vicky', tags: 'facial'},
    { name: 'Ben', tags: ['Park Lane 38', 'political']},
    { name: 'William', tags: ['Central st 954', 'auto']},
    { name: 'Chuck', tags: ['Main Road 989', 'Lowstreet 4', 'political', 'racial']},
    { name: 'Viola', tags: 'profiling'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
