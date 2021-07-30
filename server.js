const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);
// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
 });

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(()=>{
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});});