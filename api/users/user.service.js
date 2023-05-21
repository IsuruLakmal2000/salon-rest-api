const pool = require('../../config/database'); 

module.exports = {
    create : (data, callBack) => {
        pool.query(
            'insert into user(name,password) values(?,?)',
            [
                data.name,
                data.password
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getUsers: callback =>{
        pool.query(
            'select * from user',
            [   ],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );

    },
    updateUsers: (data, callback) => {
        pool.query(
            'update user set name=?, password=? where id=?',
            [
                data.name,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
}