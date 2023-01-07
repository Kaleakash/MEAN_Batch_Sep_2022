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

let deleteProductById=(pid)=> {
    let productid = eval(pid);
    return dbCollection.CollectionInformation().deleleOne({_id:productid});
}
let updateProductPrice = (product)=> {
    return dbCollection.CollectionInformation().updateOne({_id:product._id},{$set:{price:product.price}});
}
module.exports = {storeProduct,findAllProduct,findAllProductById,deleteProductById,updateProductPrice}         
// it export storeProduct function in another file we can import it or link it.  