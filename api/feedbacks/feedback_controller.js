const {
  getFeedbackBySalonId,
  putFeedback,
  putFeedbackIdOnAppoinment,
} = require("./feedback_service");

module.exports = {
  getFeedback: (req, res) => {
    console.log(req.params.salon_id);
    const salonId = req.params.salon_id;
    console.log(salonId);
    getFeedbackBySalonId(salonId, (err, results) => {
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

  putFeedback: (req, res) => {
    const body = req.body;
    putFeedback(body, (err, results) => {
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
