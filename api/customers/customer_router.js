const{ createCustomer, getCustomer, updateCustomer} = require('./customer_controller');
const router = require('express').Router();

router.post('/', createCustomer);
router.get('/', getCustomer);
router.patch('/', updateCustomer); 
//router.post('/login',login)


module.exports = router;