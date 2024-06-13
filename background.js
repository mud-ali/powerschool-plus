chrome.browserAction.onClicked.addListener(function (activeTab) {
    chrome.tabs.create({ url: "https://powerschool-plus.vercel.app/" });
});