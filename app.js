const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('home');
});

app.get('/login', (req,res)=>{
    res.render('login');
});

app.get('/register', (req,res)=>{
    res.render('register');
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});
