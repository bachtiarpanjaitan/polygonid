const express = require('express')
const router = express.Router()

const {
    getProvinceList,
    getProvinceById,
    getProvinceListSimple
} = require('../controllers/provinceController')

router.get('/', getProvinceListSimple)
router.get('/detail', getProvinceList)
router.get('/:id', getProvinceById)

module.exports = router