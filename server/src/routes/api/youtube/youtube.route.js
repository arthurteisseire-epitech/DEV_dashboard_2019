'use strict';

const express = require('express');
const router = express.Router();
const youtubeReader = require('../../../api_services/youtube/reader');
const youtubeVideo = require('../../../api_services/youtube/video');
const auth = require('../../../middlewares/authorization');

router.get('/reader', auth(), youtubeReader);
router.get('/video', auth(), youtubeVideo);

module.exports = router;
