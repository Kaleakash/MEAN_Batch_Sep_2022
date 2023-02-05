let obj = require("../src/operation");

describe("Operation testing",()=> {

    it("Addition testing ",()=> {
        let result = obj.add(100,200);
        expect(300).toEqual(result);
    })

    it("sub testing ",()=> {
        let result = obj.sub(200,50);
        expect(150).toBe(result);
    })

    it("say Hello",()=> {
        let result = obj.sayHello("Ajay");
        expect(result).toContain("Ajay");
    })
})