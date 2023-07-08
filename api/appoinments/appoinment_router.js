const{ makeAppoinment,getServicePoint,checkAvailability} = require('./appoinment_controller');
const router = require('express').Router();

router.post('/', makeAppoinment);
router.get('/:salon_id', getServicePoint);
router.get('/', checkAvailability);


module.exports = router;