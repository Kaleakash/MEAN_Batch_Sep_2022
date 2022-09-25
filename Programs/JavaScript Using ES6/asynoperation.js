document.write("Hi<br/>")
    let i=0;
    let j=0;
    setTimeout(()=> {
        //document.write("Hello<br/>");
        document.getElementById("d1").innerHTML="Hello"
    },3000) 
    setInterval(()=> {
        document.getElementById("d2").innerHTML="I Am fine "+i;
        i++;
    },1000);


 
    var a = setInterval(()=> {
        if(j%2==0){
            document.getElementById("d3").style.color="RED"
            document.getElementById("d3").setAttribute("","");
        }else {
            document.getElementById("d3").style.color="GREEN"
        }
        
        j++;
    },1000);

    function stop() {
        clearInterval(a);
    }
document.write("How r you<br/>")