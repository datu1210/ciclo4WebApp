const mongoose = require('mongoose')
const {Schema} = mongoose


const EstudianteSchema = new Schema({
	nombres: String,
  apellidos: String,
	correo: String,
	contrasena: String,
  estado: Number,
  programa: String
})


module.exports = mongoose.model('estudiante', EstudianteSchema)