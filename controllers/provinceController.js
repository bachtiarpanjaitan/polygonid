var db = require("../config/database.js")
const {responseData,responseMessage} = require('../utils/http-handler.js')
const getDistrictProvinceList = ((req,res) => {
    var query = 'SELECT code,name,shape_leng,shape_area,adm0,adm0_code,x,y FROM adm1 ORDER BY code'
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
    var query = `SELECT * FROM adm1 WHERE code='${params.id}'`
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
                    x: r.x,
                    y: r.y,
                    coodinates: JSON.parse(r.coordinates, (k,v) => {
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
    getDistrictProvinceList,
    getProvinceById
}