// Require Modules
const express = require('express')
const layout = require('express-ejs-layouts')

// Initiate the express app
const app = express()

// Middlewware and configs
app.set('view engine', 'ejs');
// Body parser middleware that puts the form data into the req.body
app.use(layout)
app.use('/', express.static('static'))
app.use(express.urlencoded({extended: false}));

//Controllers
app.use('/dinosaurs', require('./controllers/dinosaur'));
app.use('/cryptids', require('./controllers/cryptids'))

// Add in routes
app.get('/', (req, res) =>{
  res.render('home');
})

app.get('/*', (req, res) => {
  res.render('404');
})

// Listen on a port
app.listen(8000, () => {
  console.log("server is live at port 8000")
})
