const crypto = require('crypto')
const hash = crypto.createHmac('sha256', 'text123')//sha256 is secure algorithm and test123 is password for this algorithm we are giving this password

let input = 'welcome to node js crypto module'

//base64, hex, base64url, binary --- types
let res = hash.update(input).digest('base64')
let res1 = hash.update(input).digest('base64url')
let res2 = hash.update(input).digest('hex')
let res3 = hash.update(input).digest('binary')

console.log('output = ', res)
// console.log('output = ', res1) //output: output =  A0_RrCjNuPkpdfRMnka4Wq6XwgIXgAUYKrPpcz8W840
console.log('output = ', res1)
console.log('output = ', res2)
console.log('output = ', res3)