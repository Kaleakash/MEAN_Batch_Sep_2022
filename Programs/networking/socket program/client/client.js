let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let client = net.createConnection(3000,"127.0.0.1",()=>{
    
    // this message display on client console. 
    console.log("Client send request to server");
    
    // from client machine we are sending the data to server machine 
    client.write("Hello Server! I am client");


})

// This code is use to receive the value from server machine. 
client.on("data",(msg)=> {
    console.log(msg.toString());
})

 r1.on("line",(input)=> {
    console.log("Enter the data")
    client.write('From Client :'+input)
})