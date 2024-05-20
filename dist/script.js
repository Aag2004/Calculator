// let string="";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
//             string= eval(string);
//             document.querySelector('input').value=string;

//         }
//         else if(e.target.innerHTML=='C'){
//             string="";
//             document.querySelector('input').value=string;
//         }
//         else{
//         console.log(e.target);
//         string= string + e.target.innerHTML;
//         document.querySelector('input').value=string;
//         }
//     })
// })
// let screen = document.getElementById("display");
// buttons = document.querySelectorAll('.button');
// let screenValue = "";
// for (item of buttons) {
//   item.addEventListener("click", (e) => {
//     buttonText = e.target.innerText;
//     if (buttonText == "*") {
//       buttonText = "*";
//       screenValue += buttonText;
//       screen.value = screenValue;
//     } else if (buttonText == "C") {
//       screenValue = "";
//       screen.value = screenValue;
//     } else if (buttonText == "=") {
//       var result;
//       try {
//         result = eval(screenValue);
//       } catch (error) {
//         result = "Expression error";
//       }
//       screen.value = result;
//     } else {
//       screenValue += buttonText;
//       screen.value = screenValue;
//     }
//   });
// }

let screen = document.getElementById("display");
let buttons = document.querySelectorAll('.button');
let screenValue = "";

// Add event listeners for mouse clicks
for (let item of buttons) {
  item.addEventListener("click", (e) => {
    handleInput(e.target.innerText);
  });
}

// Add event listener for keyboard input
document.addEventListener("keydown", (e) => {
  // Check if the pressed key corresponds to a button on the calculator
  const button = document.querySelector(`button[data-key="${e.key}"]`);
  if (e.key === "Enter") {
    handleInput("=");
  }
  else if (e.key === "/") {
    // Prevent the default action
    e.preventDefault();
    
    // Handle division operation in your calculator
    handleInput("/");
  }
  else if (e.key === "c") {
    handleInput("C");
  }
  else if (e.key === "Backspace") {
    handleInput("back");
  }
  else if (button) {
    handleInput(button.innerText);
  }
});

// Function to handle input (both mouse clicks and keyboard input)
function handleInput(buttonText) {
  if (buttonText === "*") {
    buttonText = "*";
  }
  if (buttonText === "C") {
    screenValue = "";
  } else if (buttonText === "=") {
    try {
      screenValue = eval(screenValue);
    } catch (error) {
      screenValue = "Expression error";
    }
  } 
  else if (buttonText === "back" || buttonText === "X") {
    // Remove the last character from screenValue
    screenValue = screenValue.slice(0, -1);
  }
    else {
    screenValue += buttonText;
  }
  screen.value = screenValue;
}
