const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    DOB:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    profilepicture:{
        type:String,
        require:true
    }
},{timestamps:true}
)


const Admin = mongoose.model('Admin',adminSchema)
module.exports = Admin