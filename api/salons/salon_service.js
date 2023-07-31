const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into salon(salon_name,owner_name,email,phone,address,password,latitude,longitude) values(?,?,?,?,?,?,?,?)",
      [
        data.salonName,
        data.ownerName,
        data.email,
        data.pno,
        data.address,
        data.password,
        data.latitude,
        data.longitude,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getSalon: (callback) => {
    pool.query("select * from salon", [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  // getSalonsByDistance: (callback) => {
  //   pool.query(
  //     "select * from salon",

  //     [],
  //     (error, results, fields) => {
  //       if (error) {
  //         return callback(error);
  //       }
  //       return callback(null, results);
  //     }
  //   );
  // },
  updateSalon: (data, callback) => {
    pool.query(
      "update salon set description=?,service_points=? where salon_id=?",
      [data.description, data.service_points, data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getUserByEmail: (email, callBack) => {
    console.log(email);
    pool.query(
      "select * from salon where email=?",
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getSalonById: (salon_id, callback) => {
    pool.query(
      "select * from salon where salon_id=?",
      [salon_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  /// ---------------------get salon by distance--------------------

  getSalonsByDistance: (userLatitude, userLongitude, callback) => {
    pool.query("SELECT * FROM salon", [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }

      const salonList = results;

      const sortedSalons = salonList
        .map((salon) => {
          const distance = getDistanceFromLatLonInKm(
            userLatitude,
            userLongitude,
            salon.latitude,
            salon.longitude
          );
          return { ...salon, distance };
        })
        .sort((a, b) => a.distance - b.distance);

      return callback(null, sortedSalons);
    });
  },
};

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
