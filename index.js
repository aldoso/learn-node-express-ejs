const express = require('express'); //requiring the express package
const app = express(); //making the app use expressjs

app.set('view engine', 'ejs') //setting the template engine to embeddedjs (ejs)
//ejs default works with views directory (create it)

app.listen(process.env.PORT || 3000) // creating the server (works with heroku)

//Routes
app.get("/test", function(req, res){
  res.send('it works')
})

// Middleware for styles.css
// express.static('folder'), where folder 'folder' needs to exist in the project
// "/styles" is a virtual address
app.use('/styles', express.static('assets'))

// display a static file
app.get("/start", function(req, res){
  res.sendFile(__dirname + '/start.html')
})

//make dynamic links
app.get("/user/:name", function(req, res){
  res.send('You are wathing the profile of ' + req.params.name)
})

//display a dynamic template - ejs
app.get('/', function(req, res){
  res.render('index.ejs')
})

app.get('/profile/:name', function(req, res){
  var data = {
    age: 29,
    job: 'chef',
    hobbies: ['singing', 'drawing', 'fishing'],
  }
  res.render('profile', {
    person: req.params.name,
    data: data,
  })
})

app.get('/contact', function(req, res){
  res.render('contact.ejs')
})
