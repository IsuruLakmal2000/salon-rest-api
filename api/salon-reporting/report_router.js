const { getDashboardDetails } = require("./report_controller");
const router = require("express").Router();

//router.post('/', addPackage);

router.get("/:salon_id", getDashboardDetails);

module.exports = router;
