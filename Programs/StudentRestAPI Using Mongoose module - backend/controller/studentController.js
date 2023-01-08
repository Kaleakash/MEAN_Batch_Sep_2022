let studentRepository = require("../repository/studentRepository");

let storeStudentDetails = async(req,res)=> {
    let student = req.body;         // extract json data from reqeust body 
    try{
    let result = await studentRepository.storeStudentDetails(student);
    res.send(result);
    }catch(Exp){
        res.send(Exp);
    }
}

let findStudentDetails = async(req,res)=> {
    let result = await studentRepository.findAllStudent();
    res.json(result);
}

module.exports={storeStudentDetails,findStudentDetails}