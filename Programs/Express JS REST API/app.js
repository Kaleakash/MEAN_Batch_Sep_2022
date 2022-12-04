let express = require("express");
let app = express();
//Get methods 
// http://localhost:3000 
app.get("/",(request,response)=> {
    response.send("Welcome to Simple Rest API in Plain Text Format");
})
// http://localhost:3000/plain 
app.get("/plain",(request,response)=> {
    response.setHeader("content-type","text/plain")
   // response.send("<abc>Welcome to Simple Rest API abc>");
   response.send("<Emp><Id>100</Id><Name>Raj</Name></Emp>")
})
// http://localhost:3000/html
app.get("/html",(request,response)=> {
    response.setHeader("content-type","text/html")
   // response.send("<h2>Welcome to Simple Rest API</h2>");
   response.send("<Emp><Id>100</Id><Name>Raj</Name></Emp>")
})
// http://localhost:3000/xml
app.get("/xml",(request,response)=> {
    response.setHeader("content-type","text/xml")
   // response.send("<abc>Welcome to Simple Rest API</abc>");
   response.send("<Emp><Id>100</Id><Name>Raj</Name></Emp>")
})
// http://localhost:3000/json 
app.get("/json",(request,response)=> {
    response.json({"name":"Welcome Rest API created using Express JS"});
})


app.listen(3000,()=>console.log("Sever running on port number 3000"));