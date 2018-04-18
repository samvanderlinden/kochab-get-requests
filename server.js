console.log('Hey there')

const express = require('express');
const app = express();
const PORT = 5000;
const quotes_data = require('./quotes_data');

app.get('/', function(req, res){
    res.send('Happy Wednesday');
});

app.get('/all-quotes', function(req, res){
    res.send(quotes_data);
})

app.listen(PORT, function (){
    console.log(`listening to port, ${PORT}`)
});

