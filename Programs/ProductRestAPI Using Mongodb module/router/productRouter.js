let express = require("express");       // load the module 
let router = express.Router();      // it will give router reference. 
let productController = require("../controller/productController");// load controller module 

// http://localhost:3000/api/products/storeProduct

router.post("/storeProduct",productController.storeProduct);

// http://localhost:3000/api/products/findProductInfo

router.get("/findProductInfo",productController.findProduct);

// http://localhost:3000/api/products/findProductById/100
// http://localhost:3000/api/products/findProductById/1
router.get("/findProductById/:pid",productController.findProductById);

module.exports=router;      // router reference export 