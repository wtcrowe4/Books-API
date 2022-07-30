// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const MONGO_URI = process.env.MONGO_URI
app.use(express.json())
app.use(cors())

//CORS

//DATABASE
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => {console.log(`Mongo connected: ${MONGO_URI}`)})

//CONTROLLERS 
const booksController = require('./controllers/booksController')
app.use('/books', booksController)   

// ROUTES
app.get('/', (req, res) => {
  res.send('Books API')
})

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
