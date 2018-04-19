console.log('Hey there')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const quotes_data = require('../quotes_data');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/all-quotes', function(req, res){ // '/all-quotes' is called a 'route'
    res.send(quotes_data);
});

// app.get('/', function(req, res){
//     console.log('yep it worked');
//     res.send(); // cannot send numbers because numbers usually represents errors (ex: 404 error)
// });


// this is ES6 way of writing above function
// app.get('/', (req, res) => { 
//     res.send('Happy Wednesday');
// });

app.get('/quote', function(req, res){
    const randomNumber = Math.floor(Math.random()* quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

// this is ES6 way of writing above function
// app.get('/quote', (req, res) => {
//     res.send(quotes_data[0]);
    
// });

app.post('/add-quote', function(req, res){
    console.log(req.body); //whatever data we send on our post is req.body in our server
    quotes_data.push(req.body);
    res.sendStatus(200);
});

app.listen(PORT, function (){ // this function waits for server to run and then the function calls back the 'console.log'
    console.log(`listening to port, ${PORT}`)
});

// this is the ES6 way of writing the above function
// app.listen(PORT, () =>{ 
//     console.log(`listening to port, ${PORT}`)
// });





