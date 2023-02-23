var db = require("../config/database.js")
const {responseData,responseMessage} = require('../utils/http-handler.js')
const {coordTransformer} = require('../utils/coord.js')
const getSubDistrictByDistrict = ((req,res) => {
    var params = req.params
    var query = `SELECT code,name,shape_leng,shape_area,adm0,adm0_code,adm1,adm1_code,x,y FROM adm2 WHERE adm1_code='${params.id}' ORDER BY code`
    db.all(query,[],(err,rows) => {
        if(err){
            console.log(err)
            responseMessage(res,400,err)
        }else {
            let newRows = rows.map((r) => {
                return {
                    code: r.code,
                    name: r.name,
                    adm0: r.adm0,
                    adm0_code: r.admo_code,
                    adm1: r.adm1,
                    x: r.x,
                    y: r.y,
                    adm1_code: r.adm1_code,
                    shape_leng: r.shape_leng,
                    shape_area: r.shape_area
                }
            })
            responseData(res,200,newRows)
        }
    })
})

const getDistrictById = ((req,res) => {
    var params = req.params
    var query = `SELECT * FROM adm2 WHERE code='${params.id}'`
    db.all(query,[],(err,rows) => {
        if(err){
            responseMessage(res,400,err)
        }else {
            let newRows = rows.map((r) => {
                return {
                    code: r.code,
                    name: r.name,
                    shape_leng: r.shape_leng,
                    shape_area: r.shape_area,
                    adm0: r.adm0,
                    adm0_code: r.adm0_code,
                    adm1: r.adm1,
                    x: r.x,
                    y: r.y,
                    adm1_code: r.adm1_code,
                    coordinates: JSON.parse(r.coordinates, (k,v) => {
                        if(k == 'geometry') return JSON.parse(v)
                        else return v
                    })
                }
            })
            if(newRows.length >=1) responseData(res,200,newRows[0])
            else responseData(res,200,newRows)
        }
    })
})

module.exports = {
    getSubDistrictByDistrict,
    getDistrictById
}