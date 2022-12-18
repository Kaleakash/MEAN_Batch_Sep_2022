let express = require("express");
let router = express.Router();      // it will give router reference. 
let productController = require("../controller/productController");

router.post("/storeProduct",productController.storeProduct);



module.exports=router;