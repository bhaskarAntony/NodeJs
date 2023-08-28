//read file -- async
const fs = require('fs');

const data = fs.readFile('./myfile.txt', function name(err, data){
    if(err) console.log(err)

    console.log('async read = ', data) //data in the form of ascci or buffer
    console.log('in string formate data = ', data.toString())
})