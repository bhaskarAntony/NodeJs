const fs =require('fs');
//synchronous method for deleting file
fs.unlink('./test1.txt', (err, res)=>{
    if(err) console.log(err)
})

//test1.txt file will delete