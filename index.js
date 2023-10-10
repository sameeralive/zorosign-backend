const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(cors());

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/students', require('./src/routes/studentRoutes'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});