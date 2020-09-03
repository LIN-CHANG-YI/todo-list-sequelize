const express = require('express')
const router = express.Router()
const home = require('./models/home.js')
const users = require('./models/users.js')
const todos = require('./models/todos.js')


router.use('/users', users)
router.use('/todos', todos)
router.use('/', home)

module.exports = router