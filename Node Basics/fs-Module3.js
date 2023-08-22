const fs = require('fs');

for(let i=0; i<=500; i++){
    fs.writeFileSync('./content/file/bigTextFile.pdf', `hello World ${i} \n`, {flag:'a'})
}
console.log('file write is completed')