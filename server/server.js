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
    connection.query('SELECT * FROM users', (error, results, fields) => {
        if (error) throw error;
        res.send(results);
      });
})  


app.get("/insert", (req, res) => {
  const data = {
    username: 'John Doe',
    mail: 'johndoe@example.com',
  };

  connection.query('INSERT INTO users SET ?', data, (error, result) => {
    if (error) throw error;
    console.log('Daten erfolgreich eingefügt');
    res.send('Daten erfolgreich eingefügt'); // Antwort an den Browser senden
  });
});



// Body-Parser konfigurieren
app.use(bodyParser.urlencoded({ extended: true }));

// Formular-Route definieren
app.post('/formular', (req, res) => {
  const { name, email, message } = req.body;

    console.log(name)

  res.send(
    ""
  )
});



app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });
  