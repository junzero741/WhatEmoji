const emojiInput = document.getElementById('emojiInput');
const searchResult = document.getElementById('searchResult');
const copyResult = document.getElementById('copyResult');

emojiInput.addEventListener('input', async (e) => {
  chrome.storage.local.get('emojiList', ({ emojiList }) => {
    let result = '';

    emojiList.forEach((info) => {
      if (info.description.includes(e.target.value) || info.keywords.includes(e.target.value)) {
        result += `<button>${info.emoji}</button>`;
      }
    });

    searchResult.innerHTML = result;
    document.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.target.textContent);
        copyResult.innerText = `${e.target.textContent} is Copied To Clipboard`;
      });
    });
  });
});
