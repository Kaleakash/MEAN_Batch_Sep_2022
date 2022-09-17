// Normal function syntax : this function we can call before as well as after declaration 
display1();
function display1() {
    document.write("<br/> Normal function syntax")
}
display1();


// expression style function with name 
// if we store function body in variable the variable name itself behave like a function name
let display = function display2() {
    document.write("<br/> Expression style function with name");
}
//display2();
display();
// expression style function without name anonyous name 
// let/ var functionname = function body
//display3();       // expresson style function can call only after declaration 
let display3 = function() {
    document.write("<br> Expression style function without name")
}
display3();