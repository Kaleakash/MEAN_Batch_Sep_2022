let express = require("express");          // load the express module 

let app = express();                    // created reference of express module 
//let app1 = express();

let ws = require("express-ws")(app);   // loading express-ws and passing the reference reference of express js
                                // using iife function style. 

                                // http://localhost:3000
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"//index.html");
})
// if any websocket request receive this this function get called.. 

app.ws("/",(socket,req)=> {
        console.log("WebSocket Request send by client")

        // This code is use to receive the data from websocket browser client. 
        socket.on("message",(msg)=> {
            console.log(msg);
            // server socket keep set of information 
            // those information they display for us 
            //then client choose option and base upon their option then will give answer. 
            socket.send("I recevied your message as "+msg);
        })

        // from WebSocker server send the data to client 
        socket.send("From Server : Your connected web socket application successfully");
});

app.listen(3000,()=>console.log("running"))


