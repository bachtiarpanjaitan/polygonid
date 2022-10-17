const express = require('express')
const router = express.Router()

const {
    getProvinceList
} = require('../controllers/provinceController')

router.get('/', getProvinceList)

module.exports = router