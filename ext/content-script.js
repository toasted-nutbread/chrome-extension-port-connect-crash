chrome.runtime.onConnect.addListener(() => {});
if (window !== window.top) {
  chrome.runtime.connect(null, {name: 'test'});
}
