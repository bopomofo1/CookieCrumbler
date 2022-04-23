// content.js
alert("CookieCrumbler sagt Hallo")

// set cookie counter var
chrome.storage.local.set({"cookieCounter": 1});

// get cookie counter var
chrome.storage.local.get("cookieCounter", function(res) {
  console.log(res)
});
