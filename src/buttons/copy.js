export function htmlCopy() {
  return `
    <button id="copy" type="button">コピー</button>
    <p id="copy-message" class="hidden">コピーしました！</p>
  `;
}

export function setupCopyButton(passwordContainerId) {
  const copyButton = document.querySelector('#copy');
  const copyMessage = document.querySelector('#copy-message');

  copyButton.addEventListener('click', () => {
    const element = document.querySelector(passwordContainerId.startsWith('#') ? passwordContainerId : `#${passwordContainerId}`);
    const password = element ? element.textContent : '';
    if (!password || password.trim() === '') {
      return;
    }
    navigator.clipboard.writeText(password).then(() => {
      copyMessage.classList.remove('hidden');
      setTimeout(() => {
        copyMessage.classList.add('hidden');
      }, 2000);
    }).catch(err => {
      console.error('コピーに失敗しました:', err);
    });
  });
}
