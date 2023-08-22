//event emmiters
//node event =>
const EventEmmiter = require('events')

//node functions
//node functions are declared using inst.on(nameofthe function, handler) => to define the node events
//node functions are called using inst.emit(function name, pass parameter values) => to triger the events


const x = new EventEmmiter()
x.on("display", (name, email)=>{ //declaring event (function)
    console.log(`name is ${name} and email is ${email}`)
})
x.emit('display', "bhaskar", "bhaskar@gmail.com") //calling event(function)

//output: name is bhaskar and email is bhaskar@gmail.com


//next event or function

x.on('print', function(language){ //declaring function or event in node
    console.log(`welome to ${language} !!`)
})

x.emit('print', 'NodeJS') //calling event or function in node

//Output: welome to NodeJS !!
