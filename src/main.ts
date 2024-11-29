import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import './style.css'
import App from './App.vue'

import en from './i18n/en'
import fr from './i18n/fr'

// Détecte la langue du navigateur
function getBrowserLocale(): string {
  // Récupère la langue du navigateur
  const navigatorLocale =
    navigator.languages?.[0] || // Chrome / Firefox
    navigator.language || // Autres navigateurs
    'en' // Fallback

  // Extrait les deux premiers caractères pour avoir le code de langue
  const locale = navigatorLocale.split('-')[0]

  // Vérifie si la langue est supportée, sinon retourne 'en'
  return ['en', 'fr'].includes(locale) ? locale : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(), // Utilise la langue détectée
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
