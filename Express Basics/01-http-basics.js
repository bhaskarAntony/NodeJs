const http = require('http')
const port = 5000   
//createServer(callback handler)
//callback handler => controller
//req => incomming data from frontend or other souces
//res => outgoing data => sending data to server

const server = http.createServer((req, res)=>{
    //req.method => method type(get, post, put, patch, delete)
    //req.url => url address

    const data = `method = ${req.method} and url = ${req.url}`;
    console.log(data)
})

server.listen(port, ()=>{
    console.log(`server is started and running @ http://localhost:${port}`)
})