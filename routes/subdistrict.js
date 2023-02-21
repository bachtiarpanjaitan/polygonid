const express = require('express')
const router = express.Router()

const {
    getSubDistrictByDistrict,
    getSubDistrictById
} = require('../controllers/subDistrictController')

router.get('/:id', getSubDistrictByDistrict)
router.get('/detail/:id',  getSubDistrictById)

module.exports = router