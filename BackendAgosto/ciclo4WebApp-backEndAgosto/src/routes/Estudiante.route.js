const {Router} = require('express')
const router = Router()
const Auth = require('../helper/Auth')

const EstudianteCtrl = require('../controllers/Estudiante.controller')


router.get('/buscarestudiante/:nombres', Auth.verificartoken, EstudianteCtrl.buscarestudiante)
router.get('/listarestudiantes', Auth.verificartoken, EstudianteCtrl.listar)
router.get('/listarid/:id', Auth.verificartoken, EstudianteCtrl.listarid)

router.post('/login', EstudianteCtrl.login)
router.post('/crear', Auth.verificartoken, EstudianteCtrl.crearEstudiante)

router.put('/actualizar/:id', Auth.verificartoken, EstudianteCtrl.actualizar)
router.put('/activar/:id', EstudianteCtrl.activar)
router.put('/desactivar/:id', Auth.verificartoken, EstudianteCtrl.desactivar)


module.exports = router