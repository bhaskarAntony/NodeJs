const fs= require("fs")

//async method
console.log('started')

//async read file1
fs.readFile('./content/file/p1.txt', 'utf-8', (err, res1) =>{
    if(err) console.log(err)
    const first = res1;

    //async read file2
    fs.readFile('./content/file/p2.txt', 'utf-8', (err, res2)=>{
        if(err) console.log(err)
        const second = res2

        //write new file this all proccess in nested inside nested
        fs.writeFile(`./content/file/result-async.txt ${first} \n ${second}`, (err, res)=>{
            if(err) console.log(err)
            console.log('new file generated successfully')
        })
    })
})