const express = require("express");
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/', require('./routes/navRoute'));


app.listen(port, () => {
    console.log(`Servidor NAV a la escucha del puerto ${port}`);
});