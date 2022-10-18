var db = require("../config/database.js")
const {responseData,responseMessage} = require('../utils/http-handler.js')

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
            responseData(res,200,rows)
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
            if(rows.length > 0)responseData(res,200,rows)
            else responseData(res,200,rows)
        }
    })

})

module.exports = {
    getDistrictByProv,
    getDistrictById
}