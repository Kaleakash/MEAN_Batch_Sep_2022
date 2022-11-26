let fs = require("fs");
let emp = {id:100,fname:"Ravi",age:21};     // object literal 
fs.writeFileSync("emp.json",JSON.stringify(emp));
console.log("Json Data stored");