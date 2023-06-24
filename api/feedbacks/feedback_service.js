const pool = require('../../config/database'); 

module.exports = {
    getFeedbackBySalonId : (salonId,callBack)=>{
        pool.query(
           //'select * from feedback where salon_id=?',

           'SELECT feedback.feedback_id, feedback.feedback,feedback.rating_star, customer.customer_name FROM feedback JOIN customer ON feedback.customer_id = customer.customer_id WHERE feedback.salon_id = ?'
          
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