const express = require('express')
const app = express()

const PORT = 3000

app.get('/hola', (req, res) => {
    console.log('GET /hola...')
    res.send('Hola mundo desde ExpressJS! Texto actualizado desde Linux')
})

app.listen(PORT, () => {
    console.log(
        `Aplicación inicializada... 
        escuchando en el puerto ${PORT}.`
    )
})