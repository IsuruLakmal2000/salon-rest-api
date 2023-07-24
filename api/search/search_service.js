const pool = require("../../config/database");

module.exports = {
  searchByKeyword: (keyword, callback) => {
    pool.query(
      `SELECT salon_name FROM salon WHERE salon_name LIKE '%${keyword}%'`,
      [],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
