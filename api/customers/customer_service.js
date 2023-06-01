const pool = require('../../config/database'); 

module.exports = {
    create : (data, callBack) => {
        pool.query(
            'insert into customer(customer_name,email,password) values(?,?,?)',
            [
                data.customer_name,
                data.email,
                data.password,
               
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
   
    getCustomer: callback =>{
        pool.query(
            'select * from customer',
            [   ],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );

    },
    // updateCustomer: (data, callback) => {
    //     pool.query(
    //         'update customer set description=? where salon_id=?',
    //         [
    //             data.description,
              
    //             data.id
    //         ],
    //         (error, results, fields) => {
    //             if(error){
    //                 return callback(error);
    //             }
    //             return callback(null, results);
    //         }
    //     );
    // },

    // getUserByEmail : (email,callBack)=>{
    //     pool.query(
    //         'select * from salon where email=?',
    //         [email],
    //         (error,results,fields)=>{
    //             if(error){
    //                 return callBack(error);
    //             }
    //             return callBack(null,results);
    //         }
    //     );
    // }

}