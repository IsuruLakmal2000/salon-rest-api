const { getEmployees, RemoveEmployeeById } = require("./employee_controller");
const router = require("express").Router();

//router.post('/', addPackage);

router.get("/:salon_id", getEmployees);
router.delete("/:employee_id", RemoveEmployeeById);

module.exports = router;
