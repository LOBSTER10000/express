const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const requestIp = require('request-ip');
const http = require('http');
const dotenv = require('dotenv');

dotenv.config();
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(morgan('combined'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());


app.get('/', (req,res,next)=>{
    res.send('허허');
})


app.use(requestIp.mw());

let server = http.createServer(app);

server.listen(3000, ()=>{
    console.log(`Server is Running on port ${3000}`);
});

