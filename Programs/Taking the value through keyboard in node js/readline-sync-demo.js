let obj = require("readline-sync");
//console.log(obj);
// var id  = obj.questionInt("Enter the id");  // number without decimal 
// var name = obj.question("Enter the name");      // string value 
// var salary = obj.questionFloat("Enter the salary")  // number with decimal 
// console.log("id is "+id);
// console.log("name is "+name);
// console.log("salary is "+salary);

// npm install readline-sync 
// var n1 = obj.question("Enter the 1st number");
// var n2 = obj.question("Enter the 2nd number");
// var sum = eval(n1)+eval(n2);
// console.log("sum is "+sum)

var n1 = obj.questionInt("Enter the 1st number");
var n2 = obj.questionInt("Enter the 2nd number");
var sum = n1+n2;
console.log("sum is "+sum)