var mongodb=require('mongodb');
var MongoClient = mongodb.MongoClient;
var url='mongodb://localhost:27017/';
MongoClient.connect(url,function(error,databases){
    if(error){
        throw error;
    }
    else{
        var dbcreation=databases.db('Dataroid');  // We would not able to see database in MongoCompass unless we create collection
        var collectionCreation=dbcreation.collection('product');
        var data={
            _id:1,
            ISBN: '8176561061',
            title: 'Train Recognition Guide',
            price: 431,
            rating: 5 }
        };

        collectionCreation.insertOne(data,function(error,response){
            if(error){
                throw error;
            }
            console.log("1 data Inserted");
            databases.close();
        })
    })