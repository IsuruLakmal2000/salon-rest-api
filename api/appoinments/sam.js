const makeAppointment = (data, callBack) => {
    const { salon_id, customer_id, selectedPackage_id, date, day, time, status } = data;
    const preferred_date = date.toISOString().slice(0, 10);
    const preferred_time_slot = time.slice(0, 5);
    pool.query('SELECT available_slots FROM appointments WHERE date = ? AND time = ? AND salon_id = ?',
     [preferred_date, 
        preferred_time_slot, 
        salon_id,
    ],

     (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      const available_slots = results.length > 0 ? results[0].available_slots : 0;
      pool.query('SELECT max_appointments FROM salons WHERE id = ?', [salon_id], (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        const max_appointments = results[0].max_appointments;
        if (available_slots < max_appointments) {
          const new_available_slots = available_slots + 1;
          pool.query('INSERT INTO appointments (salon_id, customer_id, selectedPackage_id, preferred_date, preferred_time_slot, available_slots, status) VALUES (?, ?, ?, ?, ?, ?, ?)', [salon_id, customer_id, selectedPackage_id, preferred_date, preferred_time_slot, new_available_slots, status], (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          });
        } else {
          return callBack(null,'The selected time slot is full. The maximum number of allowed appointments is ' + max_appointments + '. Please choose a different time slot.');
        }
      });
    });
  };


  //------------------------------

  router.get('/appointments', (req, res) => {
    const { date, salonId } = req.query;
  
    pool.query('SELECT time, COUNT(*) AS count FROM appointments WHERE date = ? AND salon_id = ? GROUP BY time', [date, salonId], (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({
          success: 0,
          message: 'Database connection error'
        });
      }
  
      return res.status(200).json(results);
    });
  });
  