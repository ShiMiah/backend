const express = require('express')
const app = express()

app.use(express.json())


let diary = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/diary', (request, response) => {
    response.json(diary)
})

app.get('/api/diary/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = diary.find(note => note.id === id)

    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/diary/:id', (request, response) => {
    const id = Number(request.params.id)
    diary = diary.filter(note => note.id !== id)

    response.status(204).end()
})

app.post('/api/diary', (request, response) => {
    const diary = request.body
    console.log(diary)
    response.json(diary)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})