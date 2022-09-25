function Outer() {
    let a=10;       // outer function variable. 

    function Inner() {
        return a--;
    }

    return Inner;       // outer function return inner function . 
}
document.write("<br> With closure<br/>")
var obj = Outer();      // outer function execution done.
document.write("<br/>"+obj());
document.write("<br/>"+obj());
document.write("<br/>"+obj());

document.write("<br> without closure<br/>")

function Outer1() {
    let a=10;
    return ++a;
}
var obj1 = Outer1();        // i have called only once 
document.write("<br/>"+obj1)
//obj1 = Outer1();            // after called once again 
document.write("<br/>"+obj1)
//obj1 = Outer1();                 // call once again 
document.write("<br/>"+obj1)