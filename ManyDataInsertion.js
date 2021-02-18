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
        var data=[
            { ISBN: '8176561061',
          title: 'Train Recognition Guidre',
          price: 431,
          rating: 5 },
            { ISBN: '9.78001E+12',
          title: 'Train Recognition Guththide',
          price: 974,
          rating: 4 },
            { ISBN: '9.78001E+12',
          title: 'Train Recognition Guidtte',
          price: 456,
          rating: 4 },
            { ISBN: '9.78001E+12',
          title: 'Train Recognition Guhide',
          price: 456,
          rating: 3 },
            { ISBN: '9.78001E+12',
          title: 'Train Recognition Guidfgtrge',
          price: 834,
          rating: 3 },
            { ISBN: '9.78001E+12',
          title: 'Train Recognition Guidgtge',
          price: 456,
          rating: 3 },
            { ISBN: '9.78001E+12',
          title: 'Train Recognition Guidetghrthrthrthrth',
          price: 456,
          rating: 2 },
            { ISBN: '9.78001E+12',
          title: 'Train Recognition Guide',
          price: 456,
          rating: 2 }
          ]
        };

        collectionCreation.insertMany(data,function(error,response){ 
            if(error){
                throw error;
            }
            console.log("All data inserted");
            databases.close();
        })
    })