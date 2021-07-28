const {Router}=require('express')
const router=Router()

const PreguntaCtrl=require('../controllers/Pregunta.controller')


router.post('/crear', PreguntaCtrl.crearPregunta)
router.put('/activar/:id',PreguntaCtrl.activar)
router.put('/desactivar/:id',PreguntaCtrl.desactivar)
router.get('/buscarpreguntaenca/:encabezado',PreguntaCtrl.buscarpreguntaenca)
router.get('/buscarpreguntacat/:encabezado',PreguntaCtrl.buscarpreguntacat)
router.get('/listar',PreguntaCtrl.listar)
router.get('/buscarpreguntaencaycat/:encabezado',PreguntaCtrl.buscarpreguntaencaycat)
router.put('/actualizar/:id',PreguntaCtrl.actualizar)
router.get('/listarid/:id',PreguntaCtrl.listarid)



module.exports=router