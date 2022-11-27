let readline = require("readline");     // readline use asyn concept. 
let r1       = readline.createInterface({
                    input:process.stdin,        // process is global object 
                    output:process.stdout
                });
r1.question("Enter your name",(name)=> {

        r1.question("Enter your id ",(id)=> {

            r1.question("Enter your salary",(salary)=> {
                        console.log("id is "+id);
                        console.log("name is "+name);
                        console.log("salary is "+salary);

                        r1.close();
            });

        });
    
        
});  
//console.log(id);                