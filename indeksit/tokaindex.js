const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}
let diary =[]
const password = process.argv[2]

const url =
    `mongodb+srv://shishir:${password}@cluster0.6bd0sfo.mongodb.net/diaryApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const diarySchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Diary = mongoose.model('Diary', diarySchema)

diary.save().then(result => {
    console.log('Diary entry saved!')
    mongoose.connection.close()
})

Diary.find({ important: true }).then(result => {
    // ...
})