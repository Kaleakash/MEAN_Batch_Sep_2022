let express = require("express");
let app = express();
let emp = {id:100,name:"Ravi",age:21};

app.get("/",(request,response)=> {
    response.send("Welcome to REST API running through docker")
})
app.get("/sayHello/:name",(request,response)=> {
    let name = request.params.name;
    response.send("Welcome user "+name);
})
app.get("/emp",(request,response)=> {
    response.json(emp);
})




app.listen(3000,()=>console.log("Server running on port number 3000"))