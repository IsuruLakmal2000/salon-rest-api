const pool = require('../../config/database'); 

module.exports = {
    getFeedbackBySalonId : (salonId,callBack)=>{
        pool.query(
           'select * from feedback where salon_id=?',
           //'select * from feedback',
            [salonId],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    }

}