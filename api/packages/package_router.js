const{addPackage} = require('./package_controller');
const router = require('express').Router();

 
router.post('/', addPackage); 

module.exports = router;