import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const LANG = 'es-CO'

const resources = {
  'en-US': {
    translation: require('./locales/en-US.json')
  },
  'es-CO': {
    translation: require('./locales/es-CO.json')
  }
}
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: LANG,
    // debug: true,
    fallbackLng: 'es-CO',
    initImmediate: false
  })

export default i18n
