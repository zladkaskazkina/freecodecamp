// Input fields
const firstName = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const agree = document.getElementById('agree');
// Form
const form = document.getElementById('survey-form');

// Validators

function validateFName() {
  //if it is empty
  if (checkIfEmpty(firstName)) return;
  // if it has only letters
  if (!checkIfLetters(firstName)) return;
}

//Event Listeners

firstName.addEventListener('change', validateFName);


//Utility Functions 

function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    setInvalid(field, `${field.name} must not be empty`);
    return true;
  } else {
    setValid(field);
    return false;
  }
}

function isEmpty(value) {
  if (value === '') { return true; }
  return false;
}

function setInvalid(field, message) {
  field.className = 'invalid';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = 'red';
}

function setValid(field) {
  field.className = 'valid';
  field.nextElementSibling.innerHTML = '';
  //field.nextElementSibling.style.color = 'green';
}

function checkIfLetters(field) {
  //regular expression
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} must contain only letters`);
    return false;
  }
}