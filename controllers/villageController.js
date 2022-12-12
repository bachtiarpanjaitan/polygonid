var db = require("../config/database.js")
const {responseData,responseMessage} = require('../utils/http-handler.js')

const getVillageBySubDistrict = ((req,res) => {
    var params = req.params
    var queries = req.query

    var query = `SELECT * FROM sub_districts where district_id = ${params.id} ORDER BY sub_district_id`
    if(queries.mode != undefined && queries.mode=="simple"){
        var query = `SELECT prov_id,district_id,sub_district_id,name,lat,lng FROM sub_districts where district_id = ${params.id} ORDER BY sub_district_id`
    }
    
    db.all(query,[],(err,rows) => {
        if(err){
            responseMessage(res,400,err)
        }else {
            responseData(res,200,rows)
        }
    })
})

module.exports = {
    getVillageBySubDistrict,
}