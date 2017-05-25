const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine','hbs');

app.get('/about',(req,res)=>{
  res.render('about.hbs');
});

app.get('/',(req,res)=>{
  res.render('home.hbs',{
    welcomeMsg : 'Welcome home !',
    currentYear : new Date().getFullYear(),
    pageTitle : 'Home page'
  })
});

app.get('/bad',(req,res)=>{
  res.send({
      errorMessage : 'Bad request'
  });
});

app.listen(3000,()=>{
  console.log('server running on 3000');
});
