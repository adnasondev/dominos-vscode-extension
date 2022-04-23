const vscode = require('vscode')
import { Order, Customer, Item, Payment, NearbyStores, Tracking } from 'dominos';

// runs once when extension is activated
const activate = context => {
	// command handler to place an order
	let disposable = vscode.commands.registerCommand('dominos-pizza-order.placeOrder', async () => {
		
		// get customer
		let customer = await getCustomer()

		// get closes store
		let store = await getClosestStore(customer)

		// get order items
		let items = await getItems()

		// get order
		let order = await getOrder(customer, items)

		// get payment
		let payment = await getPayment()

		// place order
		order.place()

		vscode.window.showInformationMessage('TEST!')
	});

	context.subscriptions.push(disposable)
}

// returns the customer
const getCustomer = async () => {

}

// returns the closest store
const getClosestStore = async customer => {

}

// returns the items
const getItems = async () => {

}

// returns the order
const getOrder = async (items) => {
	// add items to order
	items.forEach(item => {
		addItemToOrder(item)
	});
}

// adds item to order
const addItemToOrder = () => {

}

// returns the payment
const getPayment = () => {

}

const deactivate = () => {}

module.exports = {
	activate,
	deactivate
}
