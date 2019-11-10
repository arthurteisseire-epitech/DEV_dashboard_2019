'use strict';
const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');

router.get('/status', (req, res) => {
    res.send({status: 'OK'})
}); // api status

router.use('/auth', authRouter); // mount auth paths

router.get('/about.json', (req, res) => {
    const aboutJson = {
        client: {
            host: req.connection.remoteAddress
        },
        server: {
            current_time: Date.now(),
            services: getListServices()
        }
    };
    res.json(aboutJson)
});

function getListServices() {
    return {};
}

module.exports = router;
