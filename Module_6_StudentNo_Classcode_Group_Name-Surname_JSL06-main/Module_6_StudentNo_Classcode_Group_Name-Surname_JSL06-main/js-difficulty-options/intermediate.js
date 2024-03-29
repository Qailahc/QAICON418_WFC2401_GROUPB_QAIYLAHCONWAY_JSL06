// Sample menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// HINT: Function to display menu items by category
function displayMenuItems(menu) {
    // HINT: Get a reference to the menu container in your HTML
    
    // HINT: Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries()) {
        // HINT: Create an h3 element for the category
        
        // HINT: Append the category heading to the menu container
        
        // HINT: Create a list element for the items in the category
        
        // HINT: Loop through the items in the category and create list items
            
            // HINT: Attach a click event listener to the list item to add it to the order
        
            
            // HINT: Append the list item to the category's list
        
        });
    }
}

// HINT: Callback function for adding an item to the order
function addToOrder(itemName) {
    // HINT: Get references to the order items list and order total element in your HTML
    
    // HINT: Create a list item for the order
    
    // HINT: Append the list item to the order items list
    
    // HINT: Calculate and update the total price
    const currentTotal = parseFloat();
    const itemPrice = 60; // Assuming each item costs R90 (you can customize this)
    const newTotal = ;
    orderTotalElem.textContent = newTotal.toFixed(2);
}

// HINT: Function to initialize the menu system
function initMenuSystem() {
    // HINT: Call the displayMenuItems function to display the menu

}

// HINT: Call the init function to start the menu system
initMenuSystem(menu);
