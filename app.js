var express = require("express");
var app     = express();
var path    = require("path");
app.use(express.static(__dirname));

app.get('/',function(req,res){
    res.sendfile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});


app.listen(3000);

console.log("Running at Port 3000");