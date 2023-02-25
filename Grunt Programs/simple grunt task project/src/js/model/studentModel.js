let mongoose = require("mongoose");         // load the module 

mongoose.pluralize(false);// by default mongoose created collection name in plural with lower case. 
//Schema help us to create the structure for the collection 

let studentSchema = mongoose.Schema({
    _id:Number,
    first_name:{type:String,required:[true,"First Name is required"]},
    last_name:{type:String,required:false},
    class:{type:String,required:[true,"class details is required"]},
    age:{type:Number,required:[true,"Age must be required"],min:6,max:18}
});


//1st parameter is collection name, 2nd parameter is schema details 
// by default mongoose created collection name in plural with lower case. 
let studentModel  = mongoose.model("Student",studentSchema);

module.exports=studentModel;

