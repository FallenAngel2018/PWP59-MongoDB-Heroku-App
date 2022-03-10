const express = require('express')
const bodyParser = require('body-parser')

const bd = require('./bd')
const config = require('./configuracion')
const rutas = require('./red/rutas')

bd( config.DB_URL )

var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

rutas( app )

app.use('/', express.static('public'))

app.listen( config.PUERTO, config.HOST )
// console.log( `La aplicación está escuchando en http://localhost:${config.PUERTO}`)
console.log( `La aplicación está escuchando en ${config.HOST}:${config.PUERTO}`)

// Add gitignore node_modules
// In GitHub Desktop
// Fuente: https://stackoverflow.com/questions/29820791/git-ignore-node-modules-folder-everywhere