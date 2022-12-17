const mongoRef = require("mongodb").MongoClient;
let url ="mongodb://127.0.0.1:27017"; 

let dbName = "mean_batch1"
mongoRef.connect(url,(err,client)=> {
    if(!err){
        let db = client.db(dbName);
                //console.log(db)
                let emp1 = {"_id":9,"name":"Dinesh",salary:28000,"city":"Mumbai","age":34}
                db.collection("Emp").insertOne(emp1,(err1,result)=> {
                    if(!err1){
                            console.log("Record inserted successfully")
                    }else {
                            console.log(err1);
                    }
                    client.close();
                })
    }else {
        console.log(err)
    }

    //
})