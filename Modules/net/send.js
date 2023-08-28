const net = require('net')

//here we are creating the server


//IPv6 is a 5 digit port number

/*net is same like http module but in http module we are sending the port number mannually
but in net server will generate the port number itseft at every time when we running everytime it will generate new port number*/

//server
const server = net.createServer(function(socket){
    socket.end("my new message is here");
})

//node event --> error
server.on('error', (err)=>{
    if(err) console.log(err)
})

server.listen(()=>{
    let address = server.address()
    console.log('server is running @', address)
})