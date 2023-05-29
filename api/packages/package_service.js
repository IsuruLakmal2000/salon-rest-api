const pool = require('../../config/database'); 

module.exports = {
    
    addPackage : (data, callBack) => {
        
        pool.query(
            'insert into package(salon_id,package_name,package_price) values(?,?,?)',
            [
                data.salon_id,
                data.packageName,
                data.packagePrice,
               
               
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