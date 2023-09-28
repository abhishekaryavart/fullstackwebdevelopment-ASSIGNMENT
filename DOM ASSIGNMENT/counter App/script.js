// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// for increment button click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 20) {
      alert("20+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
  });


// for decrement button click
decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});



// for reset button click
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});
