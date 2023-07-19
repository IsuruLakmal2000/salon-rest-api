const{ makeAppoinment,getServicePoint,checkAvailability,getAppoinmentsDetails,cancelAppoinment,resheduleAppoinment,getAppoinmentsDetailsForSalons,MarkAsCompleted,getCompletedAppoinmentForSalons} = require('./appoinment_controller');
const router = require('express').Router();

router.post('/', makeAppoinment);
router.get('/:salon_id', getServicePoint);
router.get('/', checkAvailability);
router.get('/getAppoinmentDetails/:customer_id', getAppoinmentsDetails);
router.patch('/cancelAppoinments', cancelAppoinment);
router.patch('/resheduleAppoinments', resheduleAppoinment);
router.patch('/markAsCompleted', MarkAsCompleted);
router.get('/getAppoinmentDetailsForSalons/:salon_id', getAppoinmentsDetailsForSalons);
router.get('/getCompletedAppoinmentDetailsForSalons/:salon_id', getCompletedAppoinmentForSalons);


module.exports = router;