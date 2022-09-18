// creating array object in literal style 
// num1 and nun2 consider reference so using this reference 
// we can call pre-defined property and methods 
let num1 = [];

// creating array object using new keyword 

let num2 = new Array();
// creating array object with initialization 
let num3 = [10,20,30,40,50];
let num4 = new Array(10,20,20,30,40,50,50,60);

document.write("<br/>"+num1.length)
document.write("<br/>"+num2.length)
document.write("<br/>"+num3.length)
document.write("<br/>"+num4.length)

document.write("<br/> 1st element from num3 "+num3[0]);
document.write("<br/> 2nd element from num3 "+num3[1]);
document.write("<br/> "+num3);          // it display all element as a string separated by , 
num3.push(100);             // this function add the element at last 
num3.push(200);
document.write("<br/> "+num3);    
num3.unshift(11);           // this function add the element at begining 
num3.unshift(22);
document.write("<br/> "+num3);    
num3.pop();         // this function remove element from last 
num3.shift();       // this function remove element at begining 
document.write("<br/> "+num3);    




