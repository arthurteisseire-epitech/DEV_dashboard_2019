'use strict';

const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const config = require('../config');
const httpStatus = require('http-status');

exports.register = async (req, res, next) => {
  try {
    const body = req.body;
    const user = new User(body);
    const savedUser = await user.save();
    res.status(httpStatus.CREATED);
    res.send(savedUser.transform())
  } catch (error) {
    return next(User.checkDuplicateEmailError(error))
  }
};

exports.update = async (req, res, next) => {
  try {
    const user = req.user;
    user.setWeatherCity(req.body.cityname);
    const savedUser = await user.save();
    res.send(savedUser.transform())
  } catch (error) {
    next(error)
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findAndGenerateToken(req.body);
    const payload = {sub: user.id};
    const token = jwt.sign(payload, config.secret);
    return res.json({ message: 'OK', token: token })
  } catch (error) {
    next(error)
  }
};
