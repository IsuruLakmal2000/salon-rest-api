const {
  addPackage,
  addSalonType,
  getPackagesBySalonId,
  packageUpdate,
  packageDeleteById,
} = require("./package_service");

module.exports = {
  addPackage: (req, res) => {
    const body = req.body;

    addPackage(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  addSalonType: (req, res) => {
    const body = req.body;

    addSalonType(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getPackages: (req, res) => {
    const salonId = req.params.salon_id;
    getPackagesBySalonId(salonId, (err, results) => {
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

  packageUpdate: (req, res) => {
    const body = req.body;

    packageUpdate(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  packageDeleteById: (req, res) => {
    const package_id = req.params.package_id;

    packageDeleteById(package_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
