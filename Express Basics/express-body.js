const express = require('express')
const port = 5467

const app  = express()

//setting up the body parses
app.use(express.urlencoded({ extended:true})) //to recieve form data form frontend

app.use(express.json()) //outgoing responce

app.post(`/api/auth/login`, (req, res)=>{
    const data = req.body //recieve incoming data from frontend
    return res.status(200).json({login: data})
})
app.listen(port, ()=>{
    console.log(`server is started @ http://localhost:${port}`)
})