const User = require('../model/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const signup = async (req,res)=>{
    const {username , email , password} = req.body
    try {
        const exisitingUser = await User.findOne({email:email})
        if(exisitingUser){
            return res.status(401).json({message:"User Already exist"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const result = await User.create({
            username:username,
            email:email,
            password:hashedPassword
        })
        const token = jwt.sign({email:result.email,id:result._id},"secretkey")
        res.status(200).json({user:result,token})
    } catch (error) {
        res.status(401).json({message:'Something went Wrong'})
    }
}



const signin = async (req,res)=>{
    const {email,password}= req.body
    try {
        const exisitingUser = await User.findOne({email:email})
        if(!exisitingUser){
            return res.status(404).json({error})
        }
        const matchPassword = await bcrypt.compare(password,exisitingUser.password)
        if(!matchPassword){
            res.status(400).json({error})
        }
        const token = jwt.sign({email:exisitingUser.email,id:exisitingUser._id},"secretkey")
        res.status(200).json({user:exisitingUser,token:token})
    } catch (error) {
        res.status(400).json({message:'Error'})
    }
}




module.exports = {signin,signup}