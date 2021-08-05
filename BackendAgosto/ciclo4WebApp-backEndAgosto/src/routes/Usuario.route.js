const {Router} = require('express')
const router = Router()

const UsuarioCtrl = require('../controllers/Usuario.controller')


router.get('/buscarusuario/:nombres', UsuarioCtrl.buscarusuario)
router.get('/listar/', UsuarioCtrl.listar)
router.get('/listarid/:id', UsuarioCtrl.listarid)

router.post('/login', UsuarioCtrl.login)
router.post('/crear', UsuarioCtrl.crearUsuario)

router.put('/actualizar/:id', UsuarioCtrl.actualizar)
router.put('/activar/:id', UsuarioCtrl.activar)
router.put('/desactivar/:id', UsuarioCtrl.desactivar)


module.exports = router