var express = require('express');
var app = express();
var path = require('path');

var index = require('./routes/index');
var orderInfo = require('./routes/orderInfo');

app.set("port", process.env.PORT || 5000);

app.use('/data', orderInfo);
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port...", app.get("port"));
});