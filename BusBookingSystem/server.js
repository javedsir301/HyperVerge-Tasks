const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models');
require('dotenv').config(); 

app.use(bodyParser.json());

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,  
  user: process.env.DB_USER,     
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME  
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});


// Routes
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/buses', require('./routes/buses'));
app.use('/routes', require('./routes/routes'));
app.use('/bookings', require('./routes/bookings'));
app.use('/payments', require('./routes/payments'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

module.exports = app;
