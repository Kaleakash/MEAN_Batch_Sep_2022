

let verifyToken = (req,res,next)=>{
//res.send("You can't call rest api");      // can't call 
 next();                         // pass request to controller 
}

module.exports={verifyToken};