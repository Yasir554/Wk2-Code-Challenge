// Shopping list array to store items
let shoppingListArray = []; //creates an array

// DOM Elements
const addItemBtn = document.getElementById('addItemBtn'); // Button to add new items
const clearListBtn = document.getElementById('clearListBtn'); // Button to clear the shopping list
const itemInput = document.getElementById('itemInput'); // Input field for item name
const priceInput = document.getElementById('priceInput'); // Input field for price
const shoppingList = document.getElementById('shoppingList'); // UL element where the shopping list is displayed
const totalPriceElement = document.getElementById('totalPrice'); // Element to show the calculated total price

// Function to dynamically display the shopping list
function displayShoppingList() {
    shoppingList.innerHTML = ''; // Clear the shopping list before displaying

    shoppingListArray.forEach((item, index) => {
        const li = document.createElement('li'); // Create a new list item for each shopping list entry

        const itemDetails = document.createElement('div'); //Creates a div with the class item-details.
        itemDetails.className = 'item-details';
        itemDetails.innerHTML = `
            <span>${item.name}</span> 
            <span>$${item.price.toFixed(2)}</span>
        `; // Display the name and price of the item , allows the price to be 2dp

        // Create Edit button
        const editBtn = document.createElement('button'); 
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn'; //Creates an "Edit" button for each shopping list entry.
        
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation(); //prevents the click to affect the other elements
            toggleEditMode(index); // Allow edit mode for specific item index
        });

        const markPurchasedBtn = document.createElement('button');
        markPurchasedBtn.textContent = item.purchased ? 'Unmark' : 'Mark as Purchased'; //allow you to unmark or mark the item
        markPurchasedBtn.className = 'mark-btn';

        markPurchasedBtn.addEventListener('click', (e) => {
            e.stopPropagation(); //prevents the click to affect the other elements
            item.purchased = !item.purchased; // Toggle the purchased state as either true or false
            displayShoppingList(); // Update the list 
            calculateTotal(); // Update the total price
        });

        li.appendChild(itemDetails); //added to each list
        li.appendChild(markPurchasedBtn); //added to each list
        li.appendChild(editBtn); //added to each list

        if (item.purchased) {
            li.classList.add('purchased'); // Visually indicate purchased items
        }

        shoppingList.appendChild(li); // Add item to the shopping list 
    });

    calculateTotal(); // Update the total price whenever the list is edited
}

// Handle Add Item
addItemBtn.addEventListener('click', () => {
    const inputValue = itemInput.value.trim(); // Get the item name from input
    const priceValue = parseFloat(priceInput.value); // Changes the price input into a number

    if (inputValue && !isNaN(priceValue) && priceValue >= 0) {
        shoppingListArray.push({ name: inputValue, price: priceValue, purchased: false }); // Add item to the array
        itemInput.value = ''; 
        priceInput.value = '';
        displayShoppingList(); // Update the list with the new item
    } else {
        alert('Please enter a valid item and price!'); // Alerts user if input is invalid
    }
});

// Handle Clear List
clearListBtn.addEventListener('click', () => {
    shoppingListArray = []; // Clear the shopping list array
    displayShoppingList(); // displays an empty list
});

// Function to toggle edit mode
function toggleEditMode(index) {
    const item = shoppingListArray[index];

    const editableHtml = `
        <input type="text" id="editItemName" value="${item.name}" />
        <input type="number" id="editItemPrice" value="${item.price.toFixed(2)}" step="0.01" />
        <button class="save-btn">Save</button>
    `; //allows user to edit and save the name of item and price 

    shoppingList.innerHTML = editableHtml; // Replace list with editable fields

    const saveBtn = document.querySelector('.save-btn'); 

    saveBtn.addEventListener('click', () => {
        const newName = document.getElementById('editItemName').value.trim();
        const newPrice = parseFloat(document.getElementById('editItemPrice').value);

        if (newName && !isNaN(newPrice) && newPrice >= 0) {
            item.name = newName;
            item.price = newPrice;
            displayShoppingList(); // Refresh list with new changes
        } else {
            alert('Invalid entry!'); 
        }
    });
}

// Function to calculate the total price
function calculateTotal() {
    const total = shoppingListArray.reduce((sum, item) => {
        return item.purchased ? sum + item.price : sum; // Sum only purchased items
    }, 0);

    totalPriceElement.textContent = total.toFixed(2); // Update total with 2 decimal points
}

// Initial call to load the shopping list 
displayShoppingList();