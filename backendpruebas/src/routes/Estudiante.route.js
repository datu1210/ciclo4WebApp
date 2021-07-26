const {Router}=require('express')
const router=Router()

const EstudianteCtrl=require('../controllers/Estudiante.controller')


router.post('/login',EstudianteCtrl.login)
router.post('/crear', EstudianteCtrl.crearEstudiante)
router.get('/listarestudiantes',EstudianteCtrl.listar)
router.get('/buscarestudiante/:nombres',EstudianteCtrl.buscarestudiante)
router.put('/actualizar/:id',EstudianteCtrl.actualizar)
router.put('/activar/:id',EstudianteCtrl.activar)
router.put('/desactivar/:id',EstudianteCtrl.desactivar)

module.exports=router