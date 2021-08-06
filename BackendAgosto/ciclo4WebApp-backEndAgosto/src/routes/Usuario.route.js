const {Router} = require('express')
const router = Router()
const Auth = require('../helper/Auth')

const UsuarioCtrl = require('../controllers/Usuario.controller')


router.get('/buscarusuario/:nombres', Auth.verificartoken, UsuarioCtrl.buscarusuario)
router.get('/listar/', Auth.verificartoken, UsuarioCtrl.listar)
router.get('/listarid/:id', Auth.verificartoken, UsuarioCtrl.listarid)

router.post('/login', UsuarioCtrl.login)
router.post('/crear', Auth.verificartoken, UsuarioCtrl.crearUsuario)

router.put('/actualizar/:id', Auth.verificartoken, UsuarioCtrl.actualizar)
// router.put('/activar/:id', Auth.verificartoken, UsuarioCtrl.activar)
router.put('/activar/:id', UsuarioCtrl.activar)
router.put('/desactivar/:id', Auth.verificartoken, UsuarioCtrl.desactivar)


module.exports = router