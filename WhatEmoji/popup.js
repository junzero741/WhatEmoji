const emojiInput = document.getElementById('emojiInput');
const searchResult = document.getElementById('searchResult');

emojiInput.addEventListener('input', async (e) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setResult,
    args: [e.target.value, searchResult],
  });
});

function setResult(value, targetDOM) {
  chrome.storage.local.get('emojiList', ({ emojiList }) => {
    let result = '';

    emojiList.forEach((info) => {
      if (info.keywords.includes(value)) {
        result += info.emoji;
      }
    });

    console.log(result);

    // const resultDOM = document.getElementById('searchResult');
    targetDOM.innerText = result;
  });
}

// chrome.storage.sync.get('person', ({ person }) => {
//   emojiResult.innerHTML = person;
// });

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
