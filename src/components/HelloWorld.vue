<template>
  <h4 class="small">{{ t('subtitle') }}</h4>

  <article class="orange">
    <details>
      <summary class="bold large-text">
        {{ t('warning.title') }}
      </summary>
      <ul class="large-text">
        <li>{{ t('warning.items.security') }}</li>
        <li>{{ t('warning.items.usage') }}</li>
        <li>{{ t('warning.items.teaching.title') }}
          <ul>
            <li>{{ t('warning.items.teaching.items.encoding') }}</li>
            <li>{{ t('warning.items.teaching.items.prompt') }}</li>
            <li>{{ t('warning.items.teaching.items.literacy') }}</li>
          </ul>
        </li>
        <li>{{ t('warning.items.critical') }}</li>
      </ul>
    </details>
  </article>

  <h5 class="small">{{ t('forEducators') }}</h5>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
