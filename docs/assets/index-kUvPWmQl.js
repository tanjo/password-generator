(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
    <input type="checkbox" id="lowercase" checked>
    <label for="lowercase">小文字</label>
  `}var t=`abcdefghijklmnopqrstuvwxyz`;function n(){return document.querySelector(`#lowercase`).checked?t:``}function r(){return`
    <input type="checkbox" id="uppercase" checked>
    <label for="uppercase">大文字</label>
  `}var i=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`;function a(){return document.querySelector(`#uppercase`).checked?i:``}function o(){return`
    <input type="checkbox" id="numbers" checked>
    <label for="numbers">数字</label>
  `}var s=`0123456789`;function c(){return document.querySelector(`#numbers`).checked?s:``}var l=[{value:`!`,checked:!0},{value:`@`,checked:!0},{value:`#`,checked:!0},{value:`$`,checked:!0},{value:`%`,checked:!0},{value:`^`,checked:!0},{value:`&`,checked:!0},{value:`*`,checked:!0},{value:`(`,checked:!0},{value:`)`,checked:!0},{value:`_`,checked:!0},{value:`-`,checked:!0},{value:`+`,checked:!0},{value:`[`,checked:!1},{value:`]`,checked:!1},{value:`{`,checked:!1},{value:`}`,checked:!1},{value:`|`,checked:!1},{value:`;`,checked:!1},{value:`:`,checked:!1},{value:`,`,checked:!1},{value:`.`,checked:!0},{value:`<`,checked:!1},{value:`>`,checked:!1},{value:`?`,checked:!0},{value:`\\`,checked:!1},{value:`'`,checked:!1},{value:`"`,checked:!1},{value:`/`,checked:!1},{value:"`",checked:!1},{value:`~`,checked:!1},{value:`=`,checked:!0}];function u(){return`
    <div>
      <input type="checkbox" id="symbols" checked>
      <label for="symbols">記号</label>
    </div>
  `}function d(){return`
    <fieldset id="symbol-options">
      <div class="symbol-list">
        ${l.map(({value:e,checked:t},n)=>{let r=e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`);return`
            <input type="checkbox" id="symbol-${n}" name="symbols" value="${r}" ${t?`checked`:``}>
            <label for="symbol-${n}">${r}</label>
          `}).join(``)}
      </div>
    </fieldset>
  `}function f(){return document.querySelector(`#symbols`).checked?Array.from(document.querySelectorAll(`input[name="symbols"]:checked`)).map(e=>e.value).join(``):``}function p(){return`
      <input type="checkbox" id="hiragana">
      <label for="hiragana">ひらがな</label>
  `}var m=`あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ`;function h(){return document.querySelector(`#hiragana`).checked?m:``}function g(){return`
      <input type="checkbox" id="katakana">
      <label for="katakana">カタカナ</label>
  `}var _=`アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ`;function v(){return document.querySelector(`#katakana`).checked?_:``}function y(){return`
    <button id="generate" type="button">生成</button>
  `}function b(e){let t=document.querySelector(`#generate`),r=document.querySelector(`#percent-escaped-output`),i=document.querySelector(`#percent-escaped-password`),o=()=>{let e=document.querySelector(`#password`).textContent,t=(h()||v())&&e;r.classList.toggle(`visible`,!!t),i.textContent=t?encodeURIComponent(e):``};document.querySelector(`#hiragana`).addEventListener(`change`,o),document.querySelector(`#katakana`).addEventListener(`change`,o),t.addEventListener(`click`,()=>{let t=x(parseInt(document.querySelector(e.startsWith(`#`)?e:`#${e}`).value),n(),a(),c(),f(),h(),v());document.querySelector(`#password`).textContent=t,o()})}function x(e,t,n,r,i,a,o){let s=[];if(t&&s.push(t),n&&s.push(n),r&&s.push(r),i&&s.push(i),a&&s.push(a),o&&s.push(o),s.length===0)return``;let c=``;for(let t=0;t<e;t++){let e=s[S(s.length)];c+=e[S(e.length)]}return c}function S(e){let t=Math.floor(4294967296/e)*e,n=new Uint32Array(1);do globalThis.crypto.getRandomValues(n);while(n[0]>=t);return n[0]%e}function C(){return`
    <button id="copy" type="button">コピー</button>
    <p id="copy-message" class="hidden">コピーしました！</p>
  `}function w(e){let t=document.querySelector(`#copy`),n=document.querySelector(`#copy-message`);t.addEventListener(`click`,()=>{let t=document.querySelector(e.startsWith(`#`)?e:`#${e}`),r=t?t.textContent:``;r&&r.trim()!==``&&navigator.clipboard.writeText(r).then(()=>{n.classList.remove(`hidden`),setTimeout(()=>{n.classList.add(`hidden`)},2e3)}).catch(e=>{console.error(`コピーに失敗しました:`,e)})})}document.querySelector(`#app`).innerHTML=`
  <div>
    <h1>パスワード生成器</h1>
    <div id="length-container">
      <label for="length">パスワードの長さ:</label>
      <input type="range" id="length" value="12" min="4" max="64">
      <input type="number" id="length-value" value="12" min="4" max="64" step="1" aria-label="パスワードの長さ">
    </div>
    <div id="checkboxes">
      ${e()}
      ${r()}
      ${o()}
      ${u()}
      ${p()}
      ${g()}
    </div>
    ${d()}
    <div id="password"></div>
    <div id="percent-escaped-output">
      <div class="percent-escaped-label">URLエンコード版</div>
      <div id="percent-escaped-password"></div>
    </div>
    ${y()}
    ${C()}
  </div>
`,w(`#password`),b(`#length`);function T(){let e=document.querySelector(`#length`),t=document.querySelector(`#length-value`);t.value=e.value}document.querySelector(`#length`).addEventListener(`input`,T),T();function E(){let e=document.querySelector(`#length`),t=document.querySelector(`#length-value`);t.value!==``&&(e.value=t.value)}function D(){let e=document.querySelector(`#length`),t=document.querySelector(`#length-value`),n=Number(t.value);e.value=Math.round(Math.min(64,Math.max(4,Number.isFinite(n)?n:4))),t.value=e.value}document.querySelector(`#length-value`).addEventListener(`input`,E),document.querySelector(`#length-value`).addEventListener(`change`,D),document.querySelector(`#length-value`).addEventListener(`blur`,D);