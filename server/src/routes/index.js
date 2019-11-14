'use strict';

const express = require('express');
const router = express.Router();
const authRouter = require('./auth/auth.route');
const apiRouter = require('./api/api.route');

router.get('/status', (req, res) => {
    res.send({status: 'OK'})
});

router.use('/api', apiRouter);
router.use('/auth', authRouter);

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
