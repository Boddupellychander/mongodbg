var MongoClient = require('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/HRMS"
var db;
MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err, db) {
    if (err) console.error(err);
    console.log("DB Connected");
    var dbobj = db.db("HRMS");
    var data1 = [{ "firstname": "Shamim Kadri", "lastname ": "Mohammed Faisal", "Blood group": "a+", "Marital status": "unmaried", "Empid": "66622" },
        { "firstname": "MUSTAFA SHAIKH", "lastname ": "AFROZ", "Blood group": "B+", "Marital status": "maried", "Empid": "66611" },
        { "firstname": "KAMLAKAR BHUJBAL", "lastname ": "CHETAN", "Blood group": "O+", "Marital status": "maried", "Empid": "66600" },
        { "firstname": "Ram", "lastname": "gopal", "Blood group": "B+ve", "Marital status": "maried", "Empid": "66666" }
    ];
    dbobj.collection("Personal details").insertMany(data1, function(err, res) {
        if (err) console.error(err);
        console.log("document inserted");
        db.close();
    });

});