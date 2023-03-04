let mongoClient = require("mongodb").MongoClient;       // load the module and get mongodb reference. 
let URL = "mongodb://127.0.0.1:27017";                  // this is url 

let dbClient;

function connection() {                               // this function connect database and store the connection in dbClient variable 
    mongoClient.connect(URL).then(res=>{
        console.log("Db connected successfully");
        dbClient=res;                   // connection information store in dbClient variable which we can use for further purpose. 
    }).catch(error=>console.log(error));
}
                        // it take 2 parameter 1st database name and 2nd one collection name
// let CollectionInformation = (dbName,collectionName)=> {
//     return dbClient.db(dbName).collection(collectionName);
// }

// let CollectionInformation = (collectionName)=> {
//     return dbClient.db("mean_batch1").collection(collectionName);
// }

let CollectionInformation = (cname)=> {
    return dbClient.db("mean_batch1").collection(cname);
}

module.exports = {connection,CollectionInformation}
