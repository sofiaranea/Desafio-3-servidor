const express = require('express')
const Contenedor = require('./container')


const app = express()
const itemDB = 'productos.json'
const productos = new Contenedor(itemDB)


app.get('/productos', (req, res) => {
    const data = productos.getAll()
    res.json(data)
})

app.get('/productoRandom', (req, res) => {
    const data = productos.getAll()
    res.json(data[Math.floor(Math.random() * data.length)])
})

app.listen(8080)