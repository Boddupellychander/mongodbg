var MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://127.0.0.1:27017/HRMS"
MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err, db) {
    if (err) console.error(err);
    console.log("DB Connected");
    var dbobj = db.db("HRMS");
    dbobj.collection("salary").findOne({}, function(err, res) {
        //dbobj.collection("salary").find().toArray(function(err, res) {
        if (err) console.error(err);
        console.log(res.Associate_id);
        console.log(res.CTC);
        db.close();
    });
});