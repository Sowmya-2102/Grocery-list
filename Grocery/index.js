 // Function to handle adding items to the list
 function addItem() {
    // Get the input field and its value
    const inputField = document.querySelector('.id');
    const itemName = inputField.value.trim();

    // Check if the input is not empty
    if (itemName) {
        // Create a new list item element
        const listItem = document.createElement('li');
        listItem.textContent = itemName;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            listItem.remove();
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new item to the list
        const list = document.getElementById('itemList');
        list.appendChild(listItem);

        // Clear the input field
        inputField.value = '';
    } else {
        alert('Please enter an item.');
    }
}

// Add event listener to the button
document.getElementById('addButton').addEventListener('click', addItem);