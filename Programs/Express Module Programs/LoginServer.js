let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");
const { response } = require("express");
let app = express();


// add middleware module 
app.use(bodyParser.urlencoded({extended:true}));    // it use to enable post data from reqeust body 

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


 app.get("/signUp",(request,response)=> { 
    response.sendFile(__dirname+"\\signUp.html");
 })


 // checking login details using get method data send through URL using query concept 
 app.get("/checkUser",(request,response)=> { 
    let emaildid = request.query.emailid;
    let password = request.query.password;
    if(emaildid=="raj@gmail.com" && password=="123"){
        response.send("<h2>Successfully login</h2>");
    }else {
        response.send("<h2>Failure try once again</h2>");
    }
 })

 // checking login details using post method data send through body part of request. 
 app.post("/checkUser",(request,response)=> { 
    let emaildid = request.body.emailid
    let password = request.body.password;
        console.log(emaildid+" "+password);         // node js console 
    if(emaildid=="raj@gmail.com" && password=="123"){
        response.send("<h2>Successfully login</h2>");
    }else {
        response.send("<h2>Failure try once again</h2>");
    }
 })

app.post("/register",(request,response)=> {
    let emaildidValue = request.body.emailid
    let passwordValue = request.body.password;

    let login  = {"emaildid":emaildidValue,"password":passwordValue};

    let loginInfo = JSON.parse(fs.readFileSync("LoginDetails.json"));

    let result = loginInfo.find(ll=>ll.emaildid==emaildidValue);

    if(result==undefined){
        loginInfo.push(login);
        fs.writeFileSync("LoginDetails.json",JSON.stringify(loginInfo));
        response.send("Account created successfully");
    }else {
        response.send("Account Can't create because EmailId must be unique");
    }
});


app.listen(9090,()=>console.log("Server running on port number 9090"));


