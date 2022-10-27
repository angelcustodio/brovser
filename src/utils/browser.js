const { BROWSERS_LIST } = require('./browser')

// Brave: /brave/i,
// Chrome: /chrome|crios/i,
// Chromium: /chromium/i,
// Edge: /edge|edga|edgios/i,
// Firefox: /firefox|fxios|focus/i,
// Explorer: /msie|trident/i,
// Konqueror: /konqueror/i,
// Opera: /opera|opios|OPR\//i,
// Safari: /safari/i,
// SeaMonkey: /seamonkey/i,
// UCBrowser: /ucbrowser|ubrowser/i,
// Vivaldi: /vivaldi/i,
// WeChat: /micromessenger/i

const getBrowser = (ua) => {
  switch (true) {
  case BROWSERS_LIST.Brave.test(ua):
    return {
      name: 'Brave',
    }
  case BROWSERS_LIST.Chrome.test(ua):
    return {
      name: 'Chrome',
    }
  case BROWSERS_LIST.Brave.test(ua):
    return {
      name: 'Brave',
    }
  default:
    return {
      platform: 'Unknown'
    }
  }
}

module.exports = getBrowser
