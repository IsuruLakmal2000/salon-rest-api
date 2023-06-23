
const {getFeedbackBySalonId} = require('./feedback_service');


module.exports = {
    
    getFeedback: (req, res) => {
        console.log(req.params.salon_id);
        const {salonId} = req.params.salon_id;
        console.log(salonId);
        getFeedbackBySalonId(salonId,(err,results) => {
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