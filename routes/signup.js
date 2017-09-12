const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.send('GET: /api/signup'))

module.exports = router