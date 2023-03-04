let dbConfig = require("./config/dbConfig");        // db config reference ready 
let productRouter = require("./router/productRouter");  // router reference ready 
let express = require("express");           // load express module 
let cors = require("cors");                 // load cors module 
let loginRouter = require("./router/loginRouter");
let portNumber = 3000;
// create the express js reference 
let app = express();                    // created express module reference. 


// connectin database 

dbConfig.connection();          // db connected successfully 

// adding any middleware 
app.use(express.json());        // extract json data from body part. 
app.use(cors());                // added middle ware cors to enable cors policy 

// http://localhost:3000/api/products/*     // checking main path 
app.use("/api/products",productRouter);
app.use("/api/login",loginRouter);


app.listen(portNumber,()=>console.log(`Running on port number ${portNumber}`));