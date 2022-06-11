const { Schema, model } = require('mongoose');

module.exports = model('user', new Schema({
  _id: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  orders: [
    {
      _id: { type: String, required: true, unique: true },
      dateTime: { type: String, required: true },
      cafeName: { type: String, required: true },
      description: { type: String, required: true },
      numberOfPersons: { type: Number, required: true }
    }
  ]
}));
