const mongojs = require('mongojs');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
    const db = mongojs("127.0.0.1/dashboard_db");
    db.collection('users').findOne({mail: "toto@toto.fr"}, function (err, doc) {
        console.log(doc);
    });

    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);
