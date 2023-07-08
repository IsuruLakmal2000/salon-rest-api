const{ makeAppoinment,getServicePoint} = require('./appoinment_controller');
const router = require('express').Router();

router.post('/', makeAppoinment);
router.get('/:salon_id', getServicePoint);


module.exports = router;