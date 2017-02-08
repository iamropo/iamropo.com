const express = require('express')
const app = express()

var data = require('./views/js/data.js')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', data)
})

app.listen('3000', () => {
  console.log('Server Running')
})

