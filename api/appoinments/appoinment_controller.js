const {makeAppoinment } = require('./appoinment_service');

module.exports = {
    makeAppoinment: (req, res) => {
        const body = req.body;
        console.log(req.body);
       
        makeAppoinment(body,(err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            if (typeof results === 'string') {
                return res.status(400).json({
                  success: 0,
                  message: results
                });
              }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    checkAvailability: (req, res) => {
        const body = req.body;
        console.log(req.body);
       
        checkAvailability(body,(err, results) => {
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
    

}