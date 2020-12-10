const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Restaurant = require('./models/restaurant');

const app = express();

const conString = 'mongodb://localhost:27017/onlineAf';

mongoose.connect(conString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/restaurants", (req, res, next) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    deliveryPrice: req.body.deliveryPrice,
    hours: req.body.hours,
    address: req.body.address,
    contact: req.body.contact
  });
  restaurant.save().then(createdRestaurant => {
    res.status(201).json({
      message: 'Restaurant added successfully!',
      restaurantId: createdRestaurant._id
    });
  });
});

app.get("/api/restaurants", (req, res, next) => {
  Restaurant.find().then(documents => {
    res.status(200).json({
      message: 'Restaurants fetched successfully!',
      restaurants: documents
    });
  });
});

// This route deletes restaurants from DB.
app.delete("/api/restaurants/:id", (req, res, next) => {
  Restaurant.deleteOne({
    _id: req.params.id
  }).then(result => {
    console.log(result);
    res.status(200).json({
      message: 'Restaurant Deleted!'
    });
  });
});

module.exports = app;
