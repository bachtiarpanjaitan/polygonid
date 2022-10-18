var db = require("../config/database.js")
const {responseData,responseMessage} = require('../utils/http-handler.js')

const getSubDistrictByDistrict = ((req,res) => {
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

const getSubDistrictById = ((req,res) => {
    var params = req.params
    var queries = req.query
    var query = `SELECT * FROM sub_districts where sub_district_id=${params.id}`
    if(queries.mode != undefined && queries.mode=="simple"){
        query = `SELECT prov_id,district_id,sub_district_id,name,lat,lng FROM sub_districts where sub_district_id=${params.id}`
    }
    db.all(query,[],(err,rows) => {
        if(err){
            responseMessage(res,400,err)
        }else {
            var polygons = []
            var data = null;
            if(rows.length > 0){
                if(!rows[0].polygon.includes('MULTIPOLYGON')){
                    rows.forEach(row => {
                        polygons.push(row.polygon.substring(7, row.polygon.length))
                    });
                    polygons = `MULTIPOLYGON(${polygons.join(',')})`
                    data = rows[0]
                    data.polygon = polygons

                } else data = rows[0]
            }
            
            if(rows.length > 0)responseData(res,200,data)
            else responseData(res,200,data)
        }
    })

})

module.exports = {
    getSubDistrictByDistrict,
    getSubDistrictById
}