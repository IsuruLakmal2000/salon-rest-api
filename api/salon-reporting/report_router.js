const { getDashboardDetails, Last7dayRevenue } = require("./report_controller");
const router = require("express").Router();

//router.post('/', addPackage);

router.get("/:salon_id", getDashboardDetails);
router.get("/Last7dayRevenue/:salon_id", Last7dayRevenue);

module.exports = router;
