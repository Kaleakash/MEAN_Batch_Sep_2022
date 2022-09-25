var obj;
function loadObject() {
    //alert("event generated")  
    obj = new XMLHttpRequest();
    
    obj.onreadystatechange=callback     // this property keep the track about the request state 
    //obj.open("GET","sample.txt",true)
    obj.open("GET","https://jsonplaceholder.typicode.com/todos",true)
    obj.send();
}
/*
0 --> not initialize 
1 --> ready to send the request to target page 
2 --> request sent 
3---> processing 
4 --> ready to get the response  

*/
function callback() {
    //alert(obj.readyState)
        if(obj.readyState == 4 && obj.status == 200){
           //alert(obj.responseText)
           //console.log(obj.responseText)
           var jsonData = JSON.parse(obj.responseText);
           console.log(jsonData);
        }
}