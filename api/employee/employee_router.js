const{getEmployees} = require('./employee_controller');
const router = require('express').Router();

 
router.post('/', addPackage); 
 
router.get('/:salon_id', getEmployees);

module.exports = router;