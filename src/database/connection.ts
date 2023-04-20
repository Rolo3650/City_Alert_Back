import mysql from 'mysql2';
import { config } from '../utils/config.js';

const con = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: config.DB_PORT
});

con.connect(err => {
  if (err) {
    console.error(err);
  }
  // console.log('Conectado');
});

export { con };
