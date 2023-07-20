const pool = require("../../config/database");

module.exports = {
  makeAppoinment: (data, callBack) => {
    const {
      salon_id,
      customer_id,
      selectedPackage_id,
      date,
      day,
      time,
      status,
      employee_id,
    } = data;
    // const preferred_date = date.toISOString().slice(0, 10);
    // const preferred_time_slot = time.slice(0, 5);

    pool.query(
      "SELECT * FROM appoinment WHERE date = ? AND time = ? AND salon_id = ? and customer_id=?",
      [date, time, salon_id, customer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        if (results.length > 0) {
          return callBack(
            null,
            "An appointment already exists for the selected date and time at the selected salon."
          );
        } else {
          pool.query(
            "SELECT booked_slot FROM appoinment WHERE date = ? AND time = ? AND salon_id = ? ORDER BY booked_slot desc",
            [date, time, salon_id],

            (error, results, fields) => {
              if (error) {
                return callBack(error);
              }
              const booked_slot =
                results.length > 0 ? results[0].booked_slot : 0;
              pool.query(
                "SELECT service_points FROM salon WHERE salon_id = ?",
                [salon_id],
                (error, results, fields) => {
                  if (error) {
                    console.log("error :" + error);
                    return callBack(error);
                  }
                  const max_appointments = results[0].service_points;
                  console.log("max_appointments :" + max_appointments);
                  console.log("booked slot :" + booked_slot);
                  //return callBack(null, results);
                  //const available_slots = results.length > 0 ? results[0].available_slots : max_appointments;
                  if (booked_slot < max_appointments) {
                    const new_available_slots = booked_slot + 1;
                    pool.query(
                      "INSERT INTO appoinment (salon_id, customer_id, selectedPackage_id, date,day, time,status, booked_slot,employee_id) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)",
                      [
                        salon_id,
                        customer_id,
                        selectedPackage_id,
                        date,
                        day,
                        time,
                        status,
                        new_available_slots,
                        employee_id,
                      ],
                      (error, results, fields) => {
                        if (error) {
                          return callBack(error);
                        }
                        return callBack(null, results);
                      }
                    );
                  } else {
                    return callBack(
                      null,
                      "The selected time slot is full. The maximum number of allowed appointments by salon is " +
                        max_appointments +
                        ". Please choose a different time slot."
                    );
                  }
                }
              );
            }
          );
        }
      }
    );
  },

  checkAvailability: (data, callBack) => {
    const { date, salonId } = data;
    console.log("date :" + date);
    console.log("salonId :" + salonId);
    pool.query(
      "SELECT time, COUNT(*) AS count FROM appoinment WHERE date = ? AND salon_id = ? GROUP BY time",
      [date, salonId],
      (error, results, fields) => {
        if (error) {
          console.error(error);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }

        return callBack(null, results);
      }
    );
  },
  getServicePoint: (salonId, callBack) => {
    pool.query(
      "select service_points from salon where salon_id=?",
      [salonId],
      (error, results, fields) => {
        if (error) {
          console.error(error);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }

        return callBack(null, results);
      }
    );
  },
  getOngoingAppoinmentsDetails: (customer_id, callBack) => {
    pool.query(
      'SELECT appoinment.appoinment_id, appoinment.salon_id, appoinment.date, salon.salon_name, appoinment.time, appoinment.day, package.package_name FROM appoinment JOIN package ON appoinment.selectedPackage_id = package.package_id JOIN salon ON appoinment.salon_id = salon.salon_id WHERE appoinment.customer_id = ? and appoinment.status="ongoing"',
      [customer_id],
      (error, results, fields) => {
        if (error) {
          console.error(error);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }

        return callBack(null, results);
      }
    );
  },

  cancelAppoinment: (data, callBack) => {
    pool.query(
      "update appoinment set status = ? where appoinment_id=?",
      [data.status, data.appoinment_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getCancelAppoinment: (salon_id, callBack) => {
    pool.query(
      "SELECT appoinment.appoinment_id, appoinment.date,  appoinment.time,  customer.customer_name,  package.package_name,package.package_price FROM appoinment JOIN customer ON appoinment.customer_id = customer.customer_id JOIN package ON appoinment.selectedPackage_id = package.package_id WHERE   appoinment.salon_id = ? AND appoinment.status = 'cancelled'",
      [salon_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  resheduleAppoinment: (data, callBack) => {
    pool.query(
      "update appoinment set date = ?,time = ?,day=? where appoinment_id=?",
      [data.date, data.time, data.day, data.appoinment_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getAvailableAppoinmentForSalons: (salon_id, callBack) => {
    pool.query(
      'SELECT appoinment.appoinment_id, appoinment.date,  appoinment.time,  customer.customer_name,  package.package_name,package.package_price FROM appoinment JOIN customer ON appoinment.customer_id = customer.customer_id JOIN package ON appoinment.selectedPackage_id = package.package_id WHERE   appoinment.salon_id = ? AND appoinment.status = "ongoing"',
      [salon_id],
      (error, results, fields) => {
        if (error) {
          console.error(error);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }

        return callBack(null, results);
      }
    );
  },
  getCompletedAppoinmentForSalons: (salon_id, callBack) => {
    pool.query(
      'SELECT appoinment.appoinment_id, appoinment.date,  appoinment.time,  customer.customer_name,  package.package_name,package.package_price FROM appoinment JOIN customer ON appoinment.customer_id = customer.customer_id JOIN package ON appoinment.selectedPackage_id = package.package_id WHERE   appoinment.salon_id = ? AND appoinment.status = "completed" limit 6',
      [salon_id],
      (error, results, fields) => {
        if (error) {
          console.error(error);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }

        return callBack(null, results);
      }
    );
  },

  MarkAsCompleted: (data, callBack) => {
    pool.query(
      "update appoinment set status = ? where appoinment_id=?",
      [data.status, data.appoinment_id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
