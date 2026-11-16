import { getLowercaseLettersIfChecked } from '../checkboxes/lowercase';
import { getUppercaseLettersIfChecked } from '../checkboxes/uppercase';
import { getNumbersIfChecked } from '../checkboxes/numbers';
import { getSymbolsIfChecked } from '../checkboxes/symbols';
import { getHiraganaIfChecked } from '../checkboxes/hiragana';
import { getKatakanaIfChecked } from '../checkboxes/katakana';

export function htmlGenerate() {
  return `
    <button id="generate" type="button">生成</button>
  `;
}

export function setupGenerateButton(lengthId) {
  const generateButton = document.querySelector('#generate');
  const percentEscapedOutput = document.querySelector('#percent-escaped-output');
  const percentEscapedPassword = document.querySelector('#percent-escaped-password');

  const updatePercentEscapedOutput = () => {
    const password = document.querySelector('#password').textContent;
    const hasKanaSelected = getHiraganaIfChecked() || getKatakanaIfChecked();
    const shouldShow = hasKanaSelected && password;

    percentEscapedOutput.classList.toggle('visible', Boolean(shouldShow));
    percentEscapedPassword.textContent = shouldShow ? encodeURIComponent(password) : '';
  };

  document.querySelector('#hiragana').addEventListener('change', updatePercentEscapedOutput);
  document.querySelector('#katakana').addEventListener('change', updatePercentEscapedOutput);

  generateButton.addEventListener('click', () => {
    const length = parseInt(document.querySelector(lengthId.startsWith('#') ? lengthId : `#${lengthId}`).value);
    const lowercase = getLowercaseLettersIfChecked();
    const uppercase = getUppercaseLettersIfChecked();
    const numbers = getNumbersIfChecked();
    const symbols = getSymbolsIfChecked();
    const hiragana = getHiraganaIfChecked();
    const katakana = getKatakanaIfChecked();

    const password = generatePassword(length, lowercase, uppercase, numbers, symbols, hiragana, katakana);
    document.querySelector('#password').textContent = password;
    updatePercentEscapedOutput();
  });
}

function generatePassword(length, lowercase, uppercase, numbers, symbols, hiragana, katakana) {
  const characterSets = [];
  if (lowercase) characterSets.push(lowercase);
  if (uppercase) characterSets.push(uppercase);
  if (numbers) characterSets.push(numbers);
  if (symbols) characterSets.push(symbols);
  if (hiragana) characterSets.push(hiragana);
  if (katakana) characterSets.push(katakana);

  if (characterSets.length === 0) {
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomSet = characterSets[getSecureRandomIndex(characterSets.length)];
    password += randomSet[getSecureRandomIndex(randomSet.length)];
  }
  
  return password;
}

function getSecureRandomIndex(maxExclusive) {
  const uint32Range = 0x100000000;
  const rejectionLimit = Math.floor(uint32Range / maxExclusive) * maxExclusive;
  const randomValues = new Uint32Array(1);

  do {
    globalThis.crypto.getRandomValues(randomValues);
  } while (randomValues[0] >= rejectionLimit);

  return randomValues[0] % maxExclusive;
}