const {Router} = require('express')
const router = Router()

const EstudianteCtrl = require('../controllers/Estudiante.controller')


router.get('/buscarestudiante/:nombres', EstudianteCtrl.buscarestudiante)
router.get('/listarestudiantes', EstudianteCtrl.listar)
router.get('/listarid/:id', EstudianteCtrl.listarid)

router.post('/login', EstudianteCtrl.login)
router.post('/crear', EstudianteCtrl.crearEstudiante)

router.put('/actualizar/:id', EstudianteCtrl.actualizar)
router.put('/activar/:id', EstudianteCtrl.activar)
router.put('/desactivar/:id', EstudianteCtrl.desactivar)


module.exports = router