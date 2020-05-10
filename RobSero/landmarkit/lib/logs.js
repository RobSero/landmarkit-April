function logger(req, _, next){
  console.log(`A ${req.method} has been made to ${req.url}`)
  next()
}

module.exports = logger