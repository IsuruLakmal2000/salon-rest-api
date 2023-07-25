const {
  getDashboardDetails,
  Last7dayRevenue,
  Last7dayTotalRevenue,
} = require("./report_controller");
const router = require("express").Router();

//router.post('/', addPackage);

router.get("/:salon_id", getDashboardDetails);
router.get("/Last7dayRevenue/:salon_id", Last7dayRevenue);
router.get("/Last7dayTotalRevenue/:salon_id", Last7dayTotalRevenue);

module.exports = router;
