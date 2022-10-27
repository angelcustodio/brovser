const brovser = (ua) => {
  return {
    browser: {
      name: 'Unknown',
      version: 'Unknown',
    },
    os: {
      name: 'Unknown',
      version: 'Unknown'
    },
    platform: {
      isBot: false,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isIos: false,
      isAndroid: false,
      isMacos: false,
      isLinux: false,
      isChromeos: false,
      isWindows: false
    }
  }
}

module.exports = brovser
