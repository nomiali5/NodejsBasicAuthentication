var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
//Used for routes that must be authenticated.
// function isAuthenticated (req, res, next) {
//     // if user is authenticated in the session, call the next() to call the next request handler 
//     // Passport adds this method to request object. A middleware is allowed to add properties to
//     // request and response objects
//     //allow all get request methods
//     if(req.method === "GET"){
// 		console.log("unauthenticated");	
//         return next();
//     }
//     if (req.isAuthenticated()){
// 		console.log("authenticated");
//         return next();
//     }
//     console.log(req.user);
// 	 return next();
//     // if the user is not authenticated then redirect him to the login page
//     // return res.redirect('login');
// };

//Register the authentication middleware
//router.use('/', isAuthenticated);

router.get('/',function(req,res,next){	
	res.render('Starter',{title:"Super App"});	
});

module.exports = router;