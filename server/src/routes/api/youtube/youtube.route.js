'use strict';

const express = require('express');
const router = express.Router();
const youtubeReader = require('../../../api_services/youtube/reader');
const auth = require('../../../middlewares/authorization');

router.get('/reader', auth(), youtubeReader);

module.exports = router;
