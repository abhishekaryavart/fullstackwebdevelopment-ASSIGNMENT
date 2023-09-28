function capitalizeFirstName(name) {
    // Check if the first character is lowercase
    const firstChar = name.charAt(0);
    const isFirstCharLowercase = firstChar === firstChar.toLowerCase();

    // Use the ternary operator to capitalize the first letter if it's lowercase
    const modifiedName = isFirstCharLowercase
        ? firstChar.toUpperCase() + name.slice(1)
        : name;

    return modifiedName;
}

// Example usage:

var prompt=require("prompt-sync")()

const userName = prompt("Enter your name:"); // Input the user's name
const capitalizedUserName = capitalizeFirstName(userName);
console.log(`Capitalized name: ${capitalizedUserName}`);
