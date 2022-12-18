let dbCollection = require("../config/dbConfig");   // load dbConfig module and using reference 

                    // calling collectionInformation function and store the record. 
let storeProduct = (product)=> {
    //return dbCollection.CollectionInformation("mean_batch1","Product").insertOne(product);
    return dbCollection.CollectionInformation().insertOne(product);
}

let findAllProduct = ()=> {
    return dbCollection.CollectionInformation().find({}).toArray(); //toArray convert all data in array format. 
}

let findAllProductById = (pid)=> {
    return dbCollection.CollectionInformation().find({_id:eval(pid)}).toArray(); //toArray convert all data in array format. 
}

module.exports = {storeProduct,findAllProduct,findAllProductById}         // it export storeProduct function in another file we can import it or link it.  