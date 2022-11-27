let fs = require("fs");
//let emp1 = {id:103,fname:"Ajay",age:26};
//let emp2 = {id:104,fname:"Balaji",age:28};
//let employees =[];
//employees.push(emp1);
//employees.push(emp2)
let employees = JSON.parse(fs.readFileSync("employees.json"));      // convert buffer to json 
//console.log(employees.length);
let emp = {id:100,fname:"Mahesh",age:36};
let result = employees.find(e=>e.id ==emp.id);// if record present then result hold that record else
                                            // it return undefined
if(result==undefined){
    employees.push(emp);
    fs.writeFileSync("employees.json",JSON.stringify(employees));
    console.log("Data Stored");
    console.log("Number of records are "+employees.length);
}else {
    console.log("Id must be unique didn't store");
}
employees.forEach(e=>console.log(e));
