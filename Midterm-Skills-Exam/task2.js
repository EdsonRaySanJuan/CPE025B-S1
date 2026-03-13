// Task 2: Categorized Inventory Valuation
// Write a function getInventoryValuation that takes an array of product objects. Each object contains name, qty, price, and category. 
// The function must return a single object where each key is a category and each value is the total monetary value (quantity multiplied by price) 
// of all items in that category. Items with a quantity of zero or less must be excluded from the calculation.

// Expected Output: { Tech: 400, Furniture: 400 }


function getInventoryValuation(inventory) {
    // Code Here
    const result = {};

    for (let i = 0; i < inventory.length; i++) {
        const item = inventory[i];

        if (item.qty > 0) {
            const value = item.qty * item.price;

            if (!result[item.category]) {
                result[item.category] = 0;
            }

            result[item.category] += value;
        }
    }
    return result
}

// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory));
