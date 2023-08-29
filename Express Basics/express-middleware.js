const express = require('express')
const logger = require('./middleware/time')
const port = 3487

const app = express()
app.get(`/api/time`, logger, (req, res) =>{
    return res.status(200).json({time: req.timeLog})
})
app.listen(port, ()=>{
    console.log(`server is started @ http://localhost:${port}`)
})