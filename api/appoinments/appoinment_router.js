const{ makeAppoinment,getServicePoint,checkAvailability,getAppoinmentsDetails,cancelAppoinment,resheduleAppoinment,getAppoinmentsDetailsForSalons} = require('./appoinment_controller');
const router = require('express').Router();

router.post('/', makeAppoinment);
router.get('/:salon_id', getServicePoint);
router.get('/', checkAvailability);
router.get('/getAppoinmentDetails/:customer_id', getAppoinmentsDetails);
router.patch('/cancelAppoinments', cancelAppoinment);
router.patch('/resheduleAppoinments', resheduleAppoinment);
router.get('/getAppoinmentDetailsForSalons/:salon_id', getAppoinmentsDetailsForSalons);


module.exports = router;