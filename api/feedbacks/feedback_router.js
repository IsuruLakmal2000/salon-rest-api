const{getFeedback} = require('./feedback_controller');
const router = require('express').Router();

 
 router.get('/:salon_id', getFeedback); 
// router.post('/salonType',addSalonType); 

module.exports = router;