var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon'
});

connection.connect(function(err){
	if (err) throw err;
	console.log('connected as id: ' + connection.threadId)
});


function start() {
	connection.query("SELECT * FROM products", function(err, res) {
    inquirer.prompt([{

            type: "input",
            name: "itemId",
            message: "Please enter the ID number from 1-10 of the item you wish to purchase.",
        },
        {
            type: "input",
            name: "stock",
            message: "How many of these items would you like to purchase?",
		}
	]).then(function(result){
		var item = input.itemId;
		var quantity = input.stock;
		connection.query('SELECT * FROM products WHERE id = ?', [input.itemId], function(err, res){
			if(input.stock > stock){
				console.log('We currently do not have enough in stock. Please order less.');
			}
			else{
				console.log('The total is $' + (price * answer.stock));
			}
		});

start()