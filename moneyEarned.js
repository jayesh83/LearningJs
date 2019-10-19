const msql = require('mysql');
const express = require('express');
const router = express.Router();


const pool  = msql.createPool({ //create connection
	connectionLimit: 100,
	host 	: 'localhost',
	user 	: 'root',
	password: '8347@MySql',
	database: 'atempdb'
});


router.post('/ru', (req, res) =>{
	setTimeout( () => {
	  pool.getConnection( (err, conn) => {
			if (err){
				console.log( 'error connecting: ', err.stack);
				return;	
			}
			 conn.query({
			 	sql: `INSERT INTO user(fname, type, dob, sex, phone1) values('${req.body.name}','e', '1990-02-19','${req.body.sex}',${req.body.phone1})`
			 },(error, results) => {
				if (error)
				  console.log('error querying:', error);
				console.log('results: ', results);		
			 });
	    });		
	},500);
	console.log('req body: ',req.body);
	res.send(req.body);
});

module.exports = router;