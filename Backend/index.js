const express = require('express');
const connect = require('./connect');
const cors = require('cors');
const morgan = require('morgan');
const bodyparsor = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express()
connect()

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(cors());
app.use('/', require('./Routes/admin'));
app.use(bodyparsor.json());
app.use(morgan('dev'));

const catResponseRoutes = require('./Routes/admin');
app.use('/api', catResponseRoutes);

app.use('/api/questions', require('./Routes/admin'));

app.listen(5000,()=>
{
    console.log("server is running on 5000");
    
});

