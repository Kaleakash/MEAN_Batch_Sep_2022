let productRepository = require("../repository/productRepository");

let storeProduct = async (request,response)=> {
    let product = request.body;     // extract data from body part. 
    let result = await productRepository.storeProduct(product);
    return result;
}



module.exports={storeProduct}