const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const mainRouter = require('./routers/mainRouter');
app.use(express.static('public'));

app.use('/', mainRouter);

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});
