var db = require("../config/database.js")
const {responseData,responseMessage} = require('../utils/http-handler.js')
const {coordTransformer} = require('../utils/coord.js')
const getProvinceList = ((req,res) => {
    var query = 'SELECT * FROM provincies ORDER BY prov_id'
    db.all(query,[],(err,rows) => {
        if(err){
            responseMessage(res,400,err)
        }else {
            let newRows = rows.map((r) => {
                return {
                    prov_id: r.prov_id,
                    name: r.name,
                    lat: r.lat,
                    lng: r.lng,
                    polygon: JSON.parse(coordTransformer(r.polygon))
                }
            })
            responseData(res,200,newRows)
        }
    })
})

const getProvinceListSimple = ((req,res) => {
    var query = 'SELECT prov_id,name,lat,lng FROM provincies ORDER BY prov_id'
    db.all(query,[],(err,rows) => {
        if(err){
            responseMessage(res,400,err)
        }else {
            responseData(res,200,rows)
        }
    })
})

const getProvinceById = ((req,res) => {
    var params = req.params
    var queries = req.query
    var query = `SELECT * FROM provincies where prov_id=${params.id} LIMIT 1`
    if(queries.mode != undefined && queries.mode=="simple"){
        query = `SELECT prov_id,name,lat,lng FROM provincies where prov_id=${params.id} LIMIT 1`
    }
    db.all(query,[],(err,rows) => {
        if(err){
            responseMessage(res,400,err)
        }else {
            let newRows = rows.map((r) => {
                return {
                    prov_id: r.prov_id,
                    name: r.name,
                    lat: r.lat,
                    lng: r.lng,
                    polygon: JSON.parse(coordTransformer(r.polygon))
                }
            })

            responseData(res,200,newRows)
        }
    })
})

module.exports = {
    getProvinceList,
    getProvinceById,
    getProvinceListSimple
}