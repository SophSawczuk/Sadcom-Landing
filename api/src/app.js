const express = require('express')
const morgan = require('morgan')
const server = express()
const reviews = require("./routes/reviews.js")
const cors = require('cors');


//Middlewares
server.use(express.json())
server.use(morgan('dev'))
server.use(cors({ origin: 'http://127.0.0.1:5173'}))

//Routes
server.use('/reviews', reviews)

//Exportación
module.exports = server




