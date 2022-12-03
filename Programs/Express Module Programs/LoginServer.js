let express = require("express");
let app = express();


app.get("/",(request,response)=> {
   // response.sendFile("index.html");
   //response.sendFile("C:\\Users\\LENOVO\\OneDrive\\Desktop\\MEAN Stack Phase 3\\MEAN_Batch_Sep_2022\\Programs\\Express Module Programs\\index.html");
   // response.send(__dirname);       //global property which provide current path directory 
   response.sendFile(__dirname+"\\index.html");
})

app.get("/aboutus",(request,response)=> { 
    response.sendFile(__dirname+"\\aboutus.html");
 })

 app.get("/contactus",(request,response)=> { 
    response.sendFile(__dirname+"\\contactus.html");
 })

 app.get("/feedback",(request,response)=> { 
    response.sendFile(__dirname+"\\feedback.html");
 })

 app.get("/login",(request,response)=> { 
    response.sendFile(__dirname+"\\login.html");
 })
app.listen(9090,()=>console.log("Server running on port number 9090"));