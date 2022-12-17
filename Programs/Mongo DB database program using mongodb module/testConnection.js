const obj = require("mongodb");
const mongoRef = obj.MongoClient;
//console.log("module loaded..")
let url ="mongodb://127.0.0.1:27017";       // mongodb database url   : default ip address of our machine
//let url ="mongodb://localhost:27017"; 
let dbName = "mean_batch1";                 // database name 

mongoRef.connect(url,(err,client)=> {

    if(!err){
        console.log("Connected database successfully")

        const db = client.db(dbName);           //db provide the reference of database. 

       
    }else {
        console.log(err);
    }

    client.close();             // close the connection 
})

