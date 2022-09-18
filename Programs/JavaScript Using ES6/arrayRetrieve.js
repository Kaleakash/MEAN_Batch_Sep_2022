let num1 = [100,200,300,400,500];
document.write("<br/> "+num1);
document.write("<br/> "+num1.join("-"));
document.write("<br/> Using for loop");
// we can start in middle, we can stop in middle or we can increment more than one 
for(let i=0;i<3;i++){             // for loop we can customize 
    document.write("<br/> "+num1[i]);
}
// retrieve the element index position one by one one 
document.write("<br/> using for in loop")   // it will give index position 
for(let i in num1){                         // using index we can get the value 
    document.write("<br> index  "+i+"Value "+num1[i]);
}
// retrieve the element one by one 
document.write("<br/> of loop")         // it will give value from array 
for(let n of num1){
    document.write("<br/> value "+n)
}
//1st option 
document.write("<br/> passing the function name and retrieve value<br/>")
num1.forEach(display);
function display(n,i) {
    document.write("<br/> "+n+" "+i)
}
//2nd option 
document.write("<br/> passing the expression style and retrieve value<br/>")
num1.forEach(function(n){
    document.write("<br/> "+n)
})
//3rd option 
document.write("<br/> passing the arrow style and retrieve value<br/>")
num1.forEach(v=>document.write("<br/>"+v));

num1.forEach()
