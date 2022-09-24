function retrieveData() {
    let employees1 = JSON.parse(sessionStorage.getItem("obj1"));
    let employees2 = JSON.parse(localStorage.getItem("obj2"));
    alert(employees1.length)
    //alert(emp1.id)
    //alert("Value from session storage "+name1+" Value from local storage "+name2);
    for(let i =0;i<employees1.length;i++){
        let pTag = document.createElement("p");
        let pTagValue = document.createTextNode("Id is "+employees1[i].id)
        pTag.appendChild(pTagValue);
        document.getElementById("data").appendChild(pTag);
    }
  
}