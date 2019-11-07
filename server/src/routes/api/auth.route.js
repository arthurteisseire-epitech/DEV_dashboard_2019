'use strict'

const express = require('express')
const router = express.Router()
const authController = require('../../controllers/auth.controller')
const validator = require('express-validation')
const { create } = require('../../validations/user.validation')
const auth = require('../../middlewares/authorization')

router.post('/register', validator(create), authController.register)
router.post('/login', authController.login)

router.get('/secret1', auth(), (req, res) => {
  res.json({ message: 'Anyone can access(only authorized)' })
})

module.exports = router
