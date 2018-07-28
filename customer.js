// 5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.

// 6. The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.

const mysql = require('mysql')
const inquirer = require('inquirer')

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "EA033c39B7",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("------------------------------------------")
    queryitems()
});

function queryitems() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            var fancy = "Item ID: " + res[i].item_ID +
                "\nProduct: " + res[i].product_name +
                "\nDepartment: " + res[i].department_name +
                "\nPrice: $" + res[i].price +
                "\nQuantity: " + res[i].stock_quantity +
                "\n------------------------------------------"
            console.log(fancy);
        }
        start()
    });
}

function start() {
    inquirer.prompt([{
                type: 'input',
                message: 'Please enter the item ID you wish to purchase.',
                name: 'purchased'
            },
            {
                type: 'input',
                message: 'Enter the quantity of slected item.',
                name: 'amount'
            }
        ])
        .then(function (result) {
                const purchased = result.purchased;
                const amount = parseInt(result.amount)
                connection.query("SELECT * FROM products", function (err, res) {
                    if (res[purchased - 1].stock_quantity <= amount) {
                        console.log('Not enough stock! Try again.')
                    }
                    else{
                        connection.query("UPDATE products SET ? WHERE ?", [{
                                    stock_quantity: res[purchased - 1].stock_quantity - amount
                                },
                                {
                                    item_ID: purchased
                                }
                            ], function (err, resu) {
                                console.log("You Purchased: " + res[purchased - 1].product_name)
                                console.log("Quantity: " + amount + " totalling $" + ((res[purchased - 1].price * amount).toFixed(2)))
                            })
                        }
                });
            })
        }