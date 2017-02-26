const express = require('express')
const app = express()

var projects = require('./views/js/data.js')

app.set('view engine', 'pug')
app.use(express.static('views')) // for serving static files like images

app.get('/', (req, res) => {
  res.render('index', {projects: projects})
})

app.listen('8080', () => {
  console.log('Server Running')
})
