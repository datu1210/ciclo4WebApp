const mongoose = require ('mongoose')
URI=('mongodb://localhost/Usuarios')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(db=>console.log('BDConectada'))
.catch(error=>console.log(error))

module.exports=mongoose