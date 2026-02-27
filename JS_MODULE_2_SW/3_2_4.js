// Modified Code
let width = prompt("Volume of the box, enter width", 0);
let height = prompt("Volume of the box, enter height", 0);
let length = prompt("Volume of the box, enter length", 0);
if (isNaN(width) || isNaN(height) || isNaN(length)) {
    alert("Please enter valid numbers.");
  } else {
    let volume = width * height * length;
    alert(`Calculated box volume is ${volume}`);
  }

// Original Code
//let width = prompt("Volume of the box, enter width", 0);
//let height = prompt("Volume of the box, enter height", 0);
//let length = prompt("Volume of the box, enter length", 0);
//let volume = width * height * length;
//alert(`Calculated box volume is ${volume}`);

