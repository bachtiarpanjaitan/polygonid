var db = require("../config/database.js")
const {responseData,responseMessage} = require('../utils/http-handler.js')
const getProvinceList = ((req,res) => {
    var query = 'SELECT * FROM provincies ORDER BY prov_id'
    db.all(query,[],(err,rows) => {
        if(err){
            responseMessage(res,400,err)
        }else {
            responseData(res,200,rows)
        }
    })
})

module.exports = {
    getProvinceList
}