const express = require('express')
const {products, users} = require('./doc/data')
const port = 3090

const app =express()

//static
app.use(express.static('./doc'))

app.get('/', (req, res) =>{
    return res.status(200).json({msg:"home page"})
})
//all products
app.get(`/api/products`, (req, res) =>{
    return res.status(200).json({length:products.length, products})
})

//all users
app.get(`/api/users`, (req, res) =>{
    return res.status(200).json({length:users.length, users})
})

//reading single product id
app.get(`/api/product/:productId`, (req, res)=>{
    const id = req.params.productId;
    return res.status(200).json({id})
})
//reading single product
app.get(`/api/product/single/:productId`, (req, res)=>{
    const id = req.params.productId;
    const fProduct = products.find((item) =>item.id == id)
    if(!fProduct){
        return res.status(404).json({msg:`requested id ${id} is not exists`})
    }
    return res.status(200).json({product:fProduct})
})
app.listen(port, ()=>{
    console.log(`server is started @ http://localhost:${port}`)
})