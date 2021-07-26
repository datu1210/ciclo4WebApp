const PreguntaCtrl={}
const Pregunta=require('../models/Pregunta.model')

PreguntaCtrl.crearPregunta=async(req,res)=>{
    const {encabezado,puntaje, categoria, estado, respuestas}=req.body
    const NuevaPregunta = new Pregunta({
        encabezado,puntaje, categoria, estado, respuestas
    })

    const respuesta=await NuevaPregunta.save()
    res.json({
	    mensaje: 'Pregunta creada',
	    respuesta
})
}

PreguntaCtrl.listar=async(req,res)=>{
    const respuesta=await Pregunta.find()
    res.json(respuesta)

}

PreguntaCtrl.actualizar=async(req,res)=>{
	const id=req.params.id
	await Pregunta.findByIdAndUpdate({_id:id},req.body)
	res.json({
		mensaje:'Pregunta actualizada'
        }) 

}


PreguntaCtrl.buscarpreguntacat=async(req,res)=>{
	const categoria=req.params.categoria
	const respuesta=await Pregunta.find({categoria:{categoria}})	
	res.json(respuesta) 

}

PreguntaCtrl.buscarpreguntaenca=async(req,res)=>{
	const encabezado=req.params.encabezado
	const respuesta=await Pregunta.find({encabezado:{$regex:".*"+encabezado+".*"}})	
	res.json(respuesta) 

}

PreguntaCtrl.buscarpreguntaencaycat=async(req,res)=>{
	const encabezado=req.params.encabezado
	const categoria=req.params.categoria
	const respuesta=await Pregunta.find({encabezado:{$regex:".*"+encabezado+".*"},categoria:{categoria}})	
	res.json(respuesta) 

}


PreguntaCtrl.activar=async(req,res)=>{
	const id=req.params.id
	await Pregunta.findByIdAndUpdate({_id:id},{estado:1})
	res.json({
		mensaje:'Pregunta activada'
        }) 

}

PreguntaCtrl.desactivar=async(req,res)=>{
	const id=req.params.id
	await Pregunta.findByIdAndUpdate({_id:id},{estado:0})
	res.json({
		mensaje:'Pregunta desactivada'
        }) 

}


module.exports=PreguntaCtrl