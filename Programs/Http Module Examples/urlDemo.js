let url = require("url");
let urlDetails = "http://wwww.google.com:80/welcome?name=Ravi&age=21";
console.log(urlDetails);
//let urlObj = url.parse(urlDetails);     // query consider as only property ie string 
let urlObj = url.parse(urlDetails,true); // this query property consider as reference
//console.log(urlObj)
    console.log(urlObj.pathname)
console.log(urlObj.host)
console.log(urlObj.port)
    console.log(urlObj.query)       // it consider as only property not reference. 
let name= urlObj.query.name;
let age = urlObj.query.age;
console.log(name+" "+age)