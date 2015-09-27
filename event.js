function getTextDetails(callback) {
	//INJECTION OF CONTENTS OCCURS HERE!
	chrome.tabs.executeScript(null, { file: 'content.js' });
	chrome.runtime.onMessage.addListener(function(message) {
		callback(message);
	});
};