// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the container where menu items will be displayed
    const menuContainer = document.getElementById('menu');

    // Loop through each category in the menu
    for (const [category, items] of Object.entries(menu)) {
        // Create a heading for the category
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        // Create a list for the items in the category
        const itemList = document.createElement('ul');
        // Loop through each item in the category
        items.forEach(item => {
            // Create a list item for the item
            const listItem = document.createElement('li');
            listItem.textContent = item;
            // Add an event listener to the item to add it to the order when clicked
            listItem.addEventListener('click', () => addToOrder(item));
            itemList.appendChild(listItem);
        });
        menuContainer.appendChild(itemList);
    }
}


// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    // Create a list item for the order
    const orderItem = document.createElement('li');
    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;
    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);
    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const itemPrice = addItemPrice(itemName); 
    const newTotal = currentTotal + itemPrice;
    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to calculate the price of an item
function addItemPrice(itemName) {
    const itemPrices = {
        "Garlic Bread": 35,
        "Bruschetta": 50,
        "Margherita Pizza": 115,
        "Spaghetti Carbonara": 150,
        "Tiramisu": 120,
        "Cheesecake": 75,
    };

    return itemPrices[itemName] || 0;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu); 
}

// Start the menu system by calling the init function
initMenuSystem(menu);
