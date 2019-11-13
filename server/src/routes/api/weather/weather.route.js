'use strict';

const express = require('express');
const router = express.Router();
const weatherCity = require('../../../api_services/weather/city');
const auth = require('../../../middlewares/authorization');

router.get('/city', auth(), weatherCity);

module.exports = router;
