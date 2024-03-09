const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors")
const UserModel=require('./models/User')
const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://admin1:1234@cluster0.h34ghkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
   // useUnifiedTopology: true,
   // useNewUrlParser: true)
   // .then(() => console.log('db connected'))
    //.catch(err => console.log(err))

// Uncomment one route at a time and test
// Define routes
// app.post('/addbrands', async (req, res) => {
//     const { brandname } = req.body;
//     try {
//         const newData = new BrandName({ brandname });
//         await newData.save();
//         return res.json(await BrandName.find())
//     } catch (err) {
//         console.log(err.message);
//     }
// })

// app.get('/getallbrands', async (req, res) => {
//     try {
//         const allData = await BrandName.find();
//         return res.json(allData);
//     } catch (err) {
//         console.log(err.message);
//     }
// })

// app.get('/getallbrands/:id', async (req, res) => {
//     try {
//         const Data = await BrandName.findById(req.params.id)
//         return res.json(Data);
//     } catch (err) {
//         console.log(err.message);
//     }
// })

// app.delete('/deletebrand/:id', async (req, res) => {
//     try {
//         await BrandName.findByIdAndDelete(req.params.id);
//         return res.json(await BrandName.find());
//     } catch (err) {
//         console.log(err.message);
//     }
// })
app.post('/login',(req,res) => {
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        } else{
            res.json("no record existed")
        }
    })
    .catch(err => res.json(err))
})

app.post('/signup',(req,res)=>{
UserModel.create(req.body)
.then(user=> res.json(user))
    .catch(err => res.json(err))
})

app.listen(5000, () =>{

console.log('server running')})
