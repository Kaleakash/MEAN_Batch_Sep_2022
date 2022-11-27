let obj = require("fs");     // module load 
let data = "Hi";  // data variable hold some value 
//obj.writeFileSync("demo1.txt",data);      // data override 
obj.writeFileSync("demo1.txt",data,{flag:"a+"});    // append the data 
//obj.writeFileSync("demo1.html",data);
console.log("Data stored in file successfully");
