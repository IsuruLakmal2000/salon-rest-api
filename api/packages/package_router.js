const{addPackage,addSalonType} = require('./package_controller');
const router = require('express').Router();

 
router.post('/', addPackage); 
router.post('/salonType',addSalonType); 

module.exports = router;