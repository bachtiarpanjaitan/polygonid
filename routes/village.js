const express = require('express')
const router = express.Router()

const {
    getVillageBySubDistrict
} = require('../controllers/villageController')

// router.get('/:id', getDistrictById)
router.get('/list/:id', getVillageBySubDistrict)

module.exports = router