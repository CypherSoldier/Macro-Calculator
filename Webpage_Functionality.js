let value1 = 0;
let value2 = 0;
let value3 = 0;
let bmr = 0;
let calories = 0;
let protein = 0;

const allRanges = document.querySelectorAll(".value");
allRanges.forEach(wrap => {
const range = wrap.querySelector(".range");
const bubble = wrap.querySelector(".bubble");

range.addEventListener("input", () => {
setBubble(range, bubble);
value1 = parseInt(document.getElementById('age').value);
value2 = parseInt(document.getElementById('height').value);
value3 = parseInt(document.getElementById('weight').value);

//console.log(new_html);
//document.getElementById('calorie').textContent = value2;
//document.getElementById('calorie').innerText = value1;
});

setBubble(range, bubble);
});

function setBubble(range, bubble) {
const val = range.value;
bubble.innerHTML = val;
}

// Selecting all buttons
const buttons = document.querySelectorAll('.button');
// Adding click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('selected'); // Toggle the 'selected' class on button click
    const selectedValues = getSelectedValues(); // Get the selected values
    console.log(selectedValues); // Output the selected values
    //document.getElementById('calorie').innerText = selectedValues.join(', ');
    const age = value1;
    const height = value2;
    const weight = value3;

    protein = weight * 1.5;
    document.getElementById('protein').innerText = protein;
    
    if(selectedValues.includes('Male'))
      {
          bmr = menBMR(weight, height, age);
      }
    else if(selectedValues.includes('Female'))
      {
          bmr = womenBMR(weight, height, age);
      }
    
    //document.getElementById('calorie').innerText = bmr;

  });
});

// Function to get the selected values
function getSelectedValues() {
  const selectedButtons = document.querySelectorAll('.button.selected');
  const selectedValues = Array.from(selectedButtons).map(button => button.innerText);
  return selectedValues;
}

function womenBMR(weightW, heightW, ageW)
  {
        return 655.1 + (9.563 * weightW) + (1.850 * heightW) - (4.676 * ageW);
  }
    
function menBMR(weightM, heightM, ageM)
  {
        return 66.5 + (13.75 * weightM) + (5.003 * heightM) - (6.75 * ageM);
  }
    
//function myFunctionA() {
//  window.location.href = "Second.html";
//}
//function myFunctionB() {
//  window.location.href = "Webpage.html";
//}
//function myFunctionC() {
//  window.location.href = "Third.html";
//}

const options = document.querySelectorAll('.amount');
options.forEach(amount => {
  amount.addEventListener('click', () => {
    amount.classList.toggle('selected');
    const selectedOptions = getSelectedOptions();
    console.log(selectedOptions);
    //document.getElementById('calorie').innerText = selectedOptions.join(', ');

    if(selectedOptions.includes('Sedentary\nLittle or no exercise'))
      {
        calories = bmr * 1.2;
      }
    else if(selectedOptions.includes('Lightly active\n1-3 days a week'))
      {
        calories = bmr * 1.375;
      }
    else if(selectedOptions.includes('Moderately active\n3-5 days a week'))
      {
        calories = bmr * 1.55;
      }
    else if(selectedOptions.includes('Very active\n6-7 days a week'))
      {
        calories = bmr * 1.725;
      }
    else if(selectedOptions.includes('Extra active\nSports and physical job or 2x training'))
      {
        calories = bmr * 1.9;
      }

    document.getElementById('calorie').innerText = calories;

  });
});

function getSelectedOptions() {
    const selectedButtons = document.querySelectorAll('.amount.selected');
    const selectedOptions = Array.from(selectedButtons).map(amount => amount.innerText);
    return selectedOptions;
  }
