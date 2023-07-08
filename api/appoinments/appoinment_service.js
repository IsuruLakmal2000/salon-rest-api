const pool = require('../../config/database'); 

module.exports = {
    makeAppoinment : (data, callBack) => {


        const { salon_id, customer_id, selectedPackage_id, date, day, time, status } = data;
        // const preferred_date = date.toISOString().slice(0, 10);
        // const preferred_time_slot = time.slice(0, 5);

        pool.query('SELECT booked_slot FROM appoinment WHERE date = ? AND time = ? AND salon_id = ? ORDER BY booked_slot desc',
        [
            date, 
            time, 
            salon_id,
        ],

     (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      const booked_slot = results.length > 0 ? results[0].booked_slot : 0;
      pool.query('SELECT service_points FROM salon WHERE salon_id = ?', [salon_id], (error, results, fields) => {
        if (error) {
            console.log("error :"+error);
          return callBack(error);
        }
        const max_appointments = results[0].service_points;
        console.log("max_appointments :"+max_appointments);
        console.log("booked slot :"+booked_slot);
        //return callBack(null, results);
       //const available_slots = results.length > 0 ? results[0].available_slots : max_appointments;
        if (booked_slot < max_appointments) {
          const new_available_slots = booked_slot + 1;
          pool.query('INSERT INTO appoinment (salon_id, customer_id, selectedPackage_id, date,day, time,status, booked_slot) VALUES (?, ?, ?, ?, ?, ?, ?,?)', [salon_id, customer_id, selectedPackage_id, date, day,time,status, new_available_slots ], (error, results, fields) => {
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








        // const availableSlotResult =  pool.query('select available_slot from appoinment where date=? AND time=? AND salon_id=?',
        // [data.date,data.time,data.salon_id],);
        //     console.log("available slot :"+availableSlotResult);
        // const maxAppoinmentResult =  pool.query('select service_points from salon where salon_id=?',
        // [data.salon_id],);
        // console.log("max appoinmet :"+[maxAppoinmentResult[0].service_points]);
        //  const maxAppoinment = maxAppoinmentResult[0].service_points;

        //  if(availableSlotResult.length === 0 || availableSlotResult[0].available_slot < maxAppoinment){
        //     console.log("inside if");
        // }





        // pool.query(
        //     'insert into appoinment(salon_id,customer_id,selectedPackage_id,date,day,time,status) values(?,?,?,?,?,?,?)',
        //     [
        //         data.salon_id,
        //         data.customer_id,
        //         data.selectedPackage_id,
        //         data.date,
        //         data.day,
        //         data.time,
        //         data.status
               
        //     ],
        //     (error, results, fields) => {
        //         if(error){
        //             return callBack(error);
        //         }
        //         return callBack(null, results);
        //     }
        // )
    },

    checkAvailability : (data,callBack)=>{
        const { date, salonId } = data;
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
    }

}