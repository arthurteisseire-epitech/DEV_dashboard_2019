'use strict';

const express = require('express');
const router = express.Router();
const yggRss = require('../../../api_services/ygg/rss');
const auth = require('../../../middlewares/authorization');

router.get('/rss', yggRss);

module.exports = router;
