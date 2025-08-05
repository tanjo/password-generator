export function htmlKatakana() {
  return `
      <input type="checkbox" id="katakana">
      <label for="katakana">カタカナ</label>
  `;
}

const KATAKANA = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const HENTAI_KANA = 'ヰヱ';

export function getKatakanaIfChecked() {
  const katakanaCheckbox = document.querySelector('#katakana');
  return katakanaCheckbox.checked ? KATAKANA + HENTAI_KANA : '';
}