//Remove Duplicates ASSIGNMENT

  // Sample shopping cart with duplicate items
const shoppingCart = [
    { id: 1, name: "Item A", price: 10.99 },
    { id: 2, name: "Item B", price: 5.99 },
    { id: 1, name: "Item A", price: 10.99 }, // Duplicate
    { id: 3, name: "Item C", price: 8.49 },
  ];
  
  // Function to remove duplicates from the shopping cart
  function removeDuplicates(cart) {
    const uniqueCart = [];
    const seenIds = new Set();
  
    for (const item of cart) {
      if (!seenIds.has(item.id)) {
        uniqueCart.push(item);
        seenIds.add(item.id);
      }
    }
  
    return uniqueCart;
  }
  
  // Remove duplicates from the shopping cart
  const uniqueCart = removeDuplicates(shoppingCart);
  
  // Display the unique shopping cart
  console.log("Unique Shopping Cart:");
  console.log(uniqueCart);
  
