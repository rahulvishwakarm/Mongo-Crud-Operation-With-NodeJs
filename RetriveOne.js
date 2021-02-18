var mongodb=require("mongodb");  
var MongoClient=mongodb.MongoClient;  
var url='mongodb://localhost:27017/';  
MongoClient.connect(url, function(error, databases){  
    if(error){  
        throw error;  
  
    }  
    var nodtst = databases.db("Dataroid");  
    nodtst.collection("product").findOne({title:'Train Recognition Guidfgtrge'}, function(err, result) {  
        if (err) throw err;  
        console.log("one record is find now....."+result.ISBN + ", " + result.title + ", " + result.price);  
        databases.close();   
    })  
}) 