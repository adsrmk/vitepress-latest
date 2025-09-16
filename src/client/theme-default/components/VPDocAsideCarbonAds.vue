<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'

defineProps<{
  carbonAds: DefaultTheme.CarbonAdsOptions
}>()


</script>

<template>
  <div class="VPDocAsideCarbonAds">
  </div>
</template>
