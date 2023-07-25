const {
  getCompleted_appoinment_count,
  getTotalEarnings,
} = require("./report_services");

module.exports = {
  getDashboardDetails: (req, res) => {
    const salon_id = req.params.salon_id;
    let completed_appointments, total_earnings;
    getCompleted_appoinment_count(salon_id, (err, result1) => {
      if (err) {
        console.log(err);
        return;
      }
      completed_appointments = result1;
      console.log(completed_appointments);
      //   return res.json({
      //     success: 1,
      //     data: result1,
      //   });

      getTotalEarnings(salon_id, (err, result2) => {
        if (err) {
          console.log(err);
          return;
        }
        total_earnings = result2;
        console.log(total_earnings);
        //   return res.json({
        //     success: 1,
        //     data: result2,
        //   });

        getAvailableAppoinmentCount(salon_id, (err, result2) => {
          if (err) {
            console.log(err);
            return;
          }
          total_earnings = result2;
          console.log(total_earnings);
          //   return res.json({
          //     success: 1,
          //     data: result2,
          //   });

          return res.json({
            success: 1,
            data: { completed_appointments, total_earnings },
          });
        });
      });
    });
  },
};

//getSalonById
