//vowel counter ASSIGNMENT
function countAndOrderVowels(name) {
    const vowels = "AEIOUaeiou"; // List of vowels
  
    // Initialize variables to store the count and order of vowels
    let vowelCount = 0;
    const vowelOrder = [];
  
    // Iterate through each character and index in the name
    for (let i = 0; i < name.length; i++) {
      const char = name.charAt(i);
      if (vowels.includes(char)) {
        vowelCount++;
        vowelOrder.push({ vowel: char, position: i + 1 }); // Store the vowel and its position
      }
    }
  
    return { count: vowelCount, order: vowelOrder };
  }
  
  // Input a name from the user
  const name = prompt("Enter a name: ");
  
  // Call the function to count and order vowels
  const { count, order } = countAndOrderVowels(name);
  
  // Display the count and order of vowels
  console.log(`There are ${count} vowels in the name '${name}'.`);
  if (count > 0) {
    console.log("The vowels and their positions in order of appearance are:");
    order.forEach(({ vowel, position }) => {
      console.log(`${vowel} at position ${position}`);
    });
  }
