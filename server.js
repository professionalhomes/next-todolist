require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')

const app = express()

// Mongoose
mongoose.connect(process.env.MONGO_URI)

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

// Routes
app.use('/api', routes)

// Start server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
