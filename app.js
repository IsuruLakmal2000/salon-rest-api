require('dotenv').config();
const express = require('express');

const app = express();
const salonRouter = require('./api/salons/salon_router');
const packageRouter = require('./api/packages/package_router');
const customerRouter = require('./api/customers/customer_router');
const customerRouter = require('./api/feedbacks/feedback_router');
const port = process.env.PORT || 3000;
//const port =  3000;
app.use(express.json());

app.use('/api/salons', salonRouter);
app.use('/api/packages', packageRouter);
app.use('/api/customers', customerRouter);
app.use('/api/feedbacks', feedbackRouter);


app.listen(port, () => {
    console.log('Server up and running on PORT: ', port);
});
// app.listen(port, () => {
//     console.log('Server up and running on PORT: ', port);
// });

module.exports = app;
//https://blade-salon-app.herokuapp.com/ | https://git.heroku.com/blade-salon-app.git

//new heroku api url -https://git.heroku.com/dry-shelf-23479.git