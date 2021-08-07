const EstudianteCtrl = {}
const Estudiante = require('../models/Estudiante.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


EstudianteCtrl.crearEstudiante = async(req, res)=>{
    const {nombres,apellidos, correo, contrasena, estado, programa} = req.body
    const NuevoEstudiante = new Estudiante({
        nombres, apellidos, correo, contrasena, estado, programa
    })
    const correoest=await Estudiante.findOne({correo: correo})

    if(correoest){
		res.json({
			mensaje: 'El correo ya existe'
         })
    }
    else{
        NuevoEstudiante.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({_id: NuevoEstudiante._id}, 'secreta')
        await NuevoEstudiante.save()
        res.json({
            mensaje: 'Estudiante Creado',
            id: NuevoEstudiante._id,
            nombres: NuevoEstudiante.nombres,
            apellidos: NuevoEstudiante.apellidos,
            programa: NuevoEstudiante.programa,
            token
        })	
    }
}


EstudianteCtrl.listar = async(req, res)=>{
    const respuesta = await Estudiante.find()
    res.json(respuesta)
}


EstudianteCtrl.actualizar = async(req, res)=>{
	const id = req.params.id
    req.body.contrasena = await bcrypt.hash(req.body.contrasena, 10)
	await Estudiante.findByIdAndUpdate({_id: id}, req.body)
	res.json({
		mensaje: 'Estudiante actualizado'
    }) 
}


EstudianteCtrl.activar = async(req, res)=>{
	const id = req.params.id
	// var estado = req.params.constEstado

	var constEstado = id.slice(-1)
	var id2 = id.slice(0,-1)

	// console.log(id + " " + estado)
	console.log(id2 + " *********************" + constEstado)
	var msg = ""
	if (constEstado == 0){
		await Estudiante.findByIdAndUpdate({_id: id2}, {estado: 1})
		msg = "Estudiante activado"
	}
	else{
		await Estudiante.findByIdAndUpdate({_id: id2}, {estado: 0})
		msg = "Estudiante desactivado"
	}
	res.json({
		mensaje: msg
    }) 
}


EstudianteCtrl.desactivar = async(req, res)=>{
	const id = req.params.id
	await Estudiante.findByIdAndUpdate({_id: id}, {estado: 0})
	res.json({
		mensaje: 'Estudiante desactivado'
    }) 
}


EstudianteCtrl.buscarestudiante = async(req, res)=>{
	const nombres = req.params.nombres
	const respuesta = await Estudiante.find({nombres: {$regex: ".*" + nombres + ".*"}})	
	res.json(respuesta) 
}


EstudianteCtrl.login = async(req, res)=>{
    const {correo, contrasena} = req.body
    const estudiante = await Estudiante.findOne({correo: correo})
    const match = await bcrypt.compare(contrasena,estudiante.contrasena)

    if(!estudiante){
       return res.json({
          mensaje: 'Ingreso denegado'
        })
    }
    if(match){
	    const token = jwt.sign({_id: estudiante._id}, 'secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: estudiante._id,
            nombres: estudiante.nombres,
            apellidos: estudiante.apellidos,
            token
        })
    }
    else{
        res.json({
            mensaje: 'Contraseña incorrecta',		
        })
    }
}


EstudianteCtrl.listarid = async(req, res)=>{
	const id = req.params.id
	const respuesta = await Estudiante.findById({_id: id})
	res.json(respuesta) 
}


module.exports=EstudianteCtrl