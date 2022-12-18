let dbCollection = require("../config/dbConfig");


let storeProduct = (product)=> {
    return dbCollection.CollectionInformation("mean_batch1","Product").insertOne(product);
}



module.exports = {storeProduct}