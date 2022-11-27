let http = require("http");     // load the http module 

// http://localhost:9090    :request 
let server = http.createServer((request,response)=> {

    response.end("Welcome to Http Module develop in node js");      // send response and close the connection 

})

server.listen(9090,()=>console.log("Server running on port number 9090"));
