var convertJSON = './convertJSON'
const csvFilePath='sample.csv'
var csv = require("fast-csv");
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/csvdata', function (req, res) {
  const arrayofjson = [];
  csv
  .fromPath("sample.csv", {headers: true})
  .on("data", function(data){
    console.log(Object.keys(data));
    var jsonobj = {
      lat: Number(Object.values(data)[5]),
      lng: Number(Object.values(data)[4])
    }
    arrayofjson.push(jsonobj)
  })
  .on("end", function(){
    res.send(arrayofjson)
    console.log("done");
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
