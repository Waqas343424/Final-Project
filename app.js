const express = require ('express')
const app = express()                   //wjoOw1J9CfuEmhcX
const mongoose = require('mongoose')
const PORT = 5000  
const {MONGOURI} = require('./keys')

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))


mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo now")
})
mongoose.connection.on('error',(error)=>{
    console.log("error connecting",error)
})








app.listen(PORT,()=>{
    console.log("server is running",PORT)
})