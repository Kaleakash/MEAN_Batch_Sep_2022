let mongoClient = require("mongodb").MongoClient;
let URL = "mongodb://127.0.0.1:27017";

let dbClient;

// exports.connection = ()=> {
//     console.log("This is connection function");
// }

function connection() {
    console.log("this is connection function")
    mongoClient.connect(URL).then(res=>{
        console.log("Db connected successfully");
        dbClient=res;                   // connection information store in dbClient variable which we can use for further purpose. 
    }).catch(error=>console.log(error));
}

let CollectionInformation = (dbName,collectionName)=> {
    return dbClient.db(dbName).collection(collectionName);
}
module.exports = {connection,CollectionInformation}
