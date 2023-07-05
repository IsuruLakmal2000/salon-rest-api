const{ makeAppoinment} = require('./appoinment_controller');
const router = require('express').Router();

router.post('/', makeAppoinment);


module.exports = router;