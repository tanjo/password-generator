export function htmlHiragana() {
  return `
      <input type="checkbox" id="hiragana">
      <label for="hiragana">ひらがな</label>
  `;
}

const HIRAGANA = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ';
// const HENTAI_KANA = 'ゐゑ';

export function getHiraganaIfChecked() {
  const hiraganaCheckbox = document.querySelector('#hiragana');
  return hiraganaCheckbox.checked ? HIRAGANA : '';
}