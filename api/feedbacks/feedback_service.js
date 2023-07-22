const pool = require("../../config/database");

module.exports = {
  getFeedbackBySalonId: (salonId, callBack) => {
    pool.query(
      //'select * from feedback where salon_id=?',

      "SELECT feedback.feedback_id, feedback.feedback,feedback.rating_star, customer.customer_name FROM feedback JOIN customer ON feedback.customer_id = customer.customer_id WHERE feedback.salon_id = ?",

      [salonId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  putFeedback: (data, callBack) => {
    pool.query(
      "insert into feedback(feedback,rating_star,customer_id,salon_id) values(?,?,?,?)",
      [data.feedback, data.rating_star, data.customer_id, data.salon_id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  putFeedbackIdOnAppoinment: (id, appoinment_id, callBack) => {
    console.log("inside serivce" + appoinment_id);
    pool.query(
      "update appoinment set feedback_id = ? where appoinment_id=?",
      [id, appoinment_id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
