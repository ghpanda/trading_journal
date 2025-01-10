require('dotenv').config();
const mysql = require('mysql');
const express = require("express");
// const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

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

app.post("/add-trade", (req, res) => {
    const {Symbol, Size, Entry, Exits, Pn} = req.body;

    const query = "INSERT INTO trades (Symbol, Size, Entry, Exits, Pnl) Values (?, ?, ?, ?, ?)";
    const values = [Symbol, Size, Entry, Exits, Pnl];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error("Error inserting Data:", err);
            res.status(500).send("Error inserting data into database.");
        } else { 
            console.log("Data inserted sucessfully:", result);
            res.status(200).send("Trade added sucessfully");
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})


