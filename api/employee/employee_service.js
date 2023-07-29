const pool = require("../../config/database");

module.exports = {
  addEmployee: (data, callBack) => {
    pool.query(
      "insert into employee(employee_name,employee_id,salon_id) values(?,?,?)",
      [data.employee_name, data.employee_id, data.salon_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getEmployeeBySalonId: (salonId, callBack) => {
    pool.query(
      "SELECT employee_name,employee_id,image_url FROM employee WHERE salon_id = ?",
      [salonId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  RemoveEmployeeById: (emloyee_id, callBack) => {
    pool.query(
      "Delete FROM employee WHERE employee_id = ?",
      [emloyee_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
