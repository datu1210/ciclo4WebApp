const ResultadoCtrl={}
const Resultado=require('../models/Resultado.model')
const Estudiante=require('../models/Estudiante.model')

ResultadoCtrl.guardarResultado=async(req,res)=>{
    const {fecha,correcto,pregunta, estudiante}=req.body
    const NuevoResultado = new Resultado({
        fecha,correcto,pregunta, estudiante
    })

    const respuesta=await NuevoResultado.save()
    res.json({
	    mensaje: 'Resultado guardado',
	    respuesta
})
}

ResultadoCtrl.buscarresultadoest=async(req,res)=>{
	const id=req.params.id
    
     const resultado = await Resultado.find({estudiante: id})
     .populate({
        path: 'estudiante',
        select: '_id nombres',
        match: { _id:{ $ne: id} }
    })
    
    res.json(resultado) 
}


module.exports=ResultadoCtrl