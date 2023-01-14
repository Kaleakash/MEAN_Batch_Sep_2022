let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let server = net.createServer();

// this line will execute if any client send the request to this application using port number 3000
server.on("connection",(socket)=> {
    console.log("Client connected...");

    // this code is use to receive the data from client side
    socket.on("data",(msg)=> {
        console.log(msg.toString())  // receive the data from client and display its own console 
    })

    // from server sending the data to client machine 
    socket.write("Welcome client you are successfully connected this application!")

    // this function fire event again and again when we we hit enter key.
    console.log("Enter the data")
   r1.on("line",(input)=> {
    console.log("Enter the data")
    socket.write('From Server :'+input)
   })
});


server.listen(3000,()=>console.log("Server running on port number 3000"));
