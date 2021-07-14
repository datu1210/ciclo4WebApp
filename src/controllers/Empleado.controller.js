const EmpleadoCtrl={}
const Empleado=require('../models/Usuario.model')


EmpleadoCtrl.crearEmpleado=async(req,res)=>{
    const {nombres,apellidos, identificacion, puesto, tcontrato,jefe}=req.body
    const NuevoEmpleado = new Empleado({
        nombres,apellidos, identificacion, puesto, tcontrato,jefe
})

const respuesta=await NuevoEmpleado.save()
res.json({
	mensaje: 'Empleado creado',
	respuesta
})
}


EmpleadoCtrl.listar=async(req,res)=>{
    const respuesta=await Empleado.find()
    res.json(respuesta)

}

EmpleadoCtrl.listarid=async(req,res)=>{
	const id=req.params.id
	const respuesta=await Empleado.findById({_id:id})
	res.json(respuesta) 

}

EmpleadoCtrl.empleadosDeunJefe=async(req,res)=>{
	const id=req.params.id
	const respuesta=await Empleado.find({jefe:id})
	res.json(respuesta) 

}

EmpleadoCtrl.actualizar=async(req,res)=>{
	const id=req.params.id
	await Empleado.findByIdAndUpdate({_id:id},req.body)
	res.json({
		mensaje:'Empleado actualizado'
        }) 

}

EmpleadoCtrl.buscarempleado=async(req,res)=>{
	const nombres=req.params.nombres
	const respuesta=await Empleado.find({nombres:{$regex:".*"+nombres+".*"}})	
	res.json(respuesta) 

}

//Esta función busca los empleados de un jefe (que está logueado)
EmpleadoCtrl.buscarempleado2=async(req,res)=>{
	const {nombres,id}=req.params;
	const respuesta=await Empleado.find({nombres:{$regex:".*"+nombres+".*"},jefe:id})	
	res.json(respuesta) 

}

EmpleadoCtrl.borrarempleado=async(req,res)=>{
	const id=req.params.id
	//await Empleado.findByIdAndUpdate({_id:id},req.body)
	await Empleado.findByIdAndRemove({_id:id})
	res.json({
		mensaje:'Empleado borrado'
        }) 

}
module.exports=EmpleadoCtrl
