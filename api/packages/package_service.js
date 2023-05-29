const pool = require('../../config/database'); 

module.exports = {
    
    addPackage : (data, callBack) => {
        
        pool.query(
            'insert into package(package_name,package_price,salon_id) values(?,?,?)',
            [
                
                data.packageName,
                data.packagePrice,
                data.salon_id,
               
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