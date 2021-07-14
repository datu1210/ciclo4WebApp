const {Router}=require('express')
const router=Router()

const EmpleadoCtrl=require('../controllers/Empleado.controller')
const Auth=require('../helper/Auth')


router.post('/crear',Auth.verificartoken,EmpleadoCtrl.crearEmpleado)
router.get('/listarempleados',Auth.verificartoken,EmpleadoCtrl.listar)
router.get('/listar/:id',Auth.verificartoken,EmpleadoCtrl.listarid)
router.get('/listarempleadosjefe/:id',Auth.verificartoken,EmpleadoCtrl.empleadosDeunJefe)
router.get('/buscar/:nombres',Auth.verificartoken,EmpleadoCtrl.empleadosDeunJefe)
router.put('/actualizar/:id',Auth.verificartoken,EmpleadoCtrl.actualizar)
//router.get('/buscarempleado/:nombres',Auth.verificartoken,EmpleadoCtrl.buscarempleado)
router.get('/buscarempleado/:nombres/:id',Auth.verificartoken,EmpleadoCtrl.buscarempleado2)
router.delete('/borrarempleado/:id',Auth.verificartoken,EmpleadoCtrl.borrarempleado)

module.exports=router