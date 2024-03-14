require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');



app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json())
// Route-handler untuk API
const routes = require('./routes');

// Pasang rute utama dengan awalan '/api/v1'
app.use('/api/v1', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log('Server Run On Port ', PORT)
})
module.exports = app;