const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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
  const restaurant = req.body;
  console.log(restaurant);
  res.status(201).json({
    message: 'Restaurant added successfully!'
  });
});

app.get("/api/restaurants", (req, res, next) => {
  const restaurants = [
    {
      id: "kddkfjow12",
      name: "Maiwand",
      deliveryPrice: "100",
      hours: "2-4",
      address: "Pole Sorkh",
      contact: "0788121314"
    },
    {
      id: "kdwrajow12",
      name: "Tea Talk",
      deliveryPrice: "100",
      hours: "2-6",
      address: "Charahi Pole Sorkh",
      contact: "0777112233"
    }
  ]
  return res.status(200).json({
    message: "Restaurants fetched successfully!",
    restaurants: restaurants
  });
});

module.exports = app;
