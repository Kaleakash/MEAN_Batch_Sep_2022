// function add(a,b){
//     let sum = a+b;
//     return sum;
// }

// function sub(a,b){
//     let sum = a-b;
//     return sum;
// }

// function sayHello(name){
//     return "Welcome to Node JS testing"+name;
// }

// module.exports = {add,sub,sayHello};

exports.add = (a,b)=>{
    let sum = a+b;
    return sum;
}
exports.sub= function(a,b){
    let sub = a-b;
    return sub;
}
exports.sayHello=(name)=>{
    return "Welcome to Node JS testing"+name;
}
//module.exports = {add,sub,sayHello};