// function textToHex(str) {
//   let hexString = "";
//   for (let i = 0; i < str.length; i++) {
//     hexString += str.charCodeAt(i).toString(16);
//   }
//   return hexString;
// }

// document.querySelector("#form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const myform = new FormData(this);
//   const hex = textToHex(myform.get("input"));
//   document.querySelector("#output").value = hex;
//   document.querySelector("#copy").value = hex;
// });

// document.querySelector("#form").addEventListener("reset", (e) => {
//   document.querySelector("#copy").value = "";
// });

// document.querySelector("#copy").addEventListener("click", (e) => {
//   if (!e.target.value) return;
//   navigator.clipboard
//     .writeText(e.target.value)
//     .then(() => {
//       alert("copy in clipboard! use ctr+v");
//     })
//     .catch(() => {
//       alert("somthing want wrong! please try again.");
//     });
// });

// updated version of code +++++++++++++++++++++++++++++++

// Function to convert a given string into a hexadecimal representation
function textToHex(str) {
  return str
    .split("") // Split the string into an array of characters
    .map((char) => char.charCodeAt(0).toString(16)) // Convert each character to its Unicode value and then to hexadecimal
    .join(""); // Join the hex values into a single string
}

// Function to handle form submission, convert input to hex, and update fields
function handleFormSubmit(e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const formData = new FormData(this); // Get form data
  const inputText = formData.get("input"); // Retrieve the 'input' field value
  const hex = textToHex(inputText); // Convert the input text to hexadecimal

  // Update output and copy fields with the hex value
  document.querySelector("#output").value = hex;
  document.querySelector("#copy").value = hex;
}

// Function to clear the 'copy' field on form reset
function handleFormReset() {
  document.querySelector("#copy").value = ""; // Clear the 'copy' field
}

// Function to handle the 'copy' button click and copy hex value to clipboard
function handleCopyClick(e) {
  const hexValue = e.target.value; // Get the value of the 'copy' field

  if (!hexValue) return; // If the value is empty, do nothing

  // Use the Clipboard API to copy the hex value to the clipboard
  navigator.clipboard
    .writeText(hexValue)
    .then(() => {
      // If copy is successful, show success alert
      alert("Copied to clipboard! Use Ctrl+V to paste.");
    })
    .catch(() => {
      // If an error occurs during copying, show error alert
      alert("Something went wrong! Please try again.");
    });
}

// Attach event listeners

// Listen for form submission to convert input to hex and update fields
document.querySelector("#form").addEventListener("submit", handleFormSubmit);

// Listen for form reset to clear the 'copy' field
document.querySelector("#form").addEventListener("reset", handleFormReset);

// Listen for 'copy' button click to copy the hex value to the clipboard
document.querySelector("#copy").addEventListener("click", handleCopyClick);
