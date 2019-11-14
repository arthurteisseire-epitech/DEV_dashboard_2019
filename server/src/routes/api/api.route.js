'use strict';

const express = require('express');
const router = express.Router();
const yggRouter = require('./ygg/ygg.route');
const youtubeRouter = require('./youtube/youtube.route');
const weatherRouter = require('./weather/weather.route');

router.use('/ygg', yggRouter);
router.use('/youtube', youtubeRouter);
router.use('/weather', weatherRouter);

module.exports = router;
