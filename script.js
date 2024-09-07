/*footer*/
var currentYear = new Date().getFullYear(); //variable containing current year
document.getElementById('currentYear').innerHTML = currentYear; //set specified HTML element to currentYear variable

/*Make the checkbutton usable in JS*/
const checkBtn = document.getElementById('check-btn');
/*Make the result div usable in JS*/
const resultDiv = document.getElementById('result');
let inputField = document.getElementById('text-input');

function isPalindrome() {
  let input = document.getElementById('text-input').value;
  if (input == '') {
    alert('Please input a value');
  } else {
    const cleanInputString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    const reversedString = Array.from(cleanInputString).reverse().join('');

    if (cleanInputString === reversedString) {
      resultDiv.classList.remove('is-hidden');
      resultDiv.classList.add('is-positive');
      resultDiv.textContent = `${input} is a palindrome`;
    } else {
      resultDiv.classList.remove('is-hidden');
      resultDiv.classList.add('is-negative');
      result.textContent = `${input} is not a palindrome`;
    }
  }
}

function clearField() {
  resultDiv.classList.add('is-hidden');
  resultDiv.classList.remove('is-negative');
  resultDiv.classList.remove('is-positive');
}

checkBtn.addEventListener('click', isPalindrome);

inputField.addEventListener('keydown', clearField);
