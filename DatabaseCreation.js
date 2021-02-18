var mongodb=require('mongodb');
var MongoClient = mongodb.MongoClient;
var url='mongodb://localhost:27017/';
MongoClient.connect(url,function(error,databases){
    if(error){
        throw error;
    }
    else{
        console.log("Connected to MonogoConsole")
        var dbcreation=databases.db('Rahul')  // We would not able to see database in MongoCompass unless we create collection
        dbcreation.createCollection('Vishwakarma',function(error,response){
            if(error){
                throw error
            }else{
                console.log("Database and Collection created")
                databases.close();
            }
        })
    }
})