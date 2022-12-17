const mongoRef = require("mongodb").MongoClient;
let url ="mongodb://127.0.0.1:27017"; 

let dbName = "mean_batch1"
mongoRef.connect(url,(err,client)=> {
    if(!err){
        let db = client.db(dbName);
                //console.log(db)
                
                db.collection("Emp").deleteOne({_id:1},(err1,result)=> {
                    if(!err1){
                                //console.log(result);
                                if(result.deletedCount>0){
                                    console.log("Record deleted successfully")
                                }else {
                                    console.log("record not present");
                                }
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