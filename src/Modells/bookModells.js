const mongoose=require("mongoose");
const bookschema=new mongoose.Schema({
    authorName:{
        type:String,

    },
    title:{
        type:String,

    },
    price: Number,

    ratings: Number

},{timestamps:true})
module.exports= mongoose.model("Book",bookschema);
