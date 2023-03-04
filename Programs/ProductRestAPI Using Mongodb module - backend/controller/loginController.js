let loginRepository = require("../repository/loginRepository");
let hashPassword  = require("../config/hashPassword");
let jwt = require("jsonwebtoken");
let signUp = async (request,response)=> {
    let login = request.body;     // extract data from body part. 
    console.log(login);
    login.password  = await hashPassword.convertPasswordToHash(login.password);
    console.log(login);
    try{
    let result = await loginRepository.sigUp(login);
    if(result.acknowledged){
        response.send("Account created successfully")
    }}catch(ex){
        response.send("Account didn't create "+ex);
    }
}
let signIn = async (request,response)=> {
    let login = request.body;
    try{
        let result = await loginRepository.signIn(login);
        console.log(result);
        if(result){
        let validPassword  = await  hashPassword.comparePassword(login.password,result.password);
            if(validPassword){
             //   response.json({"msg":"Login successfully"})
             let payload = {"emailid":result.emailid}
             let tokenValue = await jwt.sign(payload,"secretKey");  
                if(result.typeofuser=="admin"){
        response.json({"msg":"Admin Login successfully","token":tokenValue})   
                }else {
        response.json({"msg":"Customer Login successfully","token":tokenValue})     
                }
            }else {
                response.json({"msg":"Password is wrong"})
            }
        }else {
                response.json({"msg":"Emailid not present"});
        }
   }catch(ex){
    response.json({"msg":"Error"+ex})
   }
}

module.exports={signUp,signIn}