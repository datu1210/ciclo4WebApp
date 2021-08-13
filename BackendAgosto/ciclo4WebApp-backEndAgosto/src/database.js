const mongoose = require ('mongoose')
URI = ('mongodb://localhost/BDPruebasSaberPro')

/* mongo atlas */
/* URI = ('mongodb+srv://favza:wg9JQL69pq9SxWT@cluster0.uxnwc.mongodb.net/BDPruebasSaberPro?retryWrites=true&w=majority')
 */
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(db=>console.log('BDConectada'))
.catch(error=>console.log(error))

module.exports = mongoose


