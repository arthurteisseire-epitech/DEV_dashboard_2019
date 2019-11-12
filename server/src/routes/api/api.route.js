'use strict';

const express = require('express');
const router = express.Router();
const yggRouter = require('./ygg/ygg.route');

router.use('/ygg', yggRouter);

module.exports = router;
