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


module.exports = router;