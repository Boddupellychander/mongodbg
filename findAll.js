var MongoClient = require('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/HRMS"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err, db) {
    if (err) console.error(err);
    console.log("DB Connected");
    var dbobj = db.db("HRMS");
    var data1 = { code: { $gte: '66123' }, $and: [{ projectid: { $nin: ['hai', 'bye'] }, value: { $lt: '400000' } }] };

    dbobj.collection("salary").find().toArray(function(err, res) {
        if (err) console.error(err);
        console.log(JSON.stringify(res));
        db.close();
    });

});