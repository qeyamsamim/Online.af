const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: { type: String, required: true },
  deliveryPrice: { type: String, required: true },
  hours: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
