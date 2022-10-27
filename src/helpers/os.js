const OS_LIST = {
  Android: /android/i,
  ChromeOS: /cros/i,
  iOS: /ios|iphone|ipad|ipod/i,
  Linux: /linux/i,
  macOS: /macintosh|os x/i,
  Windows: /windows/i
}

const OS_VERSIONS = {
  Android: /android\s([\d\w\.\-]+)/i,
  ChromeOS: /cros\s(.+)\s(\d+(\.\d+)*)/i,
  iOS: /OS\s([\d\w\.\-]+)/i,
  Mac: /os\sx\s([\d\w\.\-]+)/i,
  Windows: /windows\snt\s([\d\w\.\-]+)/i
}

exports.OS_LIST = OS_LIST
exports.OS_VERSIONS =  OS_VERSIONS
