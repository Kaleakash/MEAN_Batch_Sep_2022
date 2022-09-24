// // literal style object creation with only property 
// let emp1 = {id:100,name:"Ravi",age:21};
// let emp2 = {id:101,name:"Ajay",age:25};
// document.write("<br/> Literal style object")
// document.write("<br/> First employee details");
// document.write("<br/> id "+emp1.id);
// document.write("<br/> name "+emp1.name);
// document.write("<br/> age "+emp1.age);
// document.write("<br/> Second employee details");
// document.write("<br/> id "+emp2.id);
// document.write("<br/> name "+emp2.name);
// document.write("<br/> age "+emp2.age)

// function style object creation ES5 style 
// function Employee() {
//    // var id = 102;
//     this.eid = 101;         // property of employee id,name,salary 
//     this.ename = "Ajay";
//     this.esalary = 15000;

//     this.displayEmpInfo = function() {          //  behaviour 
//         document.write("<br/> Employee Details are ")
//         document.write("<br/> id is "+this.eid)
//         document.write("<br/> name is "+this.ename)
//         document.write("<br/> salary is "+this.esalary)
//     }
// }
// document.write("<br/> Function style object creation")
// //Employee();
// var employee1 = new Employee();
// //document.write("<br/>id is "+employee1.eid)       // access property 
// //document.write("<br/>name is "+employee1.ename)
// //document.write("<br/>salary is "+employee1.esalary)
// employee1.displayEmpInfo();                 // call function 
// //document.write("<br/> id is "+employee1.id)

// function style with more than one object creation ES5 style 

// function Employee(eid,ename,esalary) {
    
//      this.eid = eid 
//      this.ename = ename;
//      this.esalary = esalary;
 
//      this.displayEmpInfo = function() {          //  behaviour 
//          document.write("<br/> Employee Details are ")
//          document.write("<br/> id is "+this.eid)
//          document.write("<br/> name is "+this.ename)
//          document.write("<br/> salary is "+this.esalary)
//      }
//      this.incrementSalary = function(salary){
//         this.esalary = salary;
//      }
//  }
//  document.write("<br/> Function style object creation")
// var employee1 = new Employee(1,"Ravi",34000);
// var employee2 = new Employee(2,"Ajay",48000); 
//  employee1.displayEmpInfo();
//  employee2.displayEmpInfo();
//  employee1.incrementSalary(36000);
//  employee1.displayEmpInfo();
//  employee2.displayEmpInfo();

// object creation in class style ES6 
// class Customer {
//         cid=100;            // while declaring property no need to use this keyword. 
//         cname = "Ajay";
//         cage=21;

//         displayCustomerInfo() {         // behaviour without this keyword 
//                 document.write("<br> customer information is ")
//                 document.write("<br/>Customer id is "+this.cid);
//                 document.write("<br/>Customer name is "+this.cname);
//                 document.write("<br/>Customer age is "+this.cage);
//         }
// }
// document.write("<br/> Customer Details in Class style ")
// let cust1 = new Customer();
// let cust2 = new Customer();
// //document.write("<br> Customer id is "+cust1.cid)
// //document.write("<br> Customer name is "+cust1.cname)
// //document.write("<br> Customer age is "+cust1.cage)
// cust1.displayCustomerInfo();
// cust2.displayCustomerInfo();

// constrcutor concept 

// class Customer {

//     constructor() {
//         document.write("<br/> customer class object created...")
//     }

//     displayInfo() {
//         document.write("<br> This is customer class behaviour ")
//     }
// }
// let cust1 = new Customer();
//cust1.displayInfo();

// creating more than one customer object with help of customer 
class Customer {
    //cid=0;          // instance variable or property 
    //cname="";
    //cage =0;          // this declaration can be optional 
    // it use to do intialization while creating memory 
    constructor(cid,cname,cage){
        this.cid = cid;
        this.cname = cname;
        this.cage= cage;
    }
    displayCustomerInfo() {
        document.write("<br/> Customer Details")
        document.write("<br/> Customer id is "+this.cid)
        document.write("<br/> Customer name is "+this.cname)
        document.write("<br/> Customer age is "+this.cage)
    }
}
let c1 = new Customer(101,"Ramesh",34);
let c2 = new Customer(102,"Ravi",35);
c1.displayCustomerInfo();
c2.displayCustomerInfo();






