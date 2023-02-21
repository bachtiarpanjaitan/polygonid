const express = require('express')
const router = express.Router()

const {
    getSubDistrictByDistrict,
    getDistrictById
} = require('../controllers/districtController')

router.get('/detail/:id', getDistrictById)
router.get('/:id', getSubDistrictByDistrict)

module.exports = router