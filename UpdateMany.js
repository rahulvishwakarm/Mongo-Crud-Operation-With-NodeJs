var mongodb=require('mongodb');  
var MongoClient=mongodb.MongoClient;  
var url="mongodb://localhost:27017/"  
MongoClient.connect(url,function(error,databases){  
    if(error){  
        throw error;  
    }
    var selectDatabase=databases.db('Dataroid');
    var whereClause={ISBN:'9.78001E+12'};
    var newalue = {$set:{ISBN:"9.7800154783489"}}
    selectDatabase.collection('product').updateMany(whereClause,newalue,function(error,res){
        if(error){
            throw error;
        }
        console.log(res.result.nModified +"document updated")
        databases.close()
    });
});  