let http = require("http");
let url = require("url");
let indexPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Welcome to My Web Page</h2>
    <a href="login">Login Page</a> |
    <a href="aboutus">About Us</a> |
    <a href="contactus">Contact Us</a> |
</body>
</html>
`
let aboutUs = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>About Us page</h2>
    <p>About Us Page Description</p>
    <a href="/">Index Page</a>
</body>
</html>
`
let contactUs = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Contact Us Page</h2>
    <p>Contact Us Page Description</p>
    <a href="/">Index Page</a>
</body>
</html>
`
let loginPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Login Page</h2>
    <form action="check" method="get">
        <label>EmailId</label>
        <input type="email" name="email"/><br/>
        <label>Password</label>
        <input type="password" name="password"/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
    </form>
    <br/>
    <a href="/">Index Page</a>
</body>
</html>
`
let server = http.createServer((request,response)=> {                
            let urlRef = url.parse(request.url,true);           // because we pass boolean value as a true 
            response.setHeader("content-type","text/html");    
            if(urlRef.pathname=="/login"){
                    response.write(loginPage);
            }else if(urlRef.pathname=="/aboutus"){
                    response.write(aboutUs)
            }else if(urlRef.pathname=="/contactus"){
                    response.write(contactUs)
            }else if(urlRef.pathname=="/check"){
                    //response.write("Request came from login page");
                    let login = urlRef.query;       // query consider as reference.
                    if(login.email=="raj@gmail.com" && login.password=="123"){
                        response.write("<h2>Successfully login</h2>");
                    } else {
                        response.write("<h2>Failure try once again</h2>"); 
                    }
            }else{
                response.write(indexPage);
            }
            response.end();         
})
server.listen(9090,()=>console.log("Server running on port number 9090"));


