const express = require('express')
const port = 4000

let {users} = require('./doc/data')

const app = express()

app.use(express.static('./doc'))

//body parser

app.use(express.urlencoded({extended:true})) //encode and parse form data
app.use(express.json())//parse json formate incomming data also

//to read all users -get
app.get(`/api/users`, (req, res) =>{
    res.status(200).json({length:users.length, users})
})

//to read single user data -get(id)
app.get(`/api/user/:userId`, (req, res) =>{
    let id = req.params.userId;
    let user = users.find((item)=>item.id==id)
    if(!user){
        return res.status(404).json({msg: `requested user id = ${id} not found`})
    }
    res.status(200).json({user})
})

//create user -post ->data
app.post(`/api/user/new`, (req, res)=>{
    
})