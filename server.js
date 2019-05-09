var express = require("express");
 
var app = express();
 
app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js/'));
app.use('/bootstrap', express.static(__dirname + '/public/bootstrap/'));
app.use('/jquery', express.static(__dirname + '/public/jquery'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/owlcarousel', express.static(__dirname + '/public/owlcarousel/'));
app.use('/lightbox', express.static(__dirname + '/public/lightbox/'));

app.use('/img', express.static(__dirname + '/public/img'));

app.get('/about', function(req,res){
 res.sendfile(__dirname + '/public/about.html');
}); 
app.get('/portofolio', function(req,res){
    res.sendfile(__dirname + '/public/portofolio.html');
}); 
app.get('/contact', function(req,res){
    res.sendfile(__dirname + '/public/contact.html');
}); 

app.get('/cek', function(req,res){
    res.sendfile(__dirname + '/public/cek.html');
}); 
 
var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});