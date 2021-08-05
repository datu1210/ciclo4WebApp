const {Router} = require('express')
const router = Router()

const PreguntaCtrl = require('../controllers/Pregunta.controller')


router.get('/buscarpreguntaenca/:encabezado', PreguntaCtrl.buscarpreguntaenca)
router.get('/buscarpreguntacat/:categoria', PreguntaCtrl.buscarpreguntacat)
router.get('/buscarpregsestcat', PreguntaCtrl.buscarpregsestcat)
router.get('/buscarpreguntaencaycat/:encabezado', PreguntaCtrl.buscarpreguntaencaycat)
router.get('/buscarpregsest', PreguntaCtrl.buscarpregsest)
router.get('/listar', PreguntaCtrl.listar)
router.get('/listarid/:id', PreguntaCtrl.listarid)

router.post('/crear', PreguntaCtrl.crearPregunta)

router.put('/actualizar/:id', PreguntaCtrl.actualizar)
router.put('/activar/:id', PreguntaCtrl.activar)
router.put('/desactivar/:id', PreguntaCtrl.desactivar)


module.exports = router