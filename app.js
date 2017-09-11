var express = require('express');
var async = require('async');
var request = require('request');
var app = express();

//your routes here
app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.get('/about', function(req,res){
  var query = {
        "type": "select",
        "args": {
            "table": "posts",
            "columns": [
                "*"
            ]
        }
    };
    var vm = res;
    request.post('https://data.assist79.hasura-app.io/v1/query',{json: true, body: query}, (err, res, body) => {
        //console.log(res);
        vm.send(body);
    });
  //res.send("ABOUT");
});
app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});