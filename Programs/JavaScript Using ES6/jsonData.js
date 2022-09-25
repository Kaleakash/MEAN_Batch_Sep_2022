// ES6 style load the data 
// function loadData() {
// var main = document.getElementById("out");      // you got the reference of div tag using id attribute 

// //fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(result=>console.log(result)).catch(error=>console.log(error));
// fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(result=>{
//    //console.log(result)
//  //main.innerHTML = result.map(obj=>obj.id+" "+obj.title).join("<br\>")
//  main.innerHTML = result.map(obj=>obj.id+","+obj.title).join("<br/>")
// }).catch(error=>console.log(error));
// }


// ES7 style 

async function loadData() {
    var main = document.getElementById("out");      // you got the reference of div tag using id attribute 
    try{
    var res = await fetch("https://jsonplaceholder.typicode.com/todos")
    var result =await res.json();
    //console.log(data)
    main.innerHTML = result.map(obj=>obj.id+","+obj.title).join("<br/>")
    }catch(ex){
        console.log("Error generated.."+ex)
    }
}