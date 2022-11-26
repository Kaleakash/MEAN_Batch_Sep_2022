let fs = require("fs");
let data = "Welcome to Node JS Fs module";
fs.writeFile("demo2.txt",data,(err)=> {
    if(!err){
        console.log("Data stored in file asynchronously ");
    }
})

console.log("Done")