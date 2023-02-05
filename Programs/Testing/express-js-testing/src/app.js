let express = require("express");
let app = express();
let emp = {id:100,name:"Ravi",age:21}
let employees = [
    {id:100,name:"Ravi",age:21},
    {id:101,name:"Ramesh",age:25},
    {id:102,name:"Lokesh",age:27},
    {id:103,name:"Rajesh",age:30}
]
app.get("/",(request,response)=> {
    response.send("Welcome to Express JS")
});
app.get("/empInfo",(request,response)=> {
    response.json(emp);
})
app.get("/employees",(request,response)=> {
    response.json(employees);
})


app.listen(3000,()=>console.log("Server running on port number 3000"))


module.exports=app;
