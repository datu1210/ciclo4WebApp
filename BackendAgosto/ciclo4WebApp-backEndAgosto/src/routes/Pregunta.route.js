const {Router} = require('express')
const router = Router()
const Auth = require('../helper/Auth')

const PreguntaCtrl = require('../controllers/Pregunta.controller')


router.get('/buscarpreguntaenca/:encabezado', Auth.verificartoken, PreguntaCtrl.buscarpreguntaenca)
router.get('/buscarpreguntacat/:categoria', Auth.verificartoken, PreguntaCtrl.buscarpreguntacat)
router.get('/buscarpregsestcat', Auth.verificartoken, PreguntaCtrl.buscarpregsestcat)
router.get('/buscarpreguntaencaycat/:encabezado', Auth.verificartoken, PreguntaCtrl.buscarpreguntaencaycat)
router.get('/buscarpregsest', Auth.verificartoken, PreguntaCtrl.buscarpregsest)
router.get('/listar', Auth.verificartoken, PreguntaCtrl.listar)
router.get('/obtenerpreguntas', Auth.verificartoken, PreguntaCtrl.obtenerpreguntas)
router.get('/listarid/:id', Auth.verificartoken, PreguntaCtrl.listarid)
router.get('/buscarpregsestcat', Auth.verificartoken, PreguntaCtrl.buscarpregsestcat)

router.post('/crear', Auth.verificartoken, PreguntaCtrl.crearPregunta)


router.put('/actualizar/:id', Auth.verificartoken, PreguntaCtrl.actualizar)
router.put('/activar/:id', Auth.verificartoken, PreguntaCtrl.activar)
router.put('/desactivar/:id', Auth.verificartoken, PreguntaCtrl.desactivar)


module.exports = router