const express = require('express')
const router = express.Router()

const {
    getDistrictByProv,
    getDistrictById
} = require('../controllers/districtController')

router.get('/:id', getDistrictById)
router.get('/list/:id', getDistrictByProv)

module.exports = router