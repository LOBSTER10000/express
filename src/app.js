import express from 'express'
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import requestIp from 'request-ip';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// 프록시 환경에서 client ip => X-Forwarded-* 에서 조회
app.set('trust proxy', function(ip){
    if( ip === '127.0.0.1') return true;
    else return false;
});

app.use(morgan('combined'));
app.use(express.json({extends : true}));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

app.use(requestIp.mw());

let server = http.createServer(app);

server.listen(3000, ()=>{
    console.log(`Server is Running on port ${3000}`);
});