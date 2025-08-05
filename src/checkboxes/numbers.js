export function htmlNumbers() {
  return `
    <input type="checkbox" id="numbers" checked>
    <label for="numbers">数字</label>
  `;
}

const NUMBERS = '0123456789';

export function getNumbersIfChecked() {
  const numbersCheckbox = document.querySelector('#numbers');
  return numbersCheckbox.checked ? NUMBERS : '';
}
