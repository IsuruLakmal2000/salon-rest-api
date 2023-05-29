
const {create, getUsers,updateUsers,addPackage} = require('./package_service');

module.exports = {
    
    addPackage: (req, res) => {
        const body = req.body;
       
        packages.forEach((package) => {
            pool.query(
              'INSERT INTO packages (name, price) VALUES (?, ?)',
              [package.name, package.price],
              (error, results, fields) => {
                if (error) throw error;
                console.log('Inserted package:', package);
              }
            );
          });


    },
  
    
};