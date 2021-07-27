const {Router}=require('express')
const router=Router()

const UsuarioCtrl=require('../controllers/Usuario.controller')


router.post('/crear',UsuarioCtrl.crearUsuario)
router.post('/login',UsuarioCtrl.login)
router.put('/actualizar/:id',UsuarioCtrl.actualizar)
router.put('/activar/:id',UsuarioCtrl.activar)
router.put('/desactivar/:id',UsuarioCtrl.desactivar)
router.get('/listar/',UsuarioCtrl.listar)
router.get('/buscarusuario/:nombres',UsuarioCtrl.buscarusuario)
router.get('/listarid/:id',UsuarioCtrl.listarid)

module.exports=router