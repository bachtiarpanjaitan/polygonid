const express = require('express')
const router = express.Router()

const {
    getDistrictProvinceList,
    getProvinceById
} = require('../controllers/provinceController')

router.get('/detail/:id',  getProvinceById)
router.get('/', getDistrictProvinceList)

module.exports = router