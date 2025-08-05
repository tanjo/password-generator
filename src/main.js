import './style.css'
import { htmlGenerate, setupGenerateButton } from './buttons/generate'
import { htmlLowercase,  } from './checkboxes/lowercase'
import { htmlUppercase } from './checkboxes/uppercase'
import { htmlNumbers } from './checkboxes/numbers'
import { htmlSymbols } from './checkboxes/symbols'
import { htmlCopy, setupCopyButton } from './buttons/copy'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>パスワード生成器</h1>
    <div id="length-container">
      <label for="length">パスワードの長さ:</label>
      <input type="range" id="length" value="12" min="4" max="64">
      <span id="length-value">12</span>
    </div>
    <div id="checkboxes">
      ${htmlLowercase()}
      ${htmlUppercase()}
      ${htmlNumbers()}
      ${htmlSymbols()}
    </div>
    <div id="password"></div>
    ${htmlGenerate()}
    ${htmlCopy()}
  </div>
`

setupCopyButton('#password')
setupGenerateButton('#length')

function updateLengthValue() {
  const lengthInput = document.querySelector('#length');
  const lengthValue = document.querySelector('#length-value');
  lengthValue.textContent = lengthInput.value;
}
document.querySelector('#length').addEventListener('input', updateLengthValue);
updateLengthValue(); // 初期値の更新