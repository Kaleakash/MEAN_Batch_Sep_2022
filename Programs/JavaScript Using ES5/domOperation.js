//alert("Welcome External JS file")
function addData() {
    //alert("event generated");

    var name = document.getElementById("uname").value;
    var age = document.getElementById("uage").value;

    var pTag = document.createElement("p");     // it is use to create reference of p tag 
    //var pTagContent = document.createTextNode("Welcome to JS");     // it is use to create the content
    
    var pTagContent = document.createTextNode("Name is "+name+" Age is "+age);     // it is use to create the content

    pTag.appendChild(pTagContent);          // added content inside p tag <p>Welcome to JS</p>
    if(age > 40){
        pTag.setAttribute("class","myClass");
    }else {
        pTag.setAttribute("class","myClass1");
    }
    

    document.getElementById("result").appendChild(pTag)           // adding p tag inside a div tag 

    document.getElementById("uname").value="";
    document.getElementById("uage").value="";
}