const { getFeedback, putFeedback } = require("./feedback_controller");
const router = require("express").Router();

router.get("/:salon_id", getFeedback);
router.post("/", putFeedback);
// router.post('/salonType',addSalonType);

module.exports = router;
