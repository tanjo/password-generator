export function htmlUppercase() {
  return `
    <input type="checkbox" id="uppercase" checked>
    <label for="uppercase">大文字</label>
  `;
}

const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function getUppercaseLettersIfChecked() {
  const uppercaseCheckbox = document.querySelector('#uppercase');
  return uppercaseCheckbox.checked ? UPPERCASE_LETTERS : '';
}
