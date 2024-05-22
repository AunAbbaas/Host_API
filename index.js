const express = require('express')
const userRoute = require('./routes/userRoute.js')
const productRoute = require('./routes/productRoute.js')
const monitorRoute = require('./routes/monitoringRoute.js')
const adminRoute = require('./routes/adminRoute.js')
const mongoose = require('mongoose')
const cors = require('cors')


let URL = 'mongodb+srv://Aun:hey123@cluster0.eyfouzc.mongodb.net/APIwithJWT'

const app = express();
app.use(cors());
app.use(express.json())

app.use('/user',userRoute)
app.use('/products',productRoute)
app.use('/monitoring',monitorRoute)
app.use('/admin',adminRoute)


mongoose.connect(URL)
.then(()=>{
    console.log('Database Connected!')
    app.listen(5000,()=>{
        console.log('Server is Running!')
    })
}).catch((err)=>{
    console.log(err)
})

