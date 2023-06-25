const{addPackage,addSalonType,getPackages} = require('./package_controller');
const router = require('express').Router();

 
router.post('/', addPackage); 
router.post('/salonType',addSalonType); 
router.get('/:salon_id', getPackages);

module.exports = router;