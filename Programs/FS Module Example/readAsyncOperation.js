let fs = require("fs");
fs.readFile("demoasfasf1.txt",(err,data)=> {
    if(!err){
        console.log(data.toString());
    }else {
        console.log(err);
    }
})

console.log("normal statement1")
console.log("normal statement2")
console.log("normal statement3")

