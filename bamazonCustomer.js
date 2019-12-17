var mysql = require('mysql');
var Table = require('table');
var inquirer = require('inquirer');
//---------------------------------------------------------------
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpassword',
    database: 'bamazon'
});
//---------------------------------------------------------------
connection.connect(function (err) {
    if (err) {
        console.log('Error connecting');
        throw err;
    }
});
//---------------------------------------------------------------
 var displayForUser = function () {
    var display = new displayTable();
    connection.query('SELECT * FROM products', function (err, results) {
        display.displayInventoryTable(results);
        purchaseItem();
    });
 }
//---------------------------------------------------------------
inquirer.prompt([{
    name: "id",
    type: "input",
    message: "Product ID: ",

},
{
    name: "quantity",
    type: "input",
    message: "Quantity: ",

}])

    .then(function (answer) {

        console.log('Buy: ' + answer.quantity + ' ' + res[0].ProductName + ' ' + res[0].DepartmentName + ' at $' + res[0].Price + ' each'
        );
        if (res[0].StockQuantity >= answer.quantity) {
            var itemQuantity = res[0].StockQuantity - answer.quantity;
            connection.query("Refresh", [
                {
                    StockQuantity: itemQuantity
                }, {
                    ItemID: answer.id
                }], function (err, res) {
                });
            var cost = res[0].Price * answer.quantity;
            console.log('Total: $' + cost.toFixed(2));
            customerPrompt();

        }
        else {
            customerPrompt();
        }
    });
//---------------------------------------------------------------
var customerPrompt = function () {
    inquirer.prompt({
        name: "action",
        type: "list",

        message: " Would like to continue shopping?",
        choices: ["Yes", "No"]

    }).then(function (answer) {
        switch (answer.action) {
            case 'Yes':
                displayForUser();
                break;

            case 'No':
                connection.end();
                break;
        }
    })
};

customerPrompt();