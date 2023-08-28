//here we are using yhe craeted server this is client

const net  = require('net')


//here we are using what server generated port after we run listener.js in terminal we will get this port number after we have to use this
const client = net.connect({port:50198}, ()=>{
    console.log('connected to the server')
})

//data event
client.on('data', (output)=>{
    console.log('output = ', output.toString())
})

//end server => to stop the server
client.end('end', ()=>{
    console.log('server is disconnected.')
})
