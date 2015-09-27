function onTextReceived(textDetails) {
	document.getElementById("summary").innerText = textDetails.summary;
}

var statusDisplay = null;

function addText() {
	event.preventDefault();
	var postUrl = 'http://post-test.local.com';

	var xhr = new XMLHttpRequest();
    xhr.open('POST', postUrl, true);
    var summary = encodeURIComponent(document.getElementById('summary').value);

    var params = '&summary=' + summary;

    params = params.replace(/%20/g, '+');

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() { 
        // If the request completed
        if (xhr.readyState == 4) {
            statusDisplay.innerHTML = '';
            if (xhr.status == 200) {
                // If it was a success, close the popup after a short delay
                statusDisplay.innerHTML = 'Saved!';
                window.setTimeout(window.close, 1000);
            } else {
                // Show what went wrong
                statusDisplay.innerHTML = 'Error saving: ' + xhr.statusText;
            }
        }
    };

    // Send the request and set status
    xhr.send(params);
    statusDisplay.innerHTML = 'Saving...';
}
window.addEventListener('load', function(evt) {
    // Cache a reference to the status display SPAN
    statusDisplay = document.getElementById('status-display');
    // Handle the bookmark form submit event with our addBookmark function
    document.getElementById('addtext').addEventListener('submit', addText);
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in 
        // our onTextReceived function as the callback. This injects 
        // content.js into the current tab's HTML
        eventPage.getTextDetails(onTextReceived);
    });
});