let http = require("http");
let url = require("url");
let server = http.createServer((request,response)=> {
                //console.log("I Came Here");         // server side 
                //console.log(request.url);               // server 
            let urlRef = url.parse(request.url,true);
            response.setHeader("content-type","text/html");     // in header we set data in html format. 
            if(urlRef.pathname=="/aboutus"){
                //response.end("Welcome to About Us Page")
                response.write("Hi<br/>")
                response.write("<font color=red>Welcome to About Us Page</font>");
            }else if(urlRef.pathname=="/contactus"){
                //response.end("Welcome to Concact us page");
                response.write("Hello<br/>")
                response.write("<b>Welcome to Contact Us Page</b>");
            }else {
                //response.end("Default page welcome")
                response.write("Welcome"+"<br/>")                   // adding the data or message to response object. 
                response.write("<h1>Welcome Default page</h1>");
            }
            response.end();         //reponse sent to client
            //response.end("<h1>Welcome to My Application</h1>"); 

})

server.listen(9090,()=>console.log("Server running on port number 9090"));