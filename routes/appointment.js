const express = require('express');
const router = express.Router();
const { addAppointment } = require('../controllers/appointmentController')

router.route('/').post(addAppointment)

module.exports = router