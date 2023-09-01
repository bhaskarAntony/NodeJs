const mongoose = require('mongoose')

const connectDatabase = async ()=>{
    await mongoose.connect(process.env.MONGO_URL)//variable form env file
    .then(res => {
        console.log('mongodb connected successfully')
    }).catch(err => console.log(err))
}
module.exports = connectDatabase