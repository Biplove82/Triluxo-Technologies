const express= require("express");
const router=express.Router();

const{ createBook, getBooks, bookupdate, getsinglebook, deleteBook }=require("../Controller/bookController");
router.post("/create-Book",createBook); //api to create a new book
router.get("/get-all-book",getBooks);//api to get all book
router.put("/book-update/:_id",bookupdate);//api to update 
router.get("/get-single-book/:_id",getsinglebook); // api to get single book detail by id
router.delete("/deletebook/:_id",deleteBook)//api to delete book by id



module.exports=router;
