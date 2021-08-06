const {Router} = require('express')
const router = Router()
const Auth = require('../helper/Auth')

const ResultadoCtrl = require('../controllers/Resultado.controller')


router.get('/buscarresultadoest/:id', Auth.verificartoken, ResultadoCtrl.buscarresultadoest)

router.post('/guardar', Auth.verificartoken, ResultadoCtrl.guardarResultado)



module.exports = router