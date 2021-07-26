const {Router}=require('express')
const router=Router()

const ResultadoCtrl=require('../controllers/Resultado.controller')


router.post('/guardar', ResultadoCtrl.guardarResultado)
router.get('/buscarresultadoest/:id', ResultadoCtrl.buscarresultadoest)

module.exports=router