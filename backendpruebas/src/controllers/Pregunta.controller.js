const PreguntaCtrl={}
const Pregunta=require('../models/Pregunta.model')

PreguntaCtrl.crearPregunta=async(req,res)=>{
    const {encabezado,puntaje, competencias, estado, respuestaA, respuestaB, respuestaC, respuestaD, correcta}=req.body
    const NuevaPregunta = new Pregunta({
        encabezado,puntaje, competencias, estado, respuestaA, respuestaB, respuestaC, respuestaD, correcta
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
PreguntaCtrl.listarid=async(req,res)=>{
	const id=req.params.id
	const respuesta=await Pregunta.findById({_id:id})
	res.json(respuesta) 

}

PreguntaCtrl.buscarpregsest=async(req,res)=>{
	
	const ids=req.params.ids
	const respuesta = await Pregunta.find({ '_id': { $nin: ids } }).limit(15);
	res.json(respuesta)

}

PreguntaCtrl.buscarpregsestcat=async(req,res)=>{
	const ids=req.params.ids
	//const competencias="Competencias Ciudadanas"
	const competencias=req.params.competencias
	const respuesta = await Pregunta.find({ '_id': { $nin: ids } ,'competencias':competencias}).limit(15);
	res.json(respuesta)

}

module.exports=PreguntaCtrl