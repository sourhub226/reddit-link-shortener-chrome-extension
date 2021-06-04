const copyBtn = document.querySelector("#copy-button");
const shortLinkInput = document.querySelector("#shortlink-input");
const siteLogo = document.querySelector("#site-logo");
const body = document.querySelector("body");
const statusDiv = document.createElement("div");
statusDiv.className = "status rounded-style";
statusDiv.innerHTML = "✔ Link copied successfully!";

document.addEventListener("DOMContentLoaded", function () {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
		url = tabs[0].url;
		link_id = url.match(/comments\/(.*?)\//)[1];
		shortUrl = "https://redd.it/" + link_id;
		shortLinkInput.value = shortUrl;
	});
});

copyBtn.addEventListener("click", function () {
	shortLinkInput.focus();
	shortLinkInput.select();
	document.execCommand("copy");
	body.appendChild(statusDiv);
	setTimeout(function () {
		body.removeChild(statusDiv);
	}, 3000);
});
