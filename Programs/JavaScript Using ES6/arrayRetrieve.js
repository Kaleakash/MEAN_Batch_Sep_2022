// let num1 = [100,200,300,400,500];
// document.write("<br/> "+num1);
// document.write("<br/> "+num1.join("-"));
// document.write("<br/> Using for loop");
// // we can start in middle, we can stop in middle or we can increment more than one 
// for(let i=1;i<3;i=i+2){             // for loop we can customize 
//     document.write("<br/> "+num1[i]);
// }
// // retrieve the element index position one by one one 
// document.write("<br/> using for in loop")   // it will give index position 
// for(let i in num1){                         // using index we can get the value 
//     document.write("<br> index  "+i+"Value "+num1[i]);
// }
// // retrieve the element one by one 
// document.write("<br/> of loop")         // it will give value from array 
// for(let n of num1){
//     document.write("<br/> value "+n)
// }
// //1st option 
// document.write("<br/> passing the function name and retrieve value<br/>")
// num1.forEach(display);
// function display(n,i) {
//     document.write("<br/> "+n+" "+i)        // big logic while retreiveing 
// }
// //2nd option 
// document.write("<br/> passing the expression style and retrieve value<br/>")
// num1.forEach(function(n){
//     document.write("<br/> "+n)
// })
// //3rd option 
// document.write("<br/> passing the arrow style and retrieve value<br/>")
// num1.forEach(n=>document.write("<br/>"+n));

let num1 = [10,11,15,18,20,25];

for(let i=0;i<num1.length;i++){
    if(num1[i]%2==0){
        document.write("<br/> "+num1[i]);
    }
}
document.write("<br> using arrow style")
let num2 = num1.filter(v => v % 2==0)
num2.forEach(v=>document.write("<br/> "+v));
document.write("<br> using arrow style")

num1.filter(v => v%2== 0).forEach(v=>document.write("<br/> "+v));
document.write("<br/> Map modify each elements from array <br/>")
num1.map(v=>v+100).forEach(v=>document.write("<br/> "+v));














