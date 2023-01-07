let productRepository = require("../repository/productRepository");
let storeProduct = async (request,response)=> {
    let product = request.body;     // extract data from body part. 
    try{
    let result = await productRepository.storeProduct(product);     // asynchronouos operation 
    if(result.acknowledged){
        response.send("Product details inserted successfully")
    }}catch(ex){
        response.send("Record didn't store "+ex);
    }
}
let findProduct = async (request,response)=> {
    let result = await productRepository.findAllProduct();
    if(result.length==0){
        response.send("Product details not present")
    }else {
        response.json(result);
    }
}
let findProductById = async (request,response)=> {
    let productid = request.params.pid;
    let result = await productRepository.findAllProductById(productid);
    if(result.length==0){
        response.send("Prodcut details not present")
    }else {
            response.json(result);
    }
}

let deleteProductById = async (request,response)=> {
    let productid = request.params.pid;
    let result = await productRepository.deleteProductById(productid);
    response.json(result);
}
let updateProductPrice = async (request,response)=> {
    let product = request.body;     // extract data from body part.
    let result = await productRepository.updateProductPrice(product);
    response.json(result);
}
module.exports={storeProduct,findProduct,findProductById,deleteProductById,updateProductPrice}

