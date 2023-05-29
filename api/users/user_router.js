const{createUser,getUsers,updateUser} = require('./user_controller');
const router = require('express').Router();

router.post('/', createUser);
router.get('/', getUsers);
router.patch('/', updateUser); 


module.exports = router;