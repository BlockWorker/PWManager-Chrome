
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: "genpage/genpage.html"
  });
});

chrome.commands.onCommand.addListener(async (name) => {
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true
  });
  for (const tab of tabs) {
    chrome.tabs.sendMessage(tab.id, name);
  }
});
