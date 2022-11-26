let fs = require("fs");
let data  = fs.readFileSync("emp.json");
console.log(data);              // buffer data 
    let empString = data.toString();        // convert buffer to string 
console.log(empString)
console.log(empString.id)
console.log(empString.fname)
console.log(empString.age)
    let empJson = JSON.parse(data.toString());  // convert buffer to string and then json 
console.log(empJson.id);
console.log(empJson.fname);
console.log(empJson.age);
    let empInfo = JSON.parse(data);     // convet buffer to json 
console.log(empInfo.id);
console.log(empInfo.fname);
console.log(empInfo.age);    