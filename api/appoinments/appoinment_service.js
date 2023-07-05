const pool = require('../../config/database'); 

module.exports = {
    makeAppoinment : (data, callBack) => {
        pool.query(
            'insert into appoinment(salon_id,customer_id,selectedPackage_id,date,day,time,status) values(?,?,?)',
            [
                data.salon_id,
                data.customer_id,
                data.selectedPackage_id,
                data.date,
                data.day,
                data.time,
                data.status
               
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

}