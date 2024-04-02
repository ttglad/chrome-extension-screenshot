// 快捷键监听
chrome.commands.onCommand.addListener(function (command) {
    if (command === "screenshots") {
        chrome.tabs.captureVisibleTab(null, {
            format: "png"
        }, dataUrl => {
            chrome.downloads.download({
                // conflictAction: "overwrite",
                // filename: "test", // 此参数测试了，暂时无法使用
                url: dataUrl,
                // saveAs: true  // 开启此参数会弹出另存为框，可以重命名
            }, (downloadId) => {
            });
        });
    }
});