//1st Portion
var http = require('http');
var express = require('express');
var app = express();

//2nd Portion
app.get('/', function (req, res) {
	res.sendFile(__dirname + "/" + "index.html" );
	console.log("Page Sent");
});

//3rd Portion
var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server listening at http://%s:%s", host, port);
});

//4th Portion
app.get('/signUp', function (req, res) {
	var arrivedUname=req.query.uname;
	var arrivedPword=req.query.pword;
	console.log("Arrived Username is %s and Password is %s ",arrivedUname,arrivedPword);
	res.write("Entered Username is "+arrivedUname+" Password is "+arrivedPword);
	res.end();
});
//http://localhost:8081/check?uname=gajen007&pword=16121987
app.get('/check', function (req, res) {
	var arrivedUname=req.query.uname;
	var arrivedPword=req.query.pword;
	console.log("Arrived Username is %s and Password is %s ",arrivedUname,arrivedPword);
	res.write("Entered Username is "+arrivedUname+" Password is "+arrivedPword);
	res.end();
});