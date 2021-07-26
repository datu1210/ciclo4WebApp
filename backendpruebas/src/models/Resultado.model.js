const mongoose = require('mongoose')
const {Schema} = mongoose

const ResultadoSchema = new Schema({
	fecha:Date,
  correcto:Number,	
    pregunta: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'pregunta',
          autopopulate: true
        },
      
    estudiante: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'estudiante',
          autopopulate: true
        }
       
})
ResultadoSchema.plugin(require('mongoose-autopopulate'));
module.exports= mongoose.model('resultado',ResultadoSchema)