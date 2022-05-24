var MongoClient = require('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/HRMS"
var db;
MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err, db) {
    if (err) console.error(err);
    console.log("DB Connected");
    var dbobj = db.db("HRMS");
    //var data1 = { "Surname": "Shamim Kadri", "First name": "Mohammed Faisal","Email address": "mohammedfaisalkadri@gmail.com"};
    var data1 = { "firstname": "Ram", "lastname": "gopal", "Blood group": "B+ve", "Marital status": "maried", "Empid": "66666" };
    dbobj.collection("Personal details").insertOne(data1, function(err, res) {
        if (err) console.error(err);
        console.log("document inserted");
        db.close();
    });

});