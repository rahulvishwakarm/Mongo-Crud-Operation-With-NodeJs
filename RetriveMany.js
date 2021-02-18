var mongodb=require("mongodb");  
var MongoClient=mongodb.MongoClient;  
var url='mongodb://localhost:27017/';  
MongoClient.connect(url, function(error, databases){  
    if(error){  
        throw error;  
    }  
    var nodtst = databases.db("Dataroid");  
    nodtst.collection("product").find({}).toArray(function(err, result) {  
        if (err) throw err;  
        // for(i=0;i<result.length;i++){
        //     let prodct=result[i]
        //     console.log(prodct.ISBN+","+prodct.title+","+prodct.price);
        // } //if needed in test form uncomment it
        console.log(result)  //If needed in array 
        databases.close();
    })  
}) 