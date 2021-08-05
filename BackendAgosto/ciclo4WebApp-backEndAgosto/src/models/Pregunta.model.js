const mongoose = require('mongoose')
const {Schema} = mongoose


const PreguntaSchema = new Schema({
	encabezado: String,
  puntaje: Number,
	competencias: String,
	estado: Number,
  respuestaA: String,  
  respuestaB: String,  
  respuestaC: String,  
  respuestaD: String,  
  correcta: String
})


module.exports = mongoose.model('pregunta', PreguntaSchema)




