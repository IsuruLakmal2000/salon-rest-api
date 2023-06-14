const{createSalon,getSalon,updateSalon,login} = require('./salon_controller');
const router = require('express').Router();

router.post('/', createSalon);
router.get('/', getSalon);
router.patch('/', updateSalon); 
router.post('/:login/',login)


module.exports = router;