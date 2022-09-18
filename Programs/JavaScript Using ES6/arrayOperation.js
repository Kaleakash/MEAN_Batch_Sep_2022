// // creating array object in literal style 
// // num1 and nun2 consider reference so using this reference 
// // we can call pre-defined property and methods 
// let num1 = [];

// // creating array object using new keyword 

// let num2 = new Array();
// // creating array object with initialization 
// let num3 = [10,20,30,40,50];
// let num4 = new Array(10,20,20,30,40,50,50,60);
// num2.push(1111);
// document.write("<br/>"+num1.length)
// document.write("<br/>"+num2.length)
// document.write("<br/>"+num3.length)
// document.write("<br/>"+num4.length)

// document.write("<br/> 1st element from num3 "+num3[0]);
// document.write("<br/> 2nd element from num3 "+num3[1]);
// document.write("<br/> "+num3);          // it display all element as a string separated by , 
// num3.push(100);             // this function add the element at last 
// num3.push(200);
// document.write("<br/> "+num3);    
// num3.unshift(11);           // this function add the element at begining 
// num3.unshift(22);
// document.write("<br/> "+num3);    
// num3.pop();         // this function remove element from last 
// num3.shift();       // this function remove element at begining 
// document.write("<br/> "+num3);    

let num5 =[];
num5.push(100);
    num5.push(200);
num5.push(300);
num5.push(400);
document.write("<br/> "+num5); // 0-100, 1-200,2--300,3-400 
//num5.splice(2,1);       // this code remove 300 element from array
//num5.splice(1,1);       // this code remove 200 element from array
//num5.splice(1,2);       // this code from element from 1 and 2nd index position 100 and 200 
//num5.splice(1);             // this code remove elements from 1 position till end. 
//num5.splice(1,0,1111);          // added the element in 1 index position ie 1111
//num5.splice(1,1,2222);          // replace 1 index position element by 2222
//num5.splice(1,0,1111,2222,3333,4444);          // from index position 1 add 4 elements ie 1111,2222,3333,4444
num5.splice(1,2,1111,2222,3333,4444);          // from index position 1 remove 2 element and then add 4 elements ie 1111,2222,3333,4444
document.write("<br/> "+num5);
let x = ["A", "B", "C"]
document.write("<br/>"+x);
x.splice(0,1,'C');
x.splice(2,1,'A');
document.write("<br/>"+x);












