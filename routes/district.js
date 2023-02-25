const express = require('express')
const router = express.Router()
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const {
    getSubDistrictByDistrict,
    getDistrictById
} = require('../controllers/districtController')

router.get('/detail/:id', cors(corsOptions), getDistrictById)
router.get('/:id', cors(corsOptions),getSubDistrictByDistrict)

module.exports = router