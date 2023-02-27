const express = require('express')
const { allCars } = require('../controllers/carController')

const router = express.Router()

router.get('/allCars', allCars)

module.exports = router