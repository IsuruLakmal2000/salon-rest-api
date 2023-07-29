const pool = require("../../config/database");

module.exports = {
  addPackage: (data, callBack) => {
    pool.query(
      "insert into package(package_name,package_price,salon_id) values(?,?,?)",
      [data.packageName, data.packagePrice, data.salon_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  addSalonType: (data, callBack) => {
    //const optionsJson = JSON.stringify(data.selectedOptions);
    pool.query(
      "UPDATE salon SET salon_type = ?, image_url = ? WHERE salon_id = ?",
      [data.selectedOptions, data.image_url, data.salon_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getPackagesBySalonId: (salonId, callBack) => {
    pool.query(
      "SELECT package_id,package_name,package_price FROM package WHERE salon_id = ?",
      [salonId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  packageUpdate: (data, callback) => {
    pool.query(
      "update package set package_name=?,package_price=? where package_id=?",
      [data.name, data.price, data.package_id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  packageDeleteById: (package_id, callback) => {
    pool.query(
      "DELETE FROM package WHERE package_id = ?",
      [package_id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
