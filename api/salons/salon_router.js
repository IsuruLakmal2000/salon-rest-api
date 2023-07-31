const {
  createSalon,
  getSalon,
  updateSalon,
  login,
  getSalonById,
  getSalonsByDistance,
} = require("./salon_controller");
const router = require("express").Router();

router.post("/", createSalon);
router.get("/", getSalon);
router.get("/getSalonsByDistance", getSalonsByDistance);
router.get("/:salon_id", getSalonById);
router.patch("/", updateSalon);
router.post("/login", login);
//console("salon router");

module.exports = router;
