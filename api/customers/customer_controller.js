const {
  create,
  getCustomer,
  updateCustomer,
  getUserByEmail,
  getCustomerById,
} = require("./customer_service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createCustomer: (req, res) => {
    const body = req.body;
    console.log(req.body);
    //-----------salon password encryption----------
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    //-----------
    create(body, (err, results) => {
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

  updateCustomer: (req, res) => {
    const body = req.body;
    updateCustomer(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update user",
        });
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  getCustomer: (req, res) => {
    getCustomer((err, results) => {
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
  getCustomerById: (req, res) => {
    const customer_id = req.params.customer_id;
    getCustomerById(customer_id, (err, results) => {
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

  login: (req, res) => {
    const { email, password } = req.body;
    getUserByEmail(email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Email doest not exists.Please try again ",
        });
      }
      const result = compareSync(password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
          result: results,
        });
      } else {
        console.log(result);
        console.log(password + "-" + results.password);
        return res.json({
          success: 0,
          message: "Invalid email or password.please try again",
        });
      }
    });
  },
};
