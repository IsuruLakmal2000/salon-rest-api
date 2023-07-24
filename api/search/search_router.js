const { searchByKeyword } = require("./search_controller");
const router = require("express").Router();

router.get("/searchBySalonName/:keyword", searchByKeyword);

module.exports = router;
