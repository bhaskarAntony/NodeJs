const logger = (req, res, next) =>{
    const log = new Date().toString()
    req.timeLog = log
    next()
}
module.exports = logger