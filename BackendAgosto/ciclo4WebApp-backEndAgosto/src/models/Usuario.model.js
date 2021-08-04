const mongoose = require('mongoose')
const {Schema} = mongoose

const UsuarioSchema = new Schema({
	nombres:String,
    apellidos:String,
	correo:String,
	contrasena:String,
    rol:String,
    estado:Number

})
module.exports= mongoose.model('usuario',UsuarioSchema)