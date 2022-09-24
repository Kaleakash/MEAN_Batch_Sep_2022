let empInfo = '{"id":100,"name":"Ravi","age":26}'
let emp = {id:100,name:"Ravi",age:21};  // object literal 

document.write("<br/> Employee object in literal style")
document.write("<br/> Id is "+emp.id);
document.write("<br/> Name is "+emp.name);
document.write("<br/> Age is "+emp.age);
// This function or method which help to convert object literal to String format. 
    
        let empString = JSON.stringify(emp);

document.write("<br/> Employee object in string format ")
document.write("<br/> Id is "+empString.id);
document.write("<br/> Name is "+empString.name);
document.write("<br/> Age is "+empString.age);
// This method convert string to json 
let empJson = JSON.parse(empString);

document.write("<br/> Employee object in json format")
document.write("<br/> Id is "+empJson.id);
document.write("<br/> Name is "+empJson.name);
document.write("<br/> Age is "+empJson.age);
document.write("<br/>")
document.write(empString)