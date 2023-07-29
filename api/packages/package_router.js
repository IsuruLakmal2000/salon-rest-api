const {
  addPackage,
  addSalonType,
  getPackages,
  packageUpdate,
  packageDeleteById,
} = require("./package_controller");
const router = require("express").Router();

router.post("/", addPackage);
router.patch("/", packageUpdate);
router.post("/salonType", addSalonType);
router.get("/:salon_id", getPackages);
router.delete("/:package_id", packageDeleteById);

module.exports = router;
