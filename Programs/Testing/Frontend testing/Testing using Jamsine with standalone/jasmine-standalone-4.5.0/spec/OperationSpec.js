describe("Operation Testing",()=> {


    it("Addition testing ",()=> {
        var result = add(10,20);
        expect(30).toEqual(result);
    })

    it("Sub testing ",()=> {
        var result = sub(100,50);
        expect(50).toEqual(result);
    })

    it("Mul testing ",()=> {
        var result = mul(10,20);
        expect(200).toEqual(result);
    })

    it("Div testing ",()=> {
        var result = div(100,20);
        expect(5).toEqual(result);
    })

})