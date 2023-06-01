require('dotenv').config();
const express = require('express');

const app = express();
const userRouter = require('./api/salons/salon_router');
const packageRouter = require('./api/packages/package_router');
const port = process.env.PORT || 3000;
//const port =  3000;
app.use(express.json());

app.use('/api/salons', userRouter);
app.use('/api/packages', packageRouter);


app.listen(port, () => {
    console.log('Server up and running on PORT: ', port);
});
// app.listen(port, () => {
//     console.log('Server up and running on PORT: ', port);
// });

module.exports = app;
//https://blade-salon-app.herokuapp.com/ | https://git.heroku.com/blade-salon-app.git

//new heroku api url -https://git.heroku.com/dry-shelf-23479.git