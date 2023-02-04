// user defined object in function style 
function Employee(id,name,age) {
    // this.id =100;
    // this.name = "Ravi";
    // this.age = 21;
    this.id = id;
    this.name = name;
    this.age = age;
    this.result = true;
    this.displayEmpInfo = function() {
        return this.id+" "+this.name+" "+this.age;
    }

    this.getId = function(){
        return this.id;
    }
    this.getName = function(){
        return this.name;
    }
    this.getAge = function() {
        return this.age;
    }
    this.getResult = function() {
        return this.result;
    }
    this.greeting= function() {
        return "Welcome user "+this.name+" to JavaScript";
    }
}
// user defined object in class style 
class Customer {
    constructor(id,name,age,totalPurchase,discount){
        this.id = id;
        this.name = name;
        this.age = age;
        this.totalPurchase = totalPurchase;
        this.discount= discount;
    }
    getId(){
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getTotalAmount = function() {
            if(this.totalPurchase>=10000){
                return this.discount = this.totalPurchase+0.10*this.totalPurchase;
            }else if(this.totalPurchase >=5000){
                return this.discount = this.totalPurchase+0.05*this.totalPurchase;
            }else {
                return this.discount = 0;
            }
    }
}


