var db = require("../config/database.js")
const {responseData,responseMessage} = require('../utils/http-handler.js')
const {coordTransformer} = require('../utils/coord.js')
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
            let newRows = rows.map((r) => {
                return {
                    prov_id: r.prov_id,
                    district_id: r.district_id,
                    sub_district_id: r.sub_district_id,
                    name: r.name,
                    lat: r.lat,
                    lng: r.lng,
                    polygon: JSON.parse(coordTransformer(r.polygon))
                }
            })

            responseData(res,200,newRows)
            // responseData(res,200,rows)
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

                let newRows = {
                    prov_id: rows[0].prov_id,
                    district_id: rows[0].district_id,
                    sub_district_id: rows[0].sub_district_id,
                    name: rows[0].name,
                    lat: rows[0].lat,
                    lng: rows[0].lng,
                    polygon: JSON.parse(coordTransformer(data.polygon))
                }

                responseData(res,200,newRows)
            } else responseData(res,200, [])  
        }
    })

})

module.exports = {
    getSubDistrictByDistrict,
    getSubDistrictById
}