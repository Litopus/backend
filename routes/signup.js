const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.send('GET: /api/signup'))

router.post('/', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

module.exports = router