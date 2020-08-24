const port = 4780

const express = require('express')

const app = express()

const route = require('./routes/routes')

app.use('/api', route)

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.listen(port, () => {
    console.log('rodando na porta', port)
})