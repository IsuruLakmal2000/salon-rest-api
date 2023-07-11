const pool = require('../../config/database'); 

module.exports = {
    
    addEmployee : (data, callBack) => {
        
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
    

    getEmployeeBySalonId : (salonId,callBack)=>{
        pool.query(
           
          'SELECT employee_name,employee_id,image_url FROM employee WHERE salon_id = ?',
            [salonId],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    }
   
}