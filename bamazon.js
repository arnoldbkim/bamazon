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

function products() {
	var query = 'SELECT * FROM products'
	connection.query(query, function(err, res) {
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
		}
		promptUserPurchase();
	  })
  };

function promptUserPurchase() {

	
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			filter: Number,
			validate: function(value) {
                if (isNaN(value) === false) {
                return true;
                }
                return false;
            }
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			filter: Number,
			
		}
	]).then(function(answer) {
		var query = 'SELECT product_name, price, stock_quantity FROM products WHERE ?' + answer.quantity;
        connection.query(query, function(err, res) {
          if (answer.quantity <= res) {
            for (var i = 0; i < res.length; i++) {
                console.log("We currently have " + res[i].stock_quantity + " " + res[i].product_name + ".");
                console.log("Thank you for your patronage! Your order of "+ res[i].stock_quantity + " " + res[i].product_name + " is now being processed.");
              }
            } else {
              console.log("Not enough of this product in stock.");
            }
           
        });
	});	

};
products();