
const {create, getUsers,updateUsers,getUserByEmail} = require('./user.service');
const { genSaltSync, hashSync ,compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');


module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        console.log(req.body);
        //-----------salon password encryption----------
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        //-----------
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
    },

    // login: (req, res) => {
    //     const body = req.body;
    //     getUserByEmail(body.email, (err, results) => {
    //         if(err){
    //             console.log(err);
    //         }
    //         if(!results){
    //             return res.json({
    //                 success: 0,
    //                 data: "Invalid email or password "
    //             });
    //         }
    //         const result = compareSync(body.password, results.password);
    //         if(result){
    //             results.password = undefined;
    //             const jsontoken = sign({result: results}, process.env.JWT_KEY, {
    //                 expiresIn: "1h"
    //             });
    //             return res.json({
    //                 success: 1,
    //                 message: "login successfully",
    //                 token: jsontoken
    //             });
    //         }else{
    //             console.log(result);
    //             console.log(body.password +""+ results.password);
    //             return res.json({
                    
    //                 success: 0,
    //                 data: "Invalid email or password"
    //             });
    //         }
    //     });
    // },
    
};