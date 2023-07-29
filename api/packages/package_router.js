const {
  addPackage,
  addSalonType,
  getPackages,
  packageUpdate,
} = require("./package_controller");
const router = require("express").Router();

router.post("/", addPackage);
router.patch("/", packageUpdate);
router.post("/salonType", addSalonType);
router.get("/:salon_id", getPackages);

module.exports = router;
