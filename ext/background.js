chrome.runtime.onConnect.addListener((port1) => {
  const {name} = port1;
  if (name !== 'test') { return; }

  const tabId = port1.sender.tab.id;
  const frameId = 0;

  chrome.tabs.connect(tabId, {frameId, name: `${name}2`});
});
