const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const token = require('./config');

app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use(cors());

const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const queryParams = {
  "query": "kites",
  "sort": "popular",
  "per_page": 5
};



imagesApi.searchImages(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(PORT, console.log('listening at localhost:', PORT));