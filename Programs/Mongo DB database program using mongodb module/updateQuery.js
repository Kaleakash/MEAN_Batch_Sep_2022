const mongoRef = require("mongodb").MongoClient;
let url ="mongodb://127.0.0.1:27017"; 

let dbName = "mean_batch1"
mongoRef.connect(url,(err,client)=> {
    if(!err){
        let db = client.db(dbName);
                //console.log(db)
                
                db.collection("Emp").updateOne({_id:2},{$set:{salary:47000}},(err1,result)=> {
                    if(!err1){
                                //console.log(result);
                                if(result.modifiedCount>0){
                                        console.log("Record updated")
                                }else if(result.matchedCount>0){
                                        console.log("Recored is present salary didn't update because old salary and new salary both are same ")
                                }else{
                                    console.log("Record not exists")
                                }
                    }else {
                            console.log(err1);
                    }
                    client.close();
                })
    }else {
        console.log(err)
    }
})