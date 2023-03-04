let bcryptjs = require("bcryptjs");

let password = "admin@123";
let hashPassword;
async function convertPasswordToHash(password){

let salt =  await bcryptjs.genSalt(2);
hashPassword  = await bcryptjs.hash(password,salt)
console.log(hashPassword);
}

async function comparePassword(password,hashPassword){
    let result = await bcryptjs.compare(password,hashPassword)
    console.log(result);
}


//convertPasswordToHash(password);
comparePassword(password,"$2a$04$xI2f2Vh96LXHO2vTH9w6i.j489CQuAs9i1WI0H4krZnK0QESDvy6G");