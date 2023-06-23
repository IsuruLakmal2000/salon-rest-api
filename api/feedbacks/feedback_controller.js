
const {getFeedbackBySalonId} = require('./feedback_service');


module.exports = {
    
    getFeedback: (req, res) => {
        const {salon_id} = req.params;
        getFeedbackBySalonId(salon_id,(err,results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    
};