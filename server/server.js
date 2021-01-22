const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use(cors());

app.listen(PORT, console.log('listening at localhost:', PORT));