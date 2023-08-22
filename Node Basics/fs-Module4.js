//printing all file data in console
//reading all file data using createReadStream
//create ReadStream method will read the data in file by charrecterwise

const fs = require('fs')

const stream = fs.createReadStream('./content/file/bigTextFile.txt')

//data => handles the response fro, the file and data is builtin name
stream.on('data', (result)=>{
    console.log('result = ', result )// but it is in buffer or  ascci formate
    console.log('in string formate result = ', result.toString())//converting buffer or ascii to string formate
})

//error => handles the run time errors(exeptions) error is also a builtin name
stream.on('error', (err)=>{
    console.log(err)
})