var mongodb=require('mongodb');  
var MongoClient=mongodb.MongoClient;  
var url="mongodb://localhost:27017/"  
MongoClient.connect(url,function(error,databases){  
    if(error){  
        throw error;  
    }
    var selectDatabase=databases.db('Dataroid');
    var delquery={};
    selectDatabase.collection('product').deleteMany(delquery,function(error,res){
        if(error){
            throw error;
        }
        console.log(res.result.n +"document deleted")
        databases.close()
    });
});  