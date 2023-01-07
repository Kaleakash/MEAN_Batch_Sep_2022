// This class is use to map the json data retrieve from rest api 
// it is use to map the collection from mongo db 
export class Product {
    constructor(public _id:number,
        public pname:string,
        public price:number,
        public url:string){}
}
