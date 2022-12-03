let express = require("express");
//console.log("loaded successfully");
let app = express();    // creating referenc of express module 
// http://localhost:9090/
app.get("/",(request,response)=> {
    response.send("Welcome to Simple Express JS Module")
})
// http://localhost:9090/aboutus
app.get("/aboutus",(request,response)=> {
    response.send("Welcome to us to About us page")
})
// http://localhost:9090/contactus
app.get("/contactus",(request,response)=> {
    response.send("Welcome to contact us page")
})
// http://localhost:9090/login
app.get("/login",(request,response)=> {
    response.send("Welcome to login page")
})

app.listen(9090,()=>console.log("Server running on port number 9090"));