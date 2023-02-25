const express = require('express')
const router = express.Router()
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const {
    getVillageBySubDistrict,
    getVillageById
} = require('../controllers/villageController')

router.get('/detail/:id', cors(corsOptions), getVillageById)
router.get('/:id', cors(corsOptions), getVillageBySubDistrict)

module.exports = router