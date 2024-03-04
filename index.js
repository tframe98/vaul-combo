// 1. create a string message for user
// 2. calculate the first part of the combination
// 3. use the arithmetic operation 5 + 5 to get 10
// 4. assign thw result to a variable
// 5. calculate the second part of the combination
// 6. use the arithmetic operation 80 / 2 to get 40
// 7. calculate the third part of the combination
// 8. use the arithmetic operation 100 - 61 to get 39
// 9. put together the calculated parts in a single string to form the combination
// 10. insert the combination into the index.html

const message =  "The secret combination is:"; //message for user

const code1 = 5 + 5; //calculate the first part of the string to get 10

const code2 = 80 / 2; //calculate the second part of the combination to get 40

const code3 = 100 - 61; //calculate the third part of  hte combination to get 39

const combination = `code1 - code2 - code 3`; //combine the combination

function displayCombination() {
  document.getElementById("combination").innerHTML = message + combination;
} // display on page

window.onload = displayCombination; //function to display the combination when page loads



