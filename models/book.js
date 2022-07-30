const mongoose = require('mongoose')
const { Schema } = mongoose 

const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    image: String

})

const Books = mongoose.model('books', bookSchema)

module.exports = Books