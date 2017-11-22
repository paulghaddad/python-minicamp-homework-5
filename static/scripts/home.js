
const validatePetForm = (evt) => {
  clearErrorMessages();
  const inputs = petForm.querySelectorAll('input:not([type="submit"])');
  const numericInputs = petForm.querySelectorAll('#ageInput');

  let errors = [];

  errors = [...errors, ...blankInputErrors(inputs), ...numericInputErrors(numericInputs)];

  if (errors.length !== 0) {
    evt.preventDefault();
    displayErrors(errors);
  }
};

const changePageTextColor = () => {
  const userColor = document.querySelector('#color').value;

  document.querySelector('body').setAttribute('style', `color:${userColor}`);
};

const hideContent = () => {
  const body = document.querySelector('body');

  body.classList.add('hide-content');
};

function blankInputErrors(inputs) {
  let errors = [];

  inputs.forEach((el) => {
    if (el.value === '') {
      errors.push(`The value for ${el.name} is blank.`);
    }
  });

  return errors;
}

function numericInputErrors(inputs) {
  let errors = [];

  inputs.forEach((el) => {
    if (!(parseInt(el.value) > 0)) {
      errors.push(`The value for ${el.name} must be a number.`);
    }
  });

  return errors;
}

function displayErrors(errors) {
  const mainContainer = document.querySelector('.main');
  const newPetForm = document.querySelector('#new-pet-form');
  const errorList = document.createElement("ul");

  for (error of errors) {
    const errorMessage = document.createElement("li");
    errorMessage.innerText = error;
    errorList.appendChild(errorMessage);
  }

  mainContainer.insertBefore(errorList, newPetForm);
}

function clearErrorMessages() {
  const errors = document.querySelector('ul');

  if (errors) errors.remove();
}

const petForm = document.querySelector('#new-pet-form');
petForm.addEventListener('submit', validatePetForm, false);

const colorPicker = document.querySelector('#colorSubmit');
colorPicker.addEventListener('click', changePageTextColor, false);

const hideContentButton = document.querySelector('#hideContent');
hideContentButton.addEventListener('click', hideContent, false);
