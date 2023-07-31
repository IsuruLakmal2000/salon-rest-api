const {
  createCustomer,
  getCustomer,
  updateCustomer,
  login,
  getCustomerById,
} = require("./customer_controller");
const router = require("express").Router();

router.post("/", createCustomer);
router.get("/", getCustomer);
router.get("/:customer_id", getCustomerById);
router.patch("/", updateCustomer);
router.post("/login", login);

module.exports = router;
