const pool = require("../../config/database");

module.exports = {
  getCompleted_appoinment_count: (salon_id, callback) => {
    pool.query(
      " SELECT COUNT(*) AS completed_appoinments FROM appoinment WHERE appoinment.salon_id = ? AND (status = 'completed' or status = 'feedback-received');",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0].completed_appoinments);
      }
    );
  },

  getTotalEarnings: (salon_id, callback) => {
    pool.query(
      "SELECT SUM(package.package_price) AS total_earnings FROM appoinment JOIN package ON appoinment.selectedPackage_id = package_id WHERE appoinment.salon_id = ? AND (appoinment.status = 'completed'  or status = 'feedback-received');",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0].total_earnings);
      }
    );
  },

  getAvailableAppoinmentCount: (salon_id, callback) => {
    pool.query(
      " SELECT COUNT(*) AS available_appoinments FROM appoinment WHERE appoinment.salon_id = ? AND status = 'ongoing' ",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0].available_appoinments);
      }
    );
  },

  //--------------Revenue for the last 7 days---------------- bar cahrt
  Last7dayRevenue: (salon_id, callback) => {
    pool.query(
      "SELECT DATE(date) AS appoinment_date, SUM(package.package_price) AS revenue FROM appoinment INNER JOIN package ON appoinment.selectedPackage_id = package.package_id WHERE appoinment.salon_id = ? AND (appoinment.status = 'completed' OR appoinment.status = 'feedback-received') AND appoinment.date BETWEEN DATE_SUB(NOW(), INTERVAL 8 DAY) AND NOW() GROUP BY DATE(date) Order by  DATE(date);",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  Last4WeekRevenue: (salon_id, callback) => {
    pool.query(
      " SELECT CONCAT(DATE_FORMAT(DATE_ADD(MAKEDATE(LEFT(weeks.week_number, 4), RIGHT(weeks.week_number, 2)*7-6), INTERVAL 0 DAY), '%m/%d'), ' - ', DATE_FORMAT(DATE_ADD(MAKEDATE(LEFT(weeks.week_number, 4), RIGHT(weeks.week_number, 2)*7-6), INTERVAL 6 DAY), '%m/%d')) AS week_range,COALESCE(SUM(package.package_price), 0) AS revenue FROM (SELECT DISTINCT YEARWEEK(date) AS week_number FROM appoinment WHERE date >= DATE_SUB(NOW(), INTERVAL 4 WEEK)) AS weeks JOIN appoinment ON weeks.week_number = YEARWEEK(appoinment.date)INNER JOIN package ON appoinment.selectedPackage_id = package.package_id WHERE appoinment.salon_id = ? AND (appoinment.status = 'completed' OR appoinment.status = 'feedback-received' ) GROUP BY weeks.week_number ORDER BY weeks.week_number;",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  //--------------Total  Revenue for the last 7 days----------------Price Tag

  Last7dayTotalRevenue: (salon_id, callback) => {
    pool.query(
      " SELECT SUM(package.package_price) AS revenue FROM appoinment INNER JOIN package ON appoinment.selectedPackage_id = package.package_id  WHERE appoinment.salon_id = ? AND ( appoinment.status = 'completed' OR appoinment.status = 'feedback-received' ) AND appoinment.date BETWEEN DATE_SUB(NOW(), INTERVAL 8 DAY) AND NOW();",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  //--------------Revenue for the last 30 days---------------- price tag

  Last30dayTotalRevenue: (salon_id, callback) => {
    pool.query(
      "SELECT SUM(package.package_price) AS revenue FROM appoinment INNER JOIN package ON appoinment.selectedPackage_id = package.package_id  WHERE appoinment.salon_id = ? AND ( appoinment.status = 'completed' OR appoinment.status = 'feedback-received' ) AND appoinment.date BETWEEN DATE_SUB(NOW(), INTERVAL 31 DAY) AND NOW();",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  Last90dayTotalRevenue: (salon_id, callback) => {
    pool.query(
      "SELECT SUM(package.package_price) AS revenue FROM appoinment INNER JOIN package ON appoinment.selectedPackage_id = package.package_id  WHERE appoinment.salon_id = ? AND ( appoinment.status = 'completed' OR appoinment.status = 'feedback-received' ) AND appoinment.date BETWEEN DATE_SUB(NOW(), INTERVAL 91 DAY) AND NOW();",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
