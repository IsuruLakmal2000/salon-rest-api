
const {create, getUsers,updateUsers} = require('./user.service');

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        console.log(req.body);
        // const salt = genSaltSync(10);
        // body.password = hashSync(body.password, salt);
        create(body,(err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    updateUser: (req, res) => {
        const body = req.body;
        updateUsers(body,(err,results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Failed to update user"
                });
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err,results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
    
};