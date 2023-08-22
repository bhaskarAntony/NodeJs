const http = require('http')
const fs = require('fs')
const port = 3100
const server = http.createServer()// creating reference to server

server.on('request', (req, res)=>{
    const fsStream = fs.createReadStream('./content/file/bigTextFile.txt', 'utf-8')

    //open => used to open file, to read content of the file
    //handling response
    fsStream.on('open', ()=>{
        fsStream.pipe(res)
    })
    //handling errors
    fsStream.on('error', (err)=>{
        console.log(err)
    })
})
server.listen(port, ()=>{
    console.log('server is running @ http://localhost:', port)
})
//otput will print in browsers