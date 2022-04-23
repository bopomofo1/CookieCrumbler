// content.js
alert("CookieCrumbler sagt Hallo")

// set cookie counter var
chrome.storage.local.set({"cookieCounter": 1});

// get cookie counter var
chrome.storage.local.get("cookieCounter", function(res) {
  console.log(res)
});


setTimeout(function() {
  // DRK page click cookie banner
  document.querySelector("body > div.cc-window.cc-banner.cc-type-opt-in.cc-theme-epx.cc-bottom.cc-color-override-234041873 > div > div.epx-banner-widget-buttons > button.cc-btn.cc-detail-btn").click();
}, 2000);
