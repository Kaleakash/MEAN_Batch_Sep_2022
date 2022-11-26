let fs = require("fs");
//let data = fs.readFileSync("demo1.txt");
//let data = fs.readFileSync("index.html");
try{
let data = fs.readFileSync("C:\\Users\\LENOVO\\OneDrive\\Desktop\\Maven Pluginsfasasf.txt");
//console.log(data);
console.log(data.toString()) // convert buffer to string format 
}catch(err){
    console.log(err);
}
console.log("normal statement1")
console.log("normal statement2")
console.log("normal statement3")