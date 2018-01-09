var express = require("express");
var app     = express();
var path    = require("path");
app.use(express.static(__dirname));
var PORT = process.env.PORT || 3000
app.get('/',function(req,res){
    res.sendfile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});


app.listen(PORT);
console.log(PORT)