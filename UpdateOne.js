var mongodb=require('mongodb');  
var MongoClient=mongodb.MongoClient;  
var url="mongodb://localhost:27017/"  
MongoClient.connect(url,function(error,databases){  
    if(error){  
        throw error;  
    }
    var selectDatabase=databases.db("Dataroid");
    var whereClause={title:'Train Recognition Guidfgtrge'};
    var newalue = {$set:{title:"Train Recognition GuidfgtrgNew"}}
    selectDatabase.collection("product").updateOne(whereClause,newalue,function(error,res){
        if(error){
            throw error;
        }
        console.log(res.result.n+"document updated")
        databases.close()
    });
});  