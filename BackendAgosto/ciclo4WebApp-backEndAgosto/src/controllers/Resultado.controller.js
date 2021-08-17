const ResultadoCtrl = {}
const Resultado = require('../models/Resultado.model')
const Pregunta = require('../models/Pregunta.model')


ResultadoCtrl.guardarResultado = async(req, res)=>{
    const {fecha, correcta, pregunta, estudiante} = req.body
    const NuevoResultado = new Resultado({
        fecha, correcta, pregunta, estudiante
    })
    const respuesta = await NuevoResultado.save()
    res.json({
	    mensaje: 'Resultado guardado',
	    respuesta
    })
}

ResultadoCtrl.buscarresultadoest = async(req, res)=>{
	const id = req.params.id
    const resultado = await Resultado.find({estudiante: id})
    .populate({
        path: 'estudiante',
        select: '_id nombres',
        match: {_id: {$ne: id} }
    })
    res.json(resultado) 
}

ResultadoCtrl.buscarporfechas =async(req,res)=>{
    const fechas = req.query.fechas  
    const fini=fechas.slice(0,10)
    const indice = fechas.indexOf('*')
    const ffin =fechas.slice(indice+1,indice+11)+"T23:59:00.000Z";
    let resultado = await Resultado.aggregate([{
      $match: {
        fecha: {
          $gte: new Date(fini),
          $lt: new Date(ffin)
        }
      }  
    },
    {
        $lookup:
              {
                from: Pregunta.collection.name,
                localField: "pregunta",
                foreignField: "_id",
                as: "preguntas"
              }
          },
          { "$unwind": "$preguntas" },
          {$group:                         
            { _id:"$preguntas.competencias",         
              respondidas:{$sum:1},
              correctas: {
                $sum: { $cond: [
                    { $eq: [ "$correcta", "1" ] },
                    1,
                    0
                ]}
              },
              incorrectas: {
                $sum: { $cond: [
                    { $eq: [ "$correcta", "0" ] },
                    1,
                    0
                ]}
              }
            }
          }
      ])  
        console.log("resultado***"+resultado)
      
        res.json(resultado)
    }


module.exports=ResultadoCtrl