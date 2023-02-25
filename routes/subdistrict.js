const express = require('express')
const router = express.Router()
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const {
    getSubDistrictByDistrict,
    getSubDistrictById
} = require('../controllers/subDistrictController')

router.get('/:id', cors(corsOptions),getSubDistrictByDistrict)
router.get('/detail/:id', cors(corsOptions), getSubDistrictById)

module.exports = router