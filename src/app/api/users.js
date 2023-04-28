const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const connection = mysql.createConnection({
  host: '34.107.29.34',
  user: 'test',
  password: 'IdEseB.345',
  database: 'users'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      return;
    }
    console.log('Connected to database with id ' + connection.threadId);
  });




app.get("/register", (req, res) => {
    connection.query('SELECT * FROM user_table', (error, results, fields) => {
        if (error) throw error;
        res.send(results);
      });
})  


app.post("/insert", (req, res) => {

  const username = req.body.username;
  const email = req.body.email;
  const passwort = req.body.passwort;

  const data = {
    username: username,
    email: email,
    password: passwort,
  };

  connection.query('INSERT INTO user_table SET ?', data, (error, result) => {
    if (error) throw error;
    console.log('Daten erfolgreich eingefügt');
    res.send('Daten erfolgreich eingefügt'); // Antwort an den Browser senden
  });
});




app.listen(3000, () => {
    console.log('Server is listening on port 8000');
  });
  