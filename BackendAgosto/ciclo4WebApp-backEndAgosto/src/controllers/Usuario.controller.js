const UsuarioCtrl = {}
const Usuario = require('../models/Usuario.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


UsuarioCtrl.crearUsuario = async(req, res)=>{
    const {nombres, apellidos, correo, contrasena, rol, estado} = req.body
    const NuevoUsuario = new Usuario({
        nombres, apellidos, correo, contrasena, rol, estado
	})
    const correousuario = await Usuario.findOne({correo: correo})
    
	if(correousuario){
		res.json({
			mensaje: 'El correo ya existe'
         })
    }
    else{
		NuevoUsuario.contrasena = await bcrypt.hash(contrasena, 10)
		const token = jwt.sign({_id: NuevoUsuario._id}, 'secreta')
		await NuevoUsuario.save()
		res.json({
			mensaje: 'Bienvenido',
			id: NuevoUsuario._id,
			nombres: NuevoUsuario.nombres,
			apellidos: NuevoUsuario.apellidos,
			token
		})	
    }
}


UsuarioCtrl.login = async(req, res)=>{
    const {correo, contrasena} = req.body
    const usuario = await Usuario.findOne({correo: correo})
	const match = await bcrypt.compare(contrasena, usuario.contrasena)

	if(!usuario){
       return res.json({
          mensaje: 'Ingreso denegado'
        })
    }

	if(match){
		const token = jwt.sign({_id:usuario._id}, 'secreta')
			res.json({
				mensaje: 'Bienvenido',
				id: usuario._id,
				nombres: usuario.nombres,
				apellidos: usuario.apellidos,
				rol: usuario.rol,
				token
			})
	    }
	else{
		res.json({
			mensaje: 'Ingreso denegado',		
		})
	}
}


UsuarioCtrl.actualizar = async(req, res)=>{
	const id = req.params.id
	req.body.contrasena = await bcrypt.hash(req.body.contrasena, 10) 
	/* await bcrypt.hash(req.body.contrasena, 10)  */
	await Usuario.findByIdAndUpdate({_id: id}, req.body)
	res.json({
		mensaje: 'Usuario actualizado'
    }) 
}


// UsuarioCtrl.activar = async(req, res)=>{
// 	const id = req.params.id
// 	await Usuario.findByIdAndUpdate({_id: id}, {estado: 1})
// 	res.json({
// 		mensaje: 'Usuario activado'
//     }) 
// }
UsuarioCtrl.activar = async(req, res)=>{
	const id = req.params.id
	// var estado = req.params.constEstado

	var constEstado = id.slice(-1)
	var id2 = id.slice(0,-1)

	// console.log(id + " " + estado)
	console.log(id2 + " *********************" + constEstado)
	var msg = ""
	if (constEstado == 0){
		await Usuario.findByIdAndUpdate({_id: id2}, {estado: 1})
		msg = "Usuario activado"
	}
	else{
		await Usuario.findByIdAndUpdate({_id: id2}, {estado: 0})
		msg = "Usuario desactivado"
	}
	res.json({
		mensaje: msg
    }) 
}

UsuarioCtrl.desactivar = async(req, res)=>{
	const id = req.params.id
	await Usuario.findByIdAndUpdate({_id: id}, {estado: 0})
	res.json({
		mensaje: 'Usuario desactivado'
    }) 
}


UsuarioCtrl.listar = async(req, res)=>{
    const respuesta = await Usuario.find()
    res.json(respuesta)
}


UsuarioCtrl.buscarusuario = async(req, res)=>{
	const nombres = req.params.nombres
	const respuesta = await Usuario.find({nombres: {$regex: ".*" + nombres + ".*"}})	
	res.json(respuesta) 
}


UsuarioCtrl.listarid = async(req, res)=>{
	const id = req.params.id
	const respuesta = await Usuario.findById({_id: id})
	res.json(respuesta) 
}


module.exports = UsuarioCtrl