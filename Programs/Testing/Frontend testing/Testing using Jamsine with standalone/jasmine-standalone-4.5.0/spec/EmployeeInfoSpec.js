describe("User defined object testing ",()=> {


    it("Employee testing - function style  ",()=> {
        let emp = new Employee(100,"Ravi",21);
        expect(100).toEqual(emp.getId());
        expect("Ravi").toEqual(emp.getName());
        expect(21).toEqual(emp.getAge());
        expect(emp.getResult()).toBeTruthy()
        expect(emp.getAge()).toBeGreaterThan(20)
        expect(emp.greeting()).toContain('Ravi')
    })

    it("Customer testing - class style ",()=> {
        let cust = new Customer(101,"Ramesh",24);
        expect(101).toEqual(cust.getId());
        expect("Ramesh").toEqual(cust.getName());
        expect(24).toEqual(cust.getAge());
        
    })

})