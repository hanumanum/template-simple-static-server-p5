var express = require('express');
var path = require('path');
var app = express();


// Define the port to run on
app.set('port', 4444);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/p5', express.static(path.join(__dirname, '/node_modules/p5/')));


// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});
