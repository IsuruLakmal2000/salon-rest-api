const{createUser,getUsers,updateUser,login} = require('./user_controller');
const router = require('express').Router();

router.post('/', createUser);
router.get('/', getUsers);
router.patch('/', updateUser); 
//router.post('/login',login)


module.exports = router;