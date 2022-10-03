const copyBtn = document.querySelector("#copy-button");
const shortLinkInput = document.querySelector("#shortlink-input");
const body = document.querySelector("body");
const statusDiv = document.createElement("div");
statusDiv.className = "status rounded-style";
statusDiv.innerHTML = "✔ Link copied successfully!";

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

let tab = await getCurrentTab();
console.log(tab.url);
let url = tab.url;
let link_id = url.match(/comments\/(.*?)\//)[1];
let shortUrl = "https://redd.it/" + link_id;
shortLinkInput.value = shortUrl;

copyBtn.addEventListener("click", function () {
  shortLinkInput.focus();
  shortLinkInput.select();
  document.execCommand("copy");
  body.appendChild(statusDiv);
  setTimeout(function () {
    body.removeChild(statusDiv);
  }, 3000);
});
