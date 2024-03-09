const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
   FirstName:String,
   LastName:String,
   email:String,
   password:String 
})
const UserModel=mongoose.model("user",UserSchema)
module.exports=UserModel