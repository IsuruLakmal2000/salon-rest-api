const{ makeAppoinment,getServicePoint,checkAvailability,getAppoinmentsDetails,cancelAppoinment} = require('./appoinment_controller');
const router = require('express').Router();

router.post('/', makeAppoinment);
router.get('/:salon_id', getServicePoint);
router.get('/', checkAvailability);
router.get('/getAppoinmentDetails/:customer_id', getAppoinmentsDetails);
router.patch('/cancelAppoinments', cancelAppoinment);


module.exports = router;