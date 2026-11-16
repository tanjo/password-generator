import './style.css'
import { htmlGenerate, setupGenerateButton } from './buttons/generate'
import { htmlLowercase,  } from './checkboxes/lowercase'
import { htmlUppercase } from './checkboxes/uppercase'
import { htmlNumbers } from './checkboxes/numbers'
import { htmlSymbols, htmlSymbolOptions } from './checkboxes/symbols'
import { htmlCopy, setupCopyButton } from './buttons/copy'
import { htmlHiragana } from './checkboxes/hiragana'
import { htmlKatakana } from './checkboxes/katakana'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>パスワード生成器</h1>
    <div id="length-container">
      <label for="length">パスワードの長さ:</label>
      <input type="range" id="length" value="12" min="4" max="64">
      <input type="number" id="length-value" value="12" min="4" max="64" step="1" aria-label="パスワードの長さ">
    </div>
    <div id="checkboxes">
      ${htmlLowercase()}
      ${htmlUppercase()}
      ${htmlNumbers()}
      ${htmlSymbols()}
      ${htmlHiragana()}
      ${htmlKatakana()}
    </div>
    ${htmlSymbolOptions()}
    <div id="password"></div>
    <div id="percent-escaped-output">
      <div class="percent-escaped-label">URLエンコード版</div>
      <div id="percent-escaped-password"></div>
    </div>
    ${htmlGenerate()}
    ${htmlCopy()}
  </div>
`

setupCopyButton('#password')
setupGenerateButton('#length')

function updateLengthValue() {
  const lengthInput = document.querySelector('#length');
  const lengthValue = document.querySelector('#length-value');
  lengthValue.value = lengthInput.value;
}
document.querySelector('#length').addEventListener('input', updateLengthValue);
updateLengthValue(); // 初期値の更新

function updateLengthSlider() {
  const lengthInput = document.querySelector('#length');
  const lengthValue = document.querySelector('#length-value');
  if (lengthValue.value !== '') {
    lengthInput.value = lengthValue.value;
  }
}

function commitLengthValue() {
  const lengthInput = document.querySelector('#length');
  const lengthValue = document.querySelector('#length-value');
  const parsedLength = Number(lengthValue.value);
  const clampedLength = Math.round(Math.min(64, Math.max(4, Number.isFinite(parsedLength) ? parsedLength : 4)));
  lengthInput.value = clampedLength;
  lengthValue.value = lengthInput.value;
}

document.querySelector('#length-value').addEventListener('input', updateLengthSlider);
document.querySelector('#length-value').addEventListener('change', commitLengthValue);
document.querySelector('#length-value').addEventListener('blur', commitLengthValue);