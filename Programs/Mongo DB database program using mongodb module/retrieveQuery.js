const mongoRef = require("mongodb").MongoClient;
let url ="mongodb://127.0.0.1:27017"; 

let dbName = "mean_batch1"
mongoRef.connect(url,(err,client)=> {
    if(!err){
        let db = client.db(dbName);
                //console.log(db)
                
               // let cursor = db.collection("Emp").find();
               let cursor = db.collection("Emp").find({salary:{$gt:20000}});
                cursor.forEach(doc=>{
                    console.log("id is "+doc._id+" Name "+doc.name+" Salary is "+doc.salary); 
                    //console.log(doc)
                    //console.log("id is "+doc._id+" Name "+doc.name+" Salary is "+doc.salary+" city is "+doc.city+" age is "+doc.age);
                    //client.close();    
                })
                
    }else {
        console.log(err)
    }
})