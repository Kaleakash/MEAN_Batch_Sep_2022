let obj = require("fs");     // module load 
let data = "Welcome to Node JS Fs Module";  // data variable hold some value 
obj.writeFileSync("demo1.txt",data);
//obj.writeFileSync("demo1.html",data);
console.log("Data stored in file successfully");
