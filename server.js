var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view

app.get('/', function(req, res) {
    res.render("index");
})

app.listen(3030, function(){
    console.log('its the year 3030');
})