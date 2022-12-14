const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },
  localePath: path.resolve('./src/locales'),
  react: {
    useSuspense: true,
  },
}
