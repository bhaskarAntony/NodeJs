const express = require('express')
const path = require('path')

const app = express()

//configure setting to make folder as static
app.use(express.static('./doc'))

app.get(`/`, (req, res) => {
    res.sendFile(path.resolve(__dirname, './doc/index.html'))
})
app.get(`/home`, (req, res) => {
    res.sendFile(path.resolve(__dirname, './doc/index.html'))
})
app.get(`/about`, (req, res) => {
    res.sendFile(path.resolve(__dirname, './doc/about.html'))
})
app.get(`/contact`, (req, res) => {
    res.sendFile(path.resolve(__dirname, './doc/contact.html'))
})

app.all(`*`, (req, res) => {
    res.sendFile(path.resolve(__dirname, './doc/pnf.html'))
})
app.listen(3501, ()=>{
    console.log(`server is started and running @ http://localhost:3501`)
})