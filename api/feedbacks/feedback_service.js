const pool = require('../../config/database'); 

module.exports = {
    getFeedbackBySalonId : (salon_id,callBack)=>{
        pool.query(
           'select * from feedback where salon_id=${salon_id}',
           //'select * from feedback',
            [salon_id],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    }

}