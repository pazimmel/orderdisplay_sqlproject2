var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sql_project2';

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));

router.route('/names')
    .get(function(req,res){
        var names = [];
        pg.connect(connectionString, function(err, client, done){
            var query = client.query("SELECT users.name, users.id FROM users");
            query.on('row', function(row){
                names.push(row);
            });
            query.on('end', function(){
                client.end();
                return res.json(names);
            });
            if (err) console.log("Error:", err);
        });
    });

router.route('/address')
    .get(function(req,res){
        var id = req.query.id;
        var results = [];
        pg.connect(connectionString, function(err, client, done){
            var query = client.query("SELECT users.name, addresses.address_type, addresses.address_street, " +
                "addresses.address_city, addresses.address_state, addresses.address_zip " +
                "FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = '"+id+"';");
            query.on('row', function(row){
                results.push(row);
            });
            query.on('end', function(){
                client.end();
                return res.json(results);
            });
            if (err) console.log("Error:", err);
        });
//        //console.log("hi");
//        //res.send("server's workin.")
    });

module.exports = router;