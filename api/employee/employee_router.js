const {
  getEmployees,
  RemoveEmployeeById,
  addEmployee,
} = require("./employee_controller");
const router = require("express").Router();

//router.post('/', addPackage);

router.get("/:salon_id", getEmployees);
router.delete("/:employee_id", RemoveEmployeeById);
router.post("/:employee_id", addEmployee);

module.exports = router;
