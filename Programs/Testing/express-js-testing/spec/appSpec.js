let app = require("../src/app");
let supertest = require("supertest");

describe("Http Method Testing ",()=> {


    it("Http Text Message testing ",(done)=> {
        supertest(app).get("/").expect(200)
        .expect(res=>expect(res.text).toEqual("Welcome to Express JS")).
        end(err=>err?done.fail(err):done());
    });

    it("Http Employee object testing ",(done)=> {
        supertest(app).get("/empInfo").expect(200)
        .expect(res=>{
            //console.log(res.text);
            let emp = res.body;
            expect(emp.id).toEqual(100);
            expect(emp.name).toEqual("Ravi");
            expect(emp.age).toEqual(21);
        }).
        end(err=>err?done.fail(err):done());
    });
    
});
