const express = require('express')
const router = express.Router()

const {
    getVillageBySubDistrict,
    getVillageById
} = require('../controllers/villageController')

router.get('/detail/:id', getVillageById)
router.get('/:id', getVillageBySubDistrict)

module.exports = router