let changeColor = document.getElementById('changeColor');
let inputEmoji = document.getElementById('typeEmoji');
let searchEmoji = document.getElementById('searchEmoji');
let emojiResult = document.getElementById('emojiResult');

// chrome.storage.sync.get('color', ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

chrome.storage.sync.get('person', ({ person }) => {
  emojiResult.innerHTML = person;
});

// changeColor.addEventListener('click', async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// function setPageBackgroundColor() {
//   chrome.storage.sync.get('color', ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
