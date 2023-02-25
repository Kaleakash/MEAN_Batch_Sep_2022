let studentModel = require("../model/studentModel");        //load the studentModel it provide collection details. 

let storeStudentDetails= (student)=> {

    return studentModel.insertMany(student);

}

let findAllStudent= ()=> {
    return studentModel.find({});
}



module.exports={storeStudentDetails,findAllStudent}