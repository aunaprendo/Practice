

Failed: 8. addProduct({name: "FLOUR", quantity: 5}) should log flour quantity updated when an object having name equal to "flour" is found in the inventory array.

Failed: 10. addProduct({name: "FLOUR", quantity: 5}) should log flour added to inventory when no object having name equal to "flour" is found in the inventory.

12

Failed: 14. removeProduct("FLOUR", 5) should log Remaining flour pieces: 15 to the console, when inventory is equal to [{name: "flour", quantity: 20}, {name: "rice", quantity: 5}].

Failed: 16. removeProduct("FLOUR", 10) should log Not enough flour available, remaining pieces: 5 when inventory is equal to [{name: "flour", quantity: 5}, {name: "rice", quantity: 5}].


function addProduct(object) {
	object.name = object.name.toLowerCase();
	
	for (let i = 0; i < inventory.length; i++) {
		if (inventory[i].name === object.name) {
			inventory[i].quantity += object.quantity;
			console.log(`${inventory[i].name} quantity updated`);
			return;
		}
	}

	inventory.push(object);
	console.log(`${object.name} added to inventory`);
}

MINE

function addProduct(object) {
	object.name = object.name.toLowerCase();
	
	for (let i in inventory) {
		if (inventory[i].name === object.name) {
			inventory[i].quantity = inventory[i].quantity + object.quantity;
			return `${inventory[i].name} quantity updated`;
		} 
	} 	
	inventory.push(object);
	return `${object.name} added to inventory`;
}

console.log(addProduct({name: "FLOUR", quantity: 5}));