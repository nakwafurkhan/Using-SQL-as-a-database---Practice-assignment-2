const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});