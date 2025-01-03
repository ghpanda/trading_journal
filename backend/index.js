require('dotenv').config();

const mysql = require('mysql');

const db = mysql.createConnection ({
    host: process.env.DB_HOST,
    port: "3306",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // really bad will do dev thing to make it not show
});

db.connect((err) => {
    if(err) {
        console.log(err.message);
        return;
    }
    console.log("Database Connected");
});

// db.end((err) => {
//     if (err) {
//       console.error('Error closing connection:', err);
//     } else {
//       console.log('Connection closed successfully.');
//     }
//   });