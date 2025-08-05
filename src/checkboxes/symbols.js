export function htmlSymbols() {
  return `
    <input type="checkbox" id="symbols" checked>
    <label for="symbols">記号</label>
  `;
}

const SYMBOLS = '!@#$%^&*()_+[]{}|;:,.<>?';
// const SYMBOLS2 = '!@#$%^&*()_-+=[{]};:<>|./?';

export function getSymbolsIfChecked() {
  const symbolsCheckbox = document.querySelector('#symbols');
  return symbolsCheckbox.checked ? SYMBOLS : '';
}
