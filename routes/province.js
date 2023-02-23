const express = require('express')
const router = express.Router()
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const {
    getDistrictProvinceList,
    getProvinceById
} = require('../controllers/provinceController')

router.get('/detail/:id', cors(corsOptions), getProvinceById)
router.get('/', cors(corsOptions), getDistrictProvinceList)

module.exports = router