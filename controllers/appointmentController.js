const Appointment = require('../models/Appointment')

exports.addAppointment = async (req, res, next) => {
    try {
        const { username, email, phone, date } = req.body

        const newAppointment = await Appointment.create(req.body)
        return res.status(201).json({
            success: true,
            data: newAppointment
        })
    } catch (err) {
        console.log(err);
    }
}