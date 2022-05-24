var MongoClient = require ('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/zensar"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
	if(err) console.error(err);
	console.log("DB Connected");
	var dbobj= db.db("zensar");
//	var data1 = {code : {$gte :'1000'}, $and: [{ country_code : {$nin: ['WS','PY']}, value : {$lt :'192949.0'}}]};
	var data2 = [{$group: { _id: "$country_code", value:  { $max :"$value"}}}];
	dbobj.collection("gsquarterlySeptember20").aggregate(data2).toArray(function(err,res) {
		if(err) console.error(err);
		console.log(JSON.stringify(res));
		db.close();
	});

});