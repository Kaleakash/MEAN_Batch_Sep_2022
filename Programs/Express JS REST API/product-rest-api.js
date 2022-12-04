const { response } = require("express");
let express = require("express");
let app = express();
let portnumber =3000;


app.use(express.json());            // adding middleware to enable json data from request body part 

let p1 = {"pid":1,pname:"TV","price":55000};
let p2 = {"pid":2,pname:"Computer","price":38000};
let p3 = {"pid":3,pname:"Laptop","price":85000};
let products=[];
products.push(p1,p2,p3);
//products.push(p2);
//products.push(p3);
//console.log(products.length)

// retrieve all product details in json format. 
// http://localhost:3000/allProductDetails
app.get("/allProductDetails",(request,response)=> {
    response.json(products);                    // this convert all javascript array object json format. 
})

// using id we will check the product details using query param
// http://localhost:3000/findProductByQuery?pid=1
// http://localhost:3000/findProductByQuery?pid=10
app.get("/findProductByQuery",(request,response)=> {
    let productid = request.query.pid;
    let result = products.find(p=>p.pid==productid);
    if(result==undefined){
        response.json({"msg":"Product details not present with pid as "+productid});
    }else {
        response.json(result);
    }
})
// using id we will check the product details using path param 
// http://localhost:3000/findProductByPath/1
// http://localhost:3000/findProductByPath/10
app.get("/findProductByPath/:pid",(request,response)=> {
    let productid = request.params.pid
    let result = products.find(p=>p.pid==productid);
    if(result==undefined){
        response.json({"msg":"Product details not present with pid as "+productid});
    }else {
        response.json(result);
    }
})
// passing pid and pname we will check the product details using query param
// http://localhost:3000/findProductByQueryMultiple?pid=1&pname=TV
// http://localhost:3000/findProductByQueryMultiple?pid=10&pname=Computer
app.get("/findProductByQueryMultiple",(request,response)=> {
    let productid = request.query.pid;
    let productname = request.query.pname;
    let result = products.find(p=>p.pid==productid && p.pname==productname);
    if(result==undefined){
        response.json({"msg":"Product details not present with pid as "+productid});
    }else {
        response.json(result);
    }
})
// using id and pname we will check the product details using path param 
// http://localhost:3000/findProductByPathMultiple/1/TV
// http://localhost:3000/findProductByPathMultiple/10/TV
app.get("/findProductByPathMultiple/:pid/:pname",(request,response)=> {
    let productid = request.params.pid
    let productname = request.params.pname;
    let result = products.find(p=>p.pid==productid && p.pname==productname);
    if(result==undefined){
        response.json({"msg":"Product details not present with pid as "+productid});
    }else {
        response.json(result);
    }
})

// post method : it is use to create the resource 
// http://localhost:3000/checkPostMethod 
app.post("/checkPostMethod",(request,response)=> {
    response.send("Post method called..")
})

// post method : it is use to create the resource 
// http://localhost:3000/storeProduct 
app.post("/storeProduct",(request,response)=> {
    let product  = request.body;                        // this code is use to extract data from body part 
    //console.log(product);
    //response.send("Post method called..")
    let result = products.find(p=>p.pid==product.pid);
    if(result==undefined){
        products.push(product);
        response.json({"msg":"Product details stored successfully"});
    }else {
        response.json({"msg":"Product already exists pid must be unique"});
    }
})




app.listen(portnumber,()=>console.log(`The server running on port nubmer ${portnumber}`));