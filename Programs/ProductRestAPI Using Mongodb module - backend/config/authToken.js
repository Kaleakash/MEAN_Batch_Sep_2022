let jwt = require("jsonwebtoken");

let verifyToken = (req,res,next)=>{
//res.send("You can't call rest api");      // can't call 
// next();                         // pass request to controller 

try{
    let token = req.headers.authorization;
    if(token==undefined){
        res.json({"msg":"Unauthorized user"})
    }else {
        let validToken = jwt.verify(token,"secretKey");
        next();
    }
}catch(ex){
    res.json({"msg":"Invalid token "+ex});
}
}

module.exports={verifyToken};