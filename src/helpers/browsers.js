const BROWSERS_LIST = {
  Brave: /brave/i,
  Chrome: /chrome|crios/i,
  Chromium: /chromium/i,
  Edge: /edge|edga|edgios/i,
  Firefox: /firefox|fxios|focus/i,
  Explorer: /msie|trident/i,
  Konqueror: /konqueror/i,
  Opera: /opera|opios|OPR\//i,
  Safari: /safari/i,
  SeaMonkey: /seamonkey/i,
  UCBrowser: /ucbrowser|ubrowser/i,
  Vivaldi: /vivaldi/i,
  WeChat: /micromessenger/i
}

const BROWSERS_VERSIONS = {
  Chrome: /(?:chrome|crios)\/([\d\w\.\-]+)/i,
  Chromium: /chromium\/([\d\w\.\-]+)/i,
  Edge: /(?:edge|edga|edgios)\/([\d\w\.\-]+)/i,
  Firefox: /(?:firefox|fxios)\/([\d\w\.\-]+)/i,
  Explorer: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
  Opera: /(?:version|opera|opr|opios)\/([\d\w\.\-]+)/i,
  Safari: /version\/([\d\w\.\-]+)/i,
  WeChat: /micromessenger\/([\d\w\.\-]+)/i
}

exports.BROWSERS_LIST = BROWSERS_LIST
exports.BROWSERS_VERSIONS = BROWSERS_VERSIONS
