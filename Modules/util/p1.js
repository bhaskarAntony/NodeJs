const util = require('util')

//templatesd 
let myTemplate = `Hi %s, welcome to %s and duration is %d months`; //%s and %s and % are the like parameter later we have to send values to it

let u1 = util.format(myTemplate, "bhaskar", "NodeJs", 3)
console.log('u1 = ', u1)
//output: u1 =  Hi bhaskar, welcome to NodeJs and duration is 3 months



//sms template
let smsTemplate = `Hi %s, our new bamboo sheets are finally here, Hurry before they sell out %w Text stop to opt out.`

let u2 = util.format(smsTemplate, "Bhaskar", "www.ExampleWebsite.com")
console.log(u2)//output: Hi Bhaskar, our new bamboo sheets are finally here, Hurry before they sell out %w Text stop to opt out. www.ExampleWebsite.com

//birthday
let BirthdayTemplate = `happy Birthday, %s. Enjoy %d % off storewide. Use %c at checkout: %w ts and Cs applay.Text stop to opt out.`
let u3 = util.format(BirthdayTemplate, "Bhaskar",15, "BDAY!5", "www.example.com" )
console.log(u3)
//output: happy Birthday, Bhaskar. Enjoy 15 % off storewide. Use  at checkout: %w ts and Cs applay.Text stop to opt out.