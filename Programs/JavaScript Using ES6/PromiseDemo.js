// es5 style 
var obj1 = new Promise(function(resolve,reject){
    //resolve("Promise resolve in ES5 style"),
    reject("Promise rejected in ES5 style")
});

obj1.then(function(result){
    document.write("<br/>then called.."+result)
}).catch(function(error){
    document.write("<br/>catch called..."+error)
})

//es6 style 

var obj2 = new Promise((resolve,reject)=> {
    //resolve("Promise resolve in ES6 style"),
    reject("Promise rejected...ES6 style")
});

obj2.then(result=>document.write("<br/>then called"+result)).catch(error=>document.write("<br/>catch called"+error));
