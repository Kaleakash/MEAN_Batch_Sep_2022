let express  = require("express");
let app = express();
let http = require("http").Server(app); // create http module express with hel help express reference 

let io = require("socket.io")(http); // pass http reference while creating socke.io referenc using iife style 

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"//index.html");
})

// this code execute if any client application connected using socket.io library 
io.on("connection",(socket)=> {
    console.log("Socket.io client connected....")

    // this code is use to receive value from socket.io client 
    // client is key 
    // array variable with hold 10 information
    let mm = new Map();
    mm.set("key1","value1");
    mm.set("key2","value2");
    mm.set("key3","value3");
    mm.set("key4","value4"); 
    socket.on("client",(msg)=> {
        console.log(msg);
    })
    socket.emit("server","From Server : Welcomet to Socket.io programming")
})





http.listen(3000,()=>console.log("Server running on port number 3000"));
