// content.js
chrome.storage.local.set({"cookieCounter": 1});

// get cookie counter var
chrome.storage.local.get("cookieCounter", function(res) {
  console.log(res)
});

console.log(window.location.host);
console.log(typeof window.location.hostname);

if (window.location.hostname == "www.drk.de") {
  alert("Cookies werden entfernt");
  setTimeout(function() {
    // DRK page click cookie banner
    document.querySelector("body > div.cc-window.cc-banner.cc-type-opt-in.cc-theme-epx.cc-bottom.cc-color-override-234041873 > div > div.epx-banner-widget-buttons > button.cc-btn.cc-detail-btn").click();
  }, 2000);
  
  setTimeout(function() {
    document.querySelector("body > div.cc-window.cc-floating.cc-type-opt-in.cc-theme-epx.cc-bottom.cc-left.cc-color-override-234041873 > div > div.epx-basic-footer > button.cc-btn.cc-save").click();
  }, 2000);
} else {
  if (window.location.hostname == "twitter.com") {
    alert("Cookies werden entfernt");
    setTimeout(function() {
      document.querySelector("#layers > div > div > div > div > div > div.css-1dbjc4n.r-eqz5dr.r-1w6e6rj.r-11wrixw.r-1r5su4o.r-vakc41.r-13qz1uu > div:nth-child(2)").click();
    }, 2000);
  } else {
    if (window.location.hostname == "stackoverflow.com") {
      alert("Cookies werden entfernt");
      setTimeout(function() {
        document.querySelector("body > div.ff-sans.ps-fixed.z-nav-fixed.ws4.sm\\:w-auto.p32.sm\\:p16.bg-black-750.fc-white.bar-lg.b16.l16.r16.js-consent-banner > div > button.flex--item.s-btn.s-btn__filled.js-cookie-settings").click();
        setTimeout(function() {
          console.log("Test");
          document.querySelector("#onetrust-pc-sdk > div > div.s-modal--footer.mt0.d-flex.gs8.gsx > button.flex--item.s-btn.s-btn__primary.save-preference-btn-handler.onetrust-close-btn-handler.js-consent-banner-hide.js-consent-save").click();
        }, 2000);
      }, 2000);
    }
  }
}