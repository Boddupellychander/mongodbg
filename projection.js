var MongoClient = require ('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/zensar"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
	if(err) console.error(err);
	console.log("DB Connected");
	var dbobj= db.db("zensar");
	var data1 = {code : {$gte :'1000'}, $and: [{ country_code : {$nin: ['WS','PY']}, value : {$lt :'192949.0'}}]};
	var proj = {_id: 0,time_ref:0};
	var proj1 = {_id: 1,time_ref:1,status:1};
	dbobj.collection("gsquarterlySeptember20").find(data1).project(proj).limit(1).skip(5).toArray(function(err,res) {
		if(err) console.error(err);
		console.log(JSON.stringify(res));
		db.close();
	});
/*	
	dbobj.collection("gsquarterlySeptember20").find(data1,proj1).toArray(function(err,res) {
		if(err) console.error(err);
		console.log(JSON.stringify(res));
		db.close();
	});
*/

});