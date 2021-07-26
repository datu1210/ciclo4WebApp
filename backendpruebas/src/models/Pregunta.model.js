const mongoose = require('mongoose')
const {Schema} = mongoose

const PreguntaSchema = new Schema({
	encabezado:String,
  puntaje:Number,
	categoria:String,
	estado:Number,
    respuestas : [{
        opcion : String,
        correcta : Number
         }    
        ]
    
})
module.exports= mongoose.model('pregunta',PreguntaSchema)




