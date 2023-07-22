const pool = require("../../config/database");

module.exports = {
  getCompleted_appoinment_count: (salon_id, callback) => {
    pool.query(
      " SELECT COUNT(*) AS completed_appoinments FROM appoinment WHERE appoinment.salon_id = ? AND status = 'completed';",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  getTotalEarnings: (salon_id, callback) => {
    pool.query(
      "SELECT SUM(package.package_price) AS total_earnings FROM appoinment JOIN package ON appoinment.selectedPackage_id = package_id WHERE appoinment.salon_id = ? AND appoinment.status = 'completed';",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0].total_earnings);
      }
    );
  },
};
