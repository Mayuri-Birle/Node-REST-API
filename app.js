const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();
app.use(bodyParser.json());
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

/******************Routes****************** */
app.get('/', (req, res) => {
    res.send('Hello world')
});

/************************CONNECT TO DB*************************** */
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to db');

});

// 8770659619
/***************************SERVER************************ */
app.listen(3000);