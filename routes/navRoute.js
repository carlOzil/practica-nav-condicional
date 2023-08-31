const express = require('express');
const { loggedOut, loggedIn } = require('../controllers/navController')

const router = express.Router()

router.get('/', loggedOut)

router.get('/logged', loggedIn)

module.exports = router