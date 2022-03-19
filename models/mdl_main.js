module.exports.signupmodel = function(uname, email, pword) {
	var mysql = require('mysql');
	var md5 = require('md5');
	var con = mysql.createConnection({host:"localhost",user:"phpmyadmin",password:"gajen",database:"codersChat"});
	
	con.query("SELECT * FROM users WHERE email='"+email+"'", function (err, rows, columns) {
		if (err) { throw err; }
	});

	//We should also use con.release() instead of con.end() since we are using a pool:

	function exec(query, data, callback) {
		con.query(query, data, function(err, results) {
        	if(err) {
            	return callback(err);
        	}
        	callback(null, results);
    	});
	}

	return exec("SELECT * FROM ?? WHERE email=?",['users',email],(err,output)=>{ console.log(output); });
//?? is for identifiers. ? is for values.

	/*
	con.query("INSERT INTO users (username,email,password) VALUES ('"+uname+"','"+email+"','"+md5(pword)+"')", function (err2, result) {
		if (err2) { throw err;  }
		if (result.serverStatus==2) {
			//return {message:"Signed up successfully!",result:true};
		}
		else{
			throw err2;
			
			//return {message:"Database Error! Please try again...",result:false};
		}
	});
	*/
}