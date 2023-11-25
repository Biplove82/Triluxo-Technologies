const express=require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors= require("cors");
const route=require("./routes/routes");

const options = {
    origin: "*",
  };
  app.use(cors(options));

  mongoose
  .connect(
    "mongodb+srv://Biplove:fEjZqJpkevGIdoy9@cluster0.0djezio.mongodb.net/Triluxo?retryWrites=true&w=majority",
    {
    //   useNewUrlParser: true,

    //   useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDb is Connected"))
  .catch((err) => console.log(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/v1",route);

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
  });
