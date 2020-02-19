var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var returned = [];
var names = [];

let personal = true;
let allPersonal = ['Lowstreet 4', 'Green Grass 1'];

let special = true;
let allSpecial = ['racial', 'political'];

let automated = true;
let profiling = true;

let authentication = true;
let allAuthentication = ['password', 'facial', 'passphrase']

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == obj) {
            return true;
        }
    }
    return false;
}

MongoClient.connect(url, function(err, db) {
  if (err) console.log(err);

  var dbo = db.db("mydb");

  if (personal) {
    for (var i = 0; i < allPersonal.length; i++) {
      var info = allPersonal[i];
      var query = { tags: info };
      dbo.collection("customers").find(query).forEach(function(result) {
        if (names.length == 0) {
          names.push(result.name);
          console.log(result);
        } else {
          if (!contains(names, result.name)) {
            console.log(result);
            names.push(result.name);
          }
        }
      })
    }
  }

  if (special) {
    for (var i = 0; i < allSpecial.length; i++) {
      var info = allSpecial[i];
      var query = { tags: info };
      dbo.collection("customers").find(query).forEach(function(result) {
        if (names.length == 0) {
          names.push(result.name);
          console.log(result);
        } else {
          if (!contains(names, result.name)) {
            console.log(result);
            names.push(result.name);
          }
        }
      })
    }
  }

  if (automated) {
    var query = { tags: 'auto' };
    dbo.collection("customers").find(query).forEach(function(result) {
      if (names.length == 0) {
        names.push(result.name);
        console.log(result);
      } else {
        if (!contains(names, result.name)) {
          console.log(result);
          names.push(result.name);
        }
      }
    })
  }

  if (profiling) {
    var query = { tags: 'profiling' };
    dbo.collection("customers").find(query).forEach(function(result) {
      if (names.length == 0) {
        names.push(result.name);
        console.log(result);
      } else {
        if (!contains(names, result.name)) {
          console.log(result);
          names.push(result.name);
        }
      }
    })
  }

  if (authentication) {
    for (var i = 0; i < allAuthentication.length; i++) {
      var info = allAuthentication[i];
      var query = { tags: info };
      dbo.collection("customers").find(query).forEach(function(result) {
        if (names.length == 0) {
          names.push(result.name);
          console.log(result);
        } else {
          if (!contains(names, result.name)) {
            console.log(result);
            names.push(result.name);
          }
        }
      })
    }
  }
  //console.log(returned);
  db.close();
});
