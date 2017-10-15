const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello, ' + req.headers['user-agent'] + '!')
  res.send('<h1>Hello, world!</h1><p>From '+process.env.PARADROP_CHUTE_NAME+'</p>')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
