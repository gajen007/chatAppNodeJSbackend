var http = require('http');
var express = require('express');
var app = express();

var multer = require('multer');
var upload = multer();
app.use(upload.array()); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

var cors = require('cors');
app.use(cors());

var mysql = require('mysql');

var md5 = require('md5');

var con = mysql.createConnection({host:"localhost",user:"phpmyadmin",password:"gajen",database:"codersChat"});

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server listening at http://%s:%s", host, port);
    /*
    con.connect(function(err) {
        if (err) { throw err; }
        else{
            console.log("Database is connected!");
        }
    });
    */
});

app.post('/signup', function (req, res) {
    if(req.body.unToServer==null||req.body.pwToServer==null||req.body.emailToServer==null||req.body.unToServer==""||req.body.pwToServer==""||req.body.emailToServer==""){
     res.json({message:"Insufficient Data! Please try again...",result:false}); 
 }
 else{
    con.connect(function(err) { if (err) { throw err; } else{ console.log("Connected!"); } });
    var existed=false;
    con.query("SELECT * FROM users WHERE email='"+req.body.emailToServer+"'", function (err1, rows, columns) { if (rows.length>0) { existed=true; res.json({message:"This emailis already in use. Please try another...",result:false}); } });
    if (!existed) {
        con.query("INSERT INTO users (username,email,password) VALUES ('"+req.body.unToServer+"','"+req.body.emailToServer+"','"+md5(req.body.pwToServer)+"')", function (err2, result) {
            if (result) { res.json({message:"Signed up successfully!",result:true}); }
            else{ throw err2; res.json({message:"Database Error! Please try again...",result:true}); }
        });  
    }
}
});