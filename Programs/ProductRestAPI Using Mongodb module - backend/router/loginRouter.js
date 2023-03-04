let express = require("express");       // load the module 
let router = express.Router();      // it will give router reference. 
let loginController = require("../controller/loginController");// load controller module 



router.post("/signUp",loginController.signUp);

router.post("/signIn",loginController.signIn);

module.exports=router;      // router reference export 