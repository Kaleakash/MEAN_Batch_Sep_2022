let express = require("express");
let db = require("./config/dbConfig");
let studentRouter = require("./router/studentRouter");


let app = express();
app.use(express.json());        // to enable to post data from request 

db.dbConnection;      // it connect the database. 


app.use("/api/students",studentRouter); // verify main path 

app.listen(3000,()=>console.log("Application running on port number 3000"));