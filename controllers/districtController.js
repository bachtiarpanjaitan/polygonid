var db = require("../config/database.js")
const {responseData,responseMessage} = require('../utils/http-handler.js')
const {coordTransformer} = require('../utils/coord.js')
const getDistrictByProv = ((req,res) => {
    var params = req.params
    var queries = req.query
    if(queries.mode != undefined && queries.mode=="simple"){
        var query = `SELECT prov_id,district_id,name,lat,lng FROM districts where prov_id = ${params.id} ORDER BY district_id`
    } else {
        var query = `SELECT * FROM districts where prov_id = ${params.id} ORDER BY district_id`
    }
    
    db.all(query,[],(err,rows) => {
        if(err){
            responseMessage(res,400,err)
        }else {
            let newRows = rows.map((r) => {
                return {
                    prov_id: r.prov_id,
                    district_id: r.district_id,
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

const getDistrictById = ((req,res) => {
    var params = req.params
    var queries = req.query
    var query = `SELECT * FROM districts where district_id=${params.id}`
    if(queries.mode != undefined && queries.mode=="simple"){
        query = `SELECT prov_id,district_id,name,lat,lng FROM districts where district_id=${params.id}`
    }
    db.all(query,[],(err,rows) => {
        if(err){
            responseMessage(res,400,err)
        }else {
            let newRows = rows.map((r) => {
                return {
                    prov_id: r.prov_id,
                    district_id: r.district_id,
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
    getDistrictByProv,
    getDistrictById
}