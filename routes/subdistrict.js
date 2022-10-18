const express = require('express')
const router = express.Router()

const {
    getSubDistrictByDistrict,
    getSubDistrictById
} = require('../controllers/subDistrictController')

router.get('/:id', getSubDistrictById)
router.get('/list/:id', getSubDistrictByDistrict)

module.exports = router