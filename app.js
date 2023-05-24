require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/users/user_router');

app.use(express.json());

app.use('/api/users', userRouter);


app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running on PORT: ', process.env.APP_PORT);
});

module.exports = app;
//https://blade-salon-app.herokuapp.com/ | https://git.heroku.com/blade-salon-app.git