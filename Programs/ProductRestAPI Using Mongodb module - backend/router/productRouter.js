let express = require("express");       // load the module 
let router = express.Router();      // it will give router reference. 
let productController = require("../controller/productController");// load controller module 
let authToken = require("../config/authToken");



// http://localhost:3000/api/products/findProductInfo

router.get("/findProductInfo",authToken.verifyToken,productController.findProduct);


// http://localhost:3000/api/products/storeProduct

router.post("/storeProduct",authToken.verifyToken,productController.storeProduct);




// http://localhost:3000/api/products/findProductById/100
// http://localhost:3000/api/products/findProductById/1
router.get("/findProductById/:pid",authToken.verifyToken,productController.findProductById);

// http://localhost:3000/api/products/deleteProductById/1
// http://localhost:3000/api/products/deleteProductById/100
router.delete("/deleteProductById/:pid",authToken.verifyToken,productController.deleteProductById);

// http://localhost:3000/api/products/updateProductPrice :... 
router.put("/updateProductPrice",authToken.verifyToken,productController.updateProductPrice);

module.exports=router;      // router reference export 