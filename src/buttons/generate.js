import { getLowercaseLettersIfChecked } from '../checkboxes/lowercase';
import { getUppercaseLettersIfChecked } from '../checkboxes/uppercase';
import { getNumbersIfChecked } from '../checkboxes/numbers';
import { getSymbolsIfChecked } from '../checkboxes/symbols';

export function htmlGenerate() {
  return `
    <button id="generate" type="button">生成</button>
  `;
}

export function setupGenerateButton(lengthId) {
  const generateButton = document.querySelector('#generate');
  generateButton.addEventListener('click', () => {
    const length = parseInt(document.querySelector(lengthId.startsWith('#') ? lengthId : `#${lengthId}`).value);
    const lowercase = getLowercaseLettersIfChecked();
    const uppercase = getUppercaseLettersIfChecked();
    const numbers = getNumbersIfChecked();
    const symbols = getSymbolsIfChecked();

    const password = generatePassword(length, lowercase, uppercase, numbers, symbols);
    document.querySelector('#password').textContent = password;
  });
}

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
  const characterSets = [];
  if (lowercase) characterSets.push(lowercase);
  if (uppercase) characterSets.push(uppercase);
  if (numbers) characterSets.push(numbers);
  if (symbols) characterSets.push(symbols);

  if (characterSets.length === 0) {
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomSet = characterSets[Math.floor(Math.random() * characterSets.length)];
    password += randomSet[Math.floor(Math.random() * randomSet.length)];
  }
  
  return password;
}