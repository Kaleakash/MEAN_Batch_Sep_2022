let dbCollection = require("../config/dbConfig");   // load dbConfig module and using reference 

                    // calling collectionInformation function and store the record. 
let storeProduct = (product)=> {
    //return dbCollection.CollectionInformation("mean_batch1","Product").insertOne(product);
    return dbCollection.CollectionInformation("Product").insertOne(product);
}

let findAllProduct = ()=> {
    return dbCollection.CollectionInformation("Product").find({}).toArray(); //toArray convert all data in array format. 
}

let findAllProductById = (pid)=> {
    return dbCollection.CollectionInformation("Product").find({_id:eval(pid)}).toArray(); //toArray convert all data in array format. 
}

let deleteProductById=(pid)=> {
    let productid = eval(pid);
    return dbCollection.CollectionInformation("Product").deleteOne({_id:productid});
}
let updateProductPrice = (product)=> {
    return dbCollection.CollectionInformation().updateOne({_id:product._id},{$set:{price:product.price,url:product.url}});
}
module.exports = {storeProduct,findAllProduct,findAllProductById,deleteProductById,updateProductPrice}         
// it export storeProduct function in another file we can import it or link it.  