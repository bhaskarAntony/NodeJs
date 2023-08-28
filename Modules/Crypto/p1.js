const crypto = require('crypto')
const hash = crypto.createHash('sha256')// sha is secure hash algorithm
let input = 'welcome to crypto module'

let data = hash.update(input).digest('hex')//in hexa decimal formate
console.log('data sha(256 = ', data)

//output: data sha(256 =  833dd7e1ab2ede3989ccf441b0a66d10677864def03d6939b55e738e92ae1dbe