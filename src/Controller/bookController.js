const bookmodels=require("../Modells/bookModells");

//Create Book API
const createBook= async function(req,res){
    let data= req.body;
    let savedbook= await bookmodels.create(data);
    res.status(200).send({msg:"Book created sucessfully",savedbook});
}

//Get all book API
const getBooks= async function(req,res){
    try {
        let books= await bookmodels.find();
        res.status(200).send({books});
        
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
     }
   }
   //book Update  API
const bookupdate = async function (req, res) {
    let id = req.params._id;
    let updatebookdata= req.body;
    try {
      let updatebook = await bookmodels.findByIdAndUpdate(id, updatebookdata, {
        new: true,
      });
      if (!updatebook) {
        res.status(404).json({ msg: "book Not Found" });
      }
      res.json(updatebook);
    } catch (error) {
      res.status(500).json({ msg: "error" });
    }
  };

  const getsinglebook = async function (req, res) {
    let userId = req.params._id;
    let bookDetails = await bookmodels.findById(userId);
    if (!bookDetails)
      return res.send({ status: false, msg: "No such Book exists" });
  
    res.send({ status: true, data: bookDetails });
};

const deleteBook = async function (req, res) {
    try {
      let userId = req.params._id;
      let bookdelete = await bookmodels.findByIdAndDelete(userId);
      if (!bookdelete) {
        res.status(404).json({ msg: "User not Found" });
      }
      res.json({ msg: "User Delted Sucessfully" });
    } catch (error) {
      res.status(500).json({ msg: "error" });
    }
  };

module.exports={createBook,getBooks,bookupdate,getsinglebook,deleteBook};