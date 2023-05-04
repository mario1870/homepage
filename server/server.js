const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

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
  

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Display a single user by ID
app.get('/users', (request, response) => {

  const id = request.params.id;

  connection.query('SELECT * FROM user_table', id, (error, result) => {

      if (error) throw error;

      response.send(result);

  });

});

app.post('/signup', (req, res) => {
  
  const { username, email, password } = req.body;

  {/* Prüfung, ob Username bereits existiert */}
  connection.query('SELECT * FROM user_table WHERE username = ?', [username], (error, results) => {
    if (error) {throw error}

    if (results.length > 0) {
      res.send('Der Benutzername existiert bereits');
    } 
    else {    
      {/* Prüfung, ob Email-Addresse bereits existiert */}
      connection.query('SELECT * FROM user_table WHERE email = ?', [email], (error, results) => {
        if (error) {throw error}
    
        if (results.length > 0) {
          res.send('Die Email existiert bereits');
        }
        
        else{
          {/* Wenn Username & Email-Addresse noch ungenutzt sind, wird der neue User in die DB eingetragen */}
          connection.query('INSERT INTO user_table (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, result) => {
            if (err) {
              console.error(err);
              res.status(500).send('Nutzer mit dieser Email-Addresse existiert bereits');
            } else {
              res.status(201).send(`User added with ID: ${result.insertId}`);
            }
          });
        }      
      })
    }
  });

  

});





app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });





  //connection.query('INSERT INTO user_table SET id=?, username?, email=?, password=?', [id, username, email, password], (error, result) => {

  //    if (error) throw error;

  //    response.status(201).send(`User added with ID: ${result.insertId}`);

  //});

