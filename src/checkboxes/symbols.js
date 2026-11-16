const SYMBOL_OPTIONS = [
  { value: '!', checked: true },
  { value: '@', checked: true },
  { value: '#', checked: true },
  { value: '$', checked: true },
  { value: '%', checked: true },
  { value: '^', checked: true },
  { value: '&', checked: true },
  { value: '*', checked: true },
  { value: '(', checked: true },
  { value: ')', checked: true },
  { value: '_', checked: true },
  { value: '-', checked: true },
  { value: '+', checked: true },
  { value: '[', checked: false },
  { value: ']', checked: false },
  { value: '{', checked: false },
  { value: '}', checked: false },
  { value: '|', checked: false },
  { value: ';', checked: false },
  { value: ':', checked: false },
  { value: ',', checked: false },
  { value: '.', checked: true },
  { value: '<', checked: false },
  { value: '>', checked: false },
  { value: '?', checked: true },
  { value: '\\', checked: false },
  { value: "'", checked: false },
  { value: '"', checked: false },
  { value: '/', checked: false },
  { value: '`', checked: false },
  { value: '~', checked: false },
  { value: '=', checked: true },
];

export function htmlSymbols() {
  return `
    <div>
      <input type="checkbox" id="symbols" checked>
      <label for="symbols">記号</label>
    </div>
  `;
}

export function htmlSymbolOptions() {
  return `
    <fieldset id="symbol-options">
      <div class="symbol-list">
        ${SYMBOL_OPTIONS.map(({ value, checked }, index) => {
          const escapedValue = value
            .replaceAll('&', '&amp;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;');

          return `
            <input type="checkbox" id="symbol-${index}" name="symbols" value="${escapedValue}" ${checked ? 'checked' : ''}>
            <label for="symbol-${index}">${escapedValue}</label>
          `;
        }).join('')}
      </div>
    </fieldset>
  `;
}

export function getSymbolsIfChecked() {
  if (!document.querySelector('#symbols').checked) {
    return '';
  }

  return Array.from(document.querySelectorAll('input[name="symbols"]:checked'))
    .map((checkbox) => checkbox.value)
    .join('');
}
