const express = require('express');
const db = require('./data/route');

const router = express.Router();

router.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';

  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(results);
    }
  });
});

router.post('/users', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  const values = [name, email];

  db.query(query, values, (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json({ message: 'User created successfully' });
    }
  });
});

module.exports = router;
