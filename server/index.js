const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/route.js');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('db connected'));

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log(`Server is running at port: ${4000}`))
