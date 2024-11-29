<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const changeLocale = (event: Event) => {
  locale.value = (event.target as HTMLSelectElement).value
}
</script>

<template>
  <header class="responsive transparent middle-align">
    <nav>
      <h5 class="bold">Hide Prompt</h5>
      <div class="max"></div>
      <div class="field absolute border top right suffix">
        <select v-model="locale" @change="changeLocale">
          <option value="en" :selected="locale === 'en'">EN</option>
          <option value="fr" :selected="locale === 'fr'">FR</option>
        </select>
        <i>arrow_drop_down</i>
      </div>
    </nav>
  </header>
</template>
