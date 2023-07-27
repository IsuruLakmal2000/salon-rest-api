const {
  getCompleted_appoinment_count,
  getTotalEarnings,
  getAvailableAppoinmentCount,
  Last7dayRevenue,
  Last7dayTotalRevenue,
  Last30dayTotalRevenue,
  Last90dayTotalRevenue,
  Last4WeekRevenue,
  Last3MonthRevenue,
  RepeateCustomerIncome,
  RepeateCustomerCount,
} = require("./report_services");

module.exports = {
  getDashboardDetails: (req, res) => {
    const salon_id = req.params.salon_id;
    let completed_appointments, total_earnings, available_appoinments;
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

        getAvailableAppoinmentCount(salon_id, (err, result3) => {
          console.log("inside available appoinment");
          if (err) {
            console.log(err);
            return;
          }
          available_appoinments = result3;
          console.log(total_earnings);
          //   return res.json({
          //     success: 1,
          //     data: result2,
          //   });

          return res.json({
            success: 1,
            data: {
              completed_appointments,
              total_earnings,
              available_appoinments,
            },
          });
        });
      });
    });
  },
  // --------------Revenue for the last 7 days---------------- bar cahrt
  Last7dayRevenue: (req, res) => {
    const salonId = req.params.salon_id;
    Last7dayRevenue(salonId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  Last4WeekRevenue: (req, res) => {
    const salonId = req.params.salon_id;
    Last4WeekRevenue(salonId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  Last3MonthRevenue: (req, res) => {
    const salonId = req.params.salon_id;
    Last3MonthRevenue(salonId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  Last7dayTotalRevenue: (req, res) => {
    const salonId = req.params.salon_id;
    Last7dayTotalRevenue(salonId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  Last30dayTotalRevenue: (req, res) => {
    const salonId = req.params.salon_id;
    Last30dayTotalRevenue(salonId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  Last90dayTotalRevenue: (req, res) => {
    const salonId = req.params.salon_id;
    Last90dayTotalRevenue(salonId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  GetRepeatedCustomerReports: (req, res) => {
    let RepeatedCustomer_Count, totalIncome_RepeatedCustomers;
    const salonId = req.params.salon_id;
    RepeateCustomerCount(salonId, (err, result1) => {
      if (err) {
        console.log(err);
        return;
      }
      RepeaatedCustomer_Count = result1;
      // return res.json({
      //   success: 1,
      //   data: result1,
      // });
      RepeateCustomerIncome(salonId, (err, result2) => {
        if (err) {
          console.log(err);
          return;
        }
        totalIncome_RepeatedCustomers = result2;
        return res.json({
          success: 1,

          data: {
            RepeatedCustomer_Count,
            totalIncome_RepeatedCustomers,
          },
        });
      });
    });
  },
};
//get repeated customer earnings

//getSalonById
