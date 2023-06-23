const{getFeedback} = require('./feedback_controller');
const router = require('express').Router();

 
 router.get('/', getFeedback); 
// router.post('/salonType',addSalonType); 

module.exports = router;