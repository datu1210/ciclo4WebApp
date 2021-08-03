const express = require('express')
const app = express()

const morgan = require('morgan')
const cors   = require('cors')
const bodyparser = require('body-parser')
require('./database')

app.set('Port', 4000)
app.use(morgan('dev'))

/*app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())*/
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(cors({origen:'*'}))

app.use('/usuario',require('./routes/Usuario.route'))
app.use('/pregunta',require('./routes/Pregunta.route'))
app.use('/estudiante',require('./routes/Estudiante.route'))
app.use('/resultado',require('./routes/Resultado.route'))

app.listen(app.get('Port'),()=>{

	console.log('servidor arriba, en el puerto', app.get('Port'))
})