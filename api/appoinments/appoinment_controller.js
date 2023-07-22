const {
  makeAppoinment,
  getServicePoint,
  checkAvailability,
  getOngoingAppoinmentsDetails,
  cancelAppoinment,
  resheduleAppoinment,
  getAvailableAppoinmentForSalons,
  MarkAsCompleted,
  getCompletedAppoinmentForSalons,
  getCancelAppoinment,
  getCompletedAppoinmentForCustomer,
} = require("./appoinment_service");

module.exports = {
  makeAppoinment: (req, res) => {
    const body = req.body;
    console.log(req.body);

    makeAppoinment(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (typeof results === "string") {
        return res.status(400).json({
          success: 0,
          message: results,
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  checkAvailability: (req, res) => {
    const body = req.query;
    console.log(req.body);

    checkAvailability(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getServicePoint: (req, res) => {
    const salonId = req.params.salon_id;
    getServicePoint(salonId, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results[0],
      });
    });
  },

  getAppoinmentsDetails: (req, res) => {
    const customer_id = req.params.customer_id;
    getOngoingAppoinmentsDetails(customer_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });

    // getAvailableAppoinmentForSalons(salon_id,(err, results) => {
    //     if(err){
    //         console.log(err);
    //         return res.status(500).json({
    //             success: 0,
    //             message: "Database connection error"
    //         });
    //     }

    //     return res.status(200).json({
    //         success: 1,
    //         data: results
    //     });
    // });
  },

  cancelAppoinment: (req, res) => {
    const body = req.body;
    console.log(req.body);

    cancelAppoinment(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (typeof results === "string") {
        return res.status(400).json({
          success: 0,
          message: results,
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getCancelAppoinment: (req, res) => {
    const salon_id = req.params.salon_id;
    getCancelAppoinment(salon_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  resheduleAppoinment: (req, res) => {
    const body = req.body;
    console.log(req.body);

    resheduleAppoinment(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      // if (typeof results === 'string') {
      //     return res.status(400).json({
      //       success: 0,
      //       message: results
      //     });
      //   }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getAvailableAppoinmentForSalons: (req, res) => {
    const salon_id = req.params.salon_id;

    getAvailableAppoinmentForSalons(salon_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getCompletedAppoinmentForSalons: (req, res) => {
    const salon_id = req.params.salon_id;

    getCompletedAppoinmentForSalons(salon_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  MarkAsCompleted: (req, res) => {
    const body = req.body;

    MarkAsCompleted(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      // if (typeof results === 'string') {
      //     return res.status(400).json({
      //       success: 0,
      //       message: results
      //     });
      //   }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  //for customer - get completed appoinments
  getCompletedAppoinmentForCustomer: (req, res) => {
    const customer_id = req.params.customer_id;
    getCompletedAppoinmentForCustomer(customer_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
