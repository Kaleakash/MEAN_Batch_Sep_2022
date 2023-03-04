let dbCollection = require("../config/dbConfig");   // load dbConfig module and using reference 

                    // calling collectionInformation function and store the record. 
let sigUp = (login)=> {
    //return dbCollection.CollectionInformation("mean_batch1","Product").insertOne(product);
    return dbCollection.CollectionInformation("Login").insertOne(login);
}

let signIn = (login)=> {
    return dbCollection.CollectionInformation("Login").findOne({emailid:login.emailid}); 
}

module.exports = {sigUp,signIn};