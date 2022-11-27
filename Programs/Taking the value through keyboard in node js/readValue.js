let readline = require("readline");
let r1       = readline.createInterface({
                    input:process.stdin,        // process is global object 
                    output:process.stdout
                });


r1.question("Enter your name",(name)=> {
    console.log("Your name is "+name);

    //r1.close();
})                  // this code is asynchronous 

                 // this code is asynchronous 
//console.log("hello")