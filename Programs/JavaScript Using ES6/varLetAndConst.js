var a=10;
a=20;
var a=30;
document.write("a "+a)
let b=10;
b=20;
//let b=30; so we can't re declare same variable once again using let keyword. 
for(var i=0;i<10000;i++){                       // global consider 

}
document.write("<br/> Value of i is "+i);
for(let j=0;j<10000;j++){                       // for loop block scope consider 

}
//document.write("<br/> Value of j is "+j);
function display() {
    var m=100;                              // function scope consider. 
    let n=200;
    o=300;                              // global variable without var or let. we access outside function 
    document.write("<br/> m inside function "+m);
    document.write("<br/> n inside function "+n);
    document.write("<br/> o inside function "+o);
}
display();
//document.write("<br/> m outside function "+m);
//document.write("<br/> n outside function "+n);
document.write("<br/> o outside function "+o);
const c=400;
//c=500;                 we can't change the value 
document.write("<br> Value of c is "+c);





