const{ makeAppoinment,getServicePoint,checkAvailability,getAppoinmentsDetails} = require('./appoinment_controller');
const router = require('express').Router();

router.post('/', makeAppoinment);
router.get('/:salon_id', getServicePoint);
router.get('/', checkAvailability);
router.get('/getAppoinmentDetails/:customer_id', getAppoinmentsDetails);


module.exports = router;