const express = require('express')
const router = express.Router()
const home = require('./models/home.js')
const users = require('./models/users.js')
const todos = require('./models/todos.js')
const auth = require('./models/auth.js')
const { authenticator } = require('../middleware/auth.js')


router.use('/users', users)
router.use('/auth', auth)
router.use('/todos', authenticator, todos)
router.use('/', authenticator, home)

module.exports = router