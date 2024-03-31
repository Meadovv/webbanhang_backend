const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json({
    limit: '2mb'
}));
app.use(express.urlencoded({ 
    extended: true 
}));
app.use(cors());

const Database = require('./databases/mysql.database');


// Database
Database.getInstance();


// Router
app.use('/api/v1', require('./routes/router'));

module.exports = app;