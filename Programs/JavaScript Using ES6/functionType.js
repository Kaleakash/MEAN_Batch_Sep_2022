// // Normal function syntax : this function we can call before as well as after declaration 
// display1();
// function display1() {
//     document.write("<br/> Normal function syntax")
// }
// display1();


// // expression style function with name 
// // if we store function body in variable the variable name itself behave like a function name
// let display = function display2() {
//     document.write("<br/> Expression style function with name");
// }
// //display2();
// display();
// // expression style function without name anonyous name 
// // let/ var functionname = function body
// //display3();       // expresson style function can call only after declaration 

// let display3 = function() {
//     document.write("<br> Expression style function without name")
// }
// display3();
// let display4 = ()=> document.write("<br/> Arrow function");
// display4();
// let addNumber1 = function(a,b){
//     var sum = a+b;
//     return sum;
// }
// document.write("<br/> Addition of two number using expression style "+addNumber1(10,20));
// let addNumber2 = (a,b)=>a+b;
// document.write("<br/> Addition of two number using arrow style is "+addNumber2(10,20));
// let findLargest1 = function(a,b){
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }
// document.write("<br/> largest of two number using expression style "+findLargest1(20,10));
// let findLargest2 = (a,b)=>{
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }
// document.write("<br/> largest of two number using expression style "+findLargest2(20,100));

// //()=> document.write("Welcome");

// function greeting(name,callback){
//         return "Welcome "+callback(name);
// }


// let maleinfo = function(fname){
//     return "Mr "+fname;
// }

// let femaleinfo = (fname)=>"Miss "+fname;

// //var result = greeting("Akash",maleinfo);
// //document.write(result);
// document.write("<br/> "+greeting("Ravi",maleinfo));
// document.write("<br/> "+greeting("Seeta",femaleinfo));
// document.write("<br/>"+greeting("Ajay",function(fname){
//     return "Mr "+fname;
// }));
// document.write("<br/>"+greeting("Reeta",(fname)=>"Miss "+fname))



// function info(fname){
//     document.write(fname);
// }

// var abc = "Ravi";
// info(abc);

(function(){
    document.write("<br/> IIFE Expression style function")
})();

(()=>document.write("<br/> IIFE Arrow style function"))();








