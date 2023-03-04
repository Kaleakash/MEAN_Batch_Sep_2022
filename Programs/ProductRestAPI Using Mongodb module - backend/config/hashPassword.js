let bcryptjs = require("bcryptjs");


async function convertPasswordToHash(password){

let salt =  await bcryptjs.genSalt(2);
hashPassword  = await bcryptjs.hash(password,salt)
return hashPassword;
}

async function comparePassword(password,hashPassword){
    let result = await bcryptjs.compare(password,hashPassword)
    return result;
}


module.exports={convertPasswordToHash,comparePassword}