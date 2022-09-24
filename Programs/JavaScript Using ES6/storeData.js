let employees = []
function storeData() {
    //let name = "Ravi Kumar";
    let idValue = document.getElementById("n1").value;
    let nameValue = document.getElementById("n2").value;
    let salaryValule = document.getElementById("n3").value;
    let emp = {id:idValue,name:nameValue,salary:salaryValule};
   // sessionStorage.setItem("obj1",emp)
   employees.push(emp);
    sessionStorage.setItem("obj1",JSON.stringify(employees));
    localStorage.setItem("obj2",JSON.stringify(employees));
    alert("Data Stored...")
}