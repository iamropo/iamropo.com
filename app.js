const express = require('express')
const app = express()

var data = require('./views/js/data.js')

app.set('view engine', 'pug')
app.use(express.static('views')) // for serving static files like images

app.get('/', (req, res) => {
  res.render('index', data)
})

app.listen('3000', () => {
  console.log('Server Running')
})

