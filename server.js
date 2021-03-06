//Dependencies

var express = require("express");
var bodyParser = require("body-parser");

//Set up the Express App

var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTER

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});