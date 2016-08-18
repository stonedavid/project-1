var express = require("express");
const url = require('url');

var app = express();
var natTime
, nixTime
, dateObj
, yearString
, dateString
, monthString
, returnObj;

function unixText(str) {
    return (!isNaN(str) && str.length > 0);
}

function parseNatural(str) {
    var tokens = str.split(" ");
    var monthString = tokens[0];
    var dateString = tokens[1].slice(-1) === "," ? tokens[1].slice(0,-1) : tokens[1];
    var yearString = tokens[2];
}

function createReturnObject(d) {
    return { 
        unix: (d.getTime() / 1000).toString(),
        natural : d.toDateString()
    };
}

app.get('/*', function (req, res) {
    
  if (unixText(req.url.slice(1))) {
      returnObj = createReturnObject(new Date(Number(req.url.slice(1))*1000));
  } else {
      try {
        returnObj = createReturnObject(new Date(decodeURI(req.url.slice(1))));
      }
      catch(err) {
        console.log(decodeURI(req.url.slice(1)));
        returnObj = { unix: null, natural: null };
      }
    }
  res.end(JSON.stringify(returnObj));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});