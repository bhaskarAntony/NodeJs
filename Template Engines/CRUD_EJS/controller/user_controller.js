    //this is mvc architecture
    //controllers

const { render } = require("ejs")

    //view the index.ejs
    //we can create any type of function here but it must be callback function
    let index = (req, res) =>{
        return res.render('index.ejs')

    }

    //create.ejs
    const create = (req, res) =>{
        return res.render('create.ejs')
    }

    //update.ejs
    function edit(req, res){
        return res.render('update.ejs')
    }
    //page not found
    var pnf = (req, res) =>{
        return res.render('pnf.ejs')
    }

    //export all the craeted call functions
    module.exports = {index, create, edit, pnf}