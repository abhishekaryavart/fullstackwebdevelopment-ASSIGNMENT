// Get references to the input fields and the result paragraph
// const password1Input = document.getElementById("password1");
// const password2Input = document.getElementById("password2");
// const resultParagraph = document.getElementById("result");
// const checkButton = document.getElementById("checkButton");

// // Add a click event listener to the button
// checkButton.addEventListener("click", function () {
//     const password1 = password1Input.value;
//     const password2 = password2Input.value;

//     if (password1 === password2) {
//         resultParagraph.textContent = "Passwords match!";
//     } else {
//         resultParagraph.textContent = "Passwords do not match.";
//     }
// });

function mixColors(color1, color2) {
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    switch (color1) {
        case "red":
            switch (color2) {
                case "red":
                    return "Red";
                case "blue":
                    return "Purple";
                case "yellow":
                    return "Orange";
                default:
                    return "Invalid color";
            }
        case "blue":
            switch (color2) {
                case "red":
                    return "Purple";
                case "blue":
                    return "Blue";
                case "yellow":
                    return "Green";
                default:
                    return "Invalid color";
            }
        case "yellow":
            switch (color2) {
                case "red":
                    return "Orange";
                case "blue":
                    return "Green";
                case "yellow":
                    return "Yellow";
                default:
                    return "Invalid color";
            }
        default:
            return "Invalid color";
    }
}
var prompt=require("prompt-sync")()

const color1 = prompt("Enter the first color:"); // Input the first color
const color2 = prompt("Enter the second color:"); // Input the second color

const result = mixColors(color1, color2);
console.log(`The resulting color is: ${result}`);
