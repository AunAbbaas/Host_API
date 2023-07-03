const express = require('express')
const userRoute = require('./routes/userRoute.js')
const productRoute = require('./routes/productRoute.js')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(express.json())

app.use(cors());
app.use('/user',userRoute)
app.use('/products',productRoute)


mongoose.connect('mongodb://127.0.0.1:27017/APIwithJWT')
.then(()=>{
    console.log('Database Connected!')
    app.listen(5000,()=>{
        console.log('Server is Running!')
    })
}).catch((err)=>{
    console.log(err)
})

