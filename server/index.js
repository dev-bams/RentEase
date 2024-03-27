const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./models/Register");
const ListingModel = require("./models/Listings");

const app = express();
app.use(cors());
app.use(express.json());

const listingsMongoUrl =
  "mongodb+srv://FrancescaGalang:zIxWkoXIOgieSd4B@cluster0.qywthgw.mongodb.net/rentease";
mongoose.connect(listingsMongoUrl);

app.get("/getListings", (req, res) => {
  ListingModel.find()
    .then((listings) => res.json(listings))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email: email }).then((user) => {
    if (user) {
      console.log(user.accountType);
      if (user.password === password) {
        res.json({ message: "Success", accountType: user.accountType }); // Include account type in response
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

app.post("/signup", (req, res) => {
  RegisterModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
