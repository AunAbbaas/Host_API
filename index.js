const express = require('express')
const userRoute = require('./routes/userRoute.js')
const productRoute = require('./routes/productRoute.js')
const monitorRoute = require('./routes/monitoringRoute.js')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json())

app.use('/user',userRoute)
app.use('/products',productRoute)
app.use('/monitoring',monitorRoute)


mongoose.connect('mongodb+srv://aaun0019:custompassword@cluster0.nm6xraa.mongodb.net/APIwithJWT')
.then(()=>{
    console.log('Database Connected!')
    app.listen(5000,()=>{
        console.log('Server is Running!')
    })
}).catch((err)=>{
    console.log(err)
})

