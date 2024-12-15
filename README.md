# Shopping List Application

A simple yet functional shopping list web application that allows users to manage their shopping items. This application provides features like adding items with prices, editing the details, marking items as purchased, and calculating the total cost of purchased items.

## Features

- **Add Items**: Add new items to the shopping list with names and prices.
- **Edit Items**: Modify the details (name and price) of items already added to the list.
- **Mark as Purchased**: Mark items as purchased, visually indicating them with a strikethrough.
- **Total Calculation**: Automatically calculates and displays the total price of purchased items.
- **Clear List**: Remove all items from the shopping list with a single click.

## How It Works

### HTML Structure
The HTML file defines the structure of the shopping list app. It includes:
- **Input fields**: For entering the item name and price.
- **Buttons**: To add new items, mark items as purchased, edit item details, or clear the entire list.
- **List Display**: A dynamically updated list of items, showing their names, prices, and purchase status.

### CSS Styling
The CSS file is used to style the app and make it visually appealing. It includes:
- Layout styling for the shopping list and input fields.
- Hover and active states for the buttons, improving user interaction.
- A visual cue (strikethrough effect) for items marked as purchased.
- General styling that provides a clean and user-friendly interface.

### JavaScript Functionality
The JavaScript file handles the dynamic functionality of the application. Key features include:
- **Add Item**: When the user enters an item and its price, the application adds it to an array and updates the list.
- **Edit Item**: Users can modify an item’s name and price by clicking the "Edit" button.
- **Mark as Purchased**: Items can be toggled between "purchased" and "not purchased," with the status reflected on the UI.
- **Total Calculation**: The application calculates and displays the total cost of all items marked as purchased.
- **Clear List**: Users can clear the list, resetting all items and the total price.

### Example Workflow
1. **Adding Items**: A user enters the name of an item (e.g., "Apple") and its price (e.g., "$1.99") into the input fields and clicks "Add Item." The item appears in the shopping list.
2. **Marking as Purchased**: The user can click the "Mark as Purchased" button next to an item. The item's name will appear with a strikethrough and be included in the total price calculation.
3. **Editing Items**: By clicking the "Edit" button next to an item, the user can modify the name and price. After editing, the shopping list is updated.
4. **Clearing the List**: The "Clear List" button removes all items from the shopping list, and the total price resets to $0.

## Installation

To set up the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/shopping-list.git
    ```

2. Navigate to the project directory:
    ```bash
    cd shopping-list
    ```

3. Open `index.html` in a web browser to start using the application.

## Usage

1. **Add Items**: Fill in the item name and price, then click "Add Item" to add the item to your list.
2. **Edit Items**: Click the "Edit" button next to any item to modify its details (name and/or price).
3. **Mark as Purchased**: Click the "Mark as Purchased" button to mark an item as purchased. This will strike through the item and include it in the total price calculation.
4. **Clear List**: Click the "Clear List" button to remove all items from the list.
5. **View Total Price**: The total of all purchased items will be displayed and automatically updated.
