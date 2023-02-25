let studentController = require("../controller/studentController");
let express = require("express");
let router = express.Router();


// http://localhost:3000/api/students/storeStudentInfo

router.post("/storeStudentInfo",studentController.storeStudentDetails);

// http://localhost:3000/api/students/findStudentInfo
router.get("/findStudentInfo",studentController.findStudentDetails);

module.exports=router;