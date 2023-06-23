const pool = require('../../config/database'); 

module.exports = {
    getFeedbackBySalonId : (callBack)=>{
        pool.query(
           //'select * from feedback where salon_id=${salon_id}',
           'select * from feedback',
            
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    }

}