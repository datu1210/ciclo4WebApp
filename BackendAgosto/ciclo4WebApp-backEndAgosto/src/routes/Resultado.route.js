const {Router} = require('express')
const router = Router()

const ResultadoCtrl = require('../controllers/Resultado.controller')


router.get('/buscarresultadoest/:id', ResultadoCtrl.buscarresultadoest)

router.post('/guardar', ResultadoCtrl.guardarResultado)


module.exports = router