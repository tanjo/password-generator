(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}})();function h(){return`
    <input type="checkbox" id="lowercase" checked>
    <label for="lowercase">小文字</label>
  `}const p="abcdefghijklmnopqrstuvwxyz";function f(){return document.querySelector("#lowercase").checked?p:""}function m(){return`
    <input type="checkbox" id="uppercase" checked>
    <label for="uppercase">大文字</label>
  `}const b="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function y(){return document.querySelector("#uppercase").checked?b:""}function g(){return`
    <input type="checkbox" id="numbers" checked>
    <label for="numbers">数字</label>
  `}const k="0123456789";function S(){return document.querySelector("#numbers").checked?k:""}function x(){return`
    <input type="checkbox" id="symbols" checked>
    <label for="symbols">記号</label>
  `}const C="!@#$%^&*()_+[]{}|;:,.<>?";function v(){return document.querySelector("#symbols").checked?C:""}function L(){return`
      <input type="checkbox" id="hiragana">
      <label for="hiragana">ひらがな</label>
  `}const q="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ",A="ゐゑ";function E(){return document.querySelector("#hiragana").checked?q+A:""}function w(){return`
      <input type="checkbox" id="katakana">
      <label for="katakana">カタカナ</label>
  `}const N="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",M="ヰヱ";function $(){return document.querySelector("#katakana").checked?N+M:""}function T(){return`
    <button id="generate" type="button">生成</button>
  `}function I(t){document.querySelector("#generate").addEventListener("click",()=>{const u=parseInt(document.querySelector(t.startsWith("#")?t:`#${t}`).value),r=f(),e=y(),n=S(),a=v(),c=E(),s=$(),l=B(u,r,e,n,a,c,s);document.querySelector("#password").textContent=l})}function B(t,o,u,r,e,n,a){const c=[];if(o&&c.push(o),u&&c.push(u),r&&c.push(r),e&&c.push(e),n&&c.push(n),a&&c.push(a),c.length===0)return"";let s="";for(let l=0;l<t;l++){const i=c[Math.floor(Math.random()*c.length)];s+=i[Math.floor(Math.random()*i.length)]}return s}function O(){return`
    <button id="copy" type="button">コピー</button>
    <p id="copy-message" class="hidden">コピーしました！</p>
  `}function K(t){const o=document.querySelector("#copy"),u=document.querySelector("#copy-message");o.addEventListener("click",()=>{const r=document.querySelector(t.startsWith("#")?t:`#${t}`),e=r?r.textContent:"";!e||e.trim()===""||navigator.clipboard.writeText(e).then(()=>{u.classList.remove("hidden"),setTimeout(()=>{u.classList.add("hidden")},2e3)}).catch(n=>{console.error("コピーに失敗しました:",n)})})}document.querySelector("#app").innerHTML=`
  <div>
    <h1>パスワード生成器</h1>
    <div id="length-container">
      <label for="length">パスワードの長さ:</label>
      <input type="range" id="length" value="12" min="4" max="64">
      <span id="length-value" contenteditable="true">12</span>
    </div>
    <div id="checkboxes">
      ${h()}
      ${m()}
      ${g()}
      ${x()}
      ${L()}
      ${w()}
    </div>
    <div id="password"></div>
    ${T()}
    ${O()}
  </div>
`;K("#password");I("#length");function d(){const t=document.querySelector("#length"),o=document.querySelector("#length-value");o.textContent=t.value}document.querySelector("#length").addEventListener("input",d);d();function P(){const t=document.querySelector("#length"),o=document.querySelector("#length-value");o.textContent=Math.min(64,Math.max(4,o.textContent)),t.value=o.textContent}document.querySelector("#length-value").addEventListener("focusout",P);
