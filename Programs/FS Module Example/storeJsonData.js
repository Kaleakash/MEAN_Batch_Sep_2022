let fs = require("fs");
let emp = {id:102,fname:"Balaji",age:28};     // object literal 
fs.writeFileSync("emp.json",JSON.stringify(emp),{flag:"a+"});
console.log("Json Data stored");