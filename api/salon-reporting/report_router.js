const {
  getDashboardDetails,
  Last7dayRevenue,
  Last7dayTotalRevenue,
  Last30dayTotalRevenue,
  Last90dayTotalRevenue,
  Last4WeekRevenue,
  Last3MonthRevenue,
  GetRepeatedCustomerReports,
  PackageReport,
  AddAdminRevenue,
} = require("./report_controller");
const router = require("express").Router();

//router.post('/', addPackage);

router.get("/Last7dayRevenue/:salon_id", Last7dayRevenue);
router.get("/:salon_id", getDashboardDetails);
router.get("/Last4WeekRevenue/:salon_id", Last4WeekRevenue);
router.get("/Last3MonthRevenue/:salon_id", Last3MonthRevenue);
router.get("/Last7dayTotalRevenue/:salon_id", Last7dayTotalRevenue);
router.get("/Last30dayTotalRevenue/:salon_id", Last30dayTotalRevenue);
router.get("/Last90dayTotalRevenue/:salon_id", Last90dayTotalRevenue);
router.get("/GetRepeatedCustomerReports/:salon_id", GetRepeatedCustomerReports);
router.get("/PackageReport/:salon_id", PackageReport);
router.post("/AddAdminRevenue", AddAdminRevenue);

module.exports = router;
