var mongodb=require('mongodb');
var MongoClient = mongodb.MongoClient;
var url='mongodb://localhost:27017/';
MongoClient.connect(url,function(error,databases){
    if(error){
        throw error;
    }
    else{
        console.log("Connected to MonogoConsole");
    }
})