const {
  getEmployeeBySalonId,
  RemoveEmployeeById,
  addEmployee,
} = require("./employee_service");

module.exports = {
  addEmployee: (req, res) => {
    const body = req.body;

    addEmployee(body, (err, results) => {
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

  getEmployees: (req, res) => {
    const salonId = req.params.salon_id;
    getEmployeeBySalonId(salonId, (err, results) => {
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

  RemoveEmployeeById: (req, res) => {
    const employee_id = req.params.employee_id;
    RemoveEmployeeById(employee_id, (err, results) => {
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
};
