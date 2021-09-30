chrome.runtime.onInstalled.addListener(async () => {
  const dataURL = chrome.runtime.getURL('data/emojiList.json');
  const rawData = await fetch(dataURL);
  const jsonData = await rawData.json();
  const emojiList = Object.values(jsonData).flat();
  chrome.storage.local.set({ emojiList });
});
