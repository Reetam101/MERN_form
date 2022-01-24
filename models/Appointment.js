const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: [true, "That username is already taken"]
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "That email id already exists"],
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
  "Please provide an email"]
  },
  phone: {
    type: Number,
    required: [true, "Please provide a contact no."]
  },
  date: {
      type: Date,
      default: Date.now
  }
});

// AppointmentSchema.pre('save', (next) => {
//   this.date = new Date()
//   next()
// })

module.exports = mongoose.model('Appointment', AppointmentSchema);
