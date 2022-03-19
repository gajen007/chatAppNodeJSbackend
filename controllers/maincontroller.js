module.exports.signupcontroller = function(un, em, pw) {
    if(un==null||pw==null||em==null||un==""||pw==""||em==""){
        return {message:"Insufficient Data! Please try again...",result:false};
    }
    else{
        var main_model = require("../models/mdl_main.js");
        return main_model.signupmodel(un,em,pw);
    }
}