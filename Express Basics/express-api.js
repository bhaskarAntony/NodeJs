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
    let data = req.body;

    //validate existing email
    let existEmail = users.find((item) => item.email === data.email)
    if(existEmail){
        return res.status(401).json({msg:`user email ${data.email} is already exists.`})
    }
    let newUsers = [...users, data]
    res.status(200).json({msg:`new user added successfully`, newUsers})
    
})
//update user -> patch -> data & id
app.patch(`/api/user/edit/:id`, (req, res)=>{
    let id = req.params.id
    const data = req.body
    let existuser = users.find((item)=> item.id ==id)
    if(!existuser)
    return res.status(404).json({msg:"user is is not exists."})
const updateUser = users.map((item)=>{
    if(item.id==id){
        item.name = data.name
        item.email=data.email
    }
    return item
})
res.status(200).json({msg:`user updated successfully`, updateUser})

})

//delete user -> delete->id
app.delete(`/api/user/delete/:id`, (req, res)=>{
    let id = req.params.id
    let extUser = users.find((item)=>item.id==id)
    if(!extUser)
    return res.status(404).json({msg:`user ${id} id doesn't exists.`})

    const deleteUser = users.filter((item) => item.id != id)
    res.status(200).json({msg:`user deleted successfully`, deleteUser})
})

//default route
app.all(`*`, (req, res)=>{
    res.status(404).json({msg:`requested path not found.`})
})

//server call
app.listen(port, ()=>{
    console.log(`server is started @ http://localhost ${port}.`)
})