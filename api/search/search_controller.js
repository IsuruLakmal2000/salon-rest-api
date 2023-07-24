const { searchByKeyword } = require("./search_service");

module.exports = {
  searchByKeyword: (req, res) => {
    const keyword = req.params.keyword;
    searchByKeyword(keyword, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
