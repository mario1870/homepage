
import { createConnection } from 'mysql';
const LRU = require('lru');


const db = createConnection({
  host: '34.107.29.34',
  user: 'test',
  password: 'IdEseB.345',
  database: 'users',
  multipleStatements: true
});





  db.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      return;
    }
    console.log('Connected to database with ID ' + db.threadId);
  });
  
  export default db;




