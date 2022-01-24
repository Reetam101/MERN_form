const express = require('express')
const dotenv = require('dotenv');
const path = require('path')
const mongoose = require('mongoose')
const connectDB = require('./config/db');

const app = express()
dotenv.config({ path: './config/config.env' });

connectDB();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/home', (req, res, next) => {
    return res.json({
        message: "Hello"
    })
})
app.use('/api/appointment', require('./routes/appointment'))

const PORT = 5000
app.listen(PORT, console.log(`Server running on ${PORT}`))