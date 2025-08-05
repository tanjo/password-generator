export function htmlLowercase() {
  return `
    <input type="checkbox" id="lowercase" checked>
    <label for="lowercase">小文字</label>
  `;
}

const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';

export function getLowercaseLettersIfChecked() {
  const lowercaseCheckbox = document.querySelector('#lowercase');
  return lowercaseCheckbox.checked ? LOWERCASE_LETTERS : '';
}
