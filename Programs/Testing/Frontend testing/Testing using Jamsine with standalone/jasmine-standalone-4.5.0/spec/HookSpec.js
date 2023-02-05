describe("Hook funtion testing ",()=> {


    beforeAll(()=> {
        console.log("Before all it it will call only once")
    })
    beforeEach(()=> {
        console.log("Before Each it. it will invoke")
    })

    it("First function ",()=> {
        expect(true).toBeTruthy()
        console.log("first testing ")
    });

    it("Second function ",()=> {
            console.log("second testing")
            expect(false).toBeFalsy()
    });

    afterEach(()=> {
        console.log("After each it. it will invoke")
    });

    afterAll(()=> {
        console.log("After all it it will call only once")
    });
    
})