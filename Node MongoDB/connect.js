// const mongodb = require('mongodb')
// const assert = require('assert')//this mdule for exception handling or error handling

// const URL = `mongodb://localhost:27017` //his is the default local url address

// //connection mongodb to our server
// mongodb.MongoClient.connect(URL, (err, res)=>{
//     if(err)
//         assert.deepStrictEqual(err, null)
//     console.log('mongodb connected successfully.')
// })


const {MongoClient, ServerApiVersion} = require('mongodb')
const assert = require('assert')

//url
// const URL = `mongodb:/localhost:27017`

const server_url = "mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority";
const options = {
     serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}

//reference 
const client = new MongoClient(server_url, options)

async function main(){
    await client.connect()
        console.log('mongodb connected successfully.')
    return `..done`
}
main()
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err.message)
    }).finally(()=>client.close())