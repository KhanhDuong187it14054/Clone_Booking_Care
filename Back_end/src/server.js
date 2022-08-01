import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import connectDB from './config/connectDB'

require('dotenv').config();
var morgan = require('morgan')

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

connectDB();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
