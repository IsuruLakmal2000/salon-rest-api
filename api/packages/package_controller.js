
const {addPackage,addSalonType} = require('./package_service');

module.exports = {

  addPackage: (req, res) => {
    const body = req.body;
   
    
    addPackage(body,(err, results) => {
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
addSalonType: (req, res) => {
    const body = req.body;
   
    
    addSalonType(body,(err, results) => {
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
   
    
};