<template>
  <the-section title="iconify">
    <a href="https://iconify.design/icon-sets/" target="_blank">
      <d2-button
        icon="akar-icons:link-chain"
        icon-right="akar-icons:arrow-right"
        round-right
      >
        Browse Icons
      </d2-button>
    </a>
  </the-section>
  <the-section title="toggle">
    <d2-button @click="toggle">Toggle arrow</d2-button>
  </the-section>
  <the-section title="base">
    <d2-icon icon="mdi:account-circle"></d2-icon>
    <d2-icon icon="mdi:arrow-left"></d2-icon>
    <d2-icon :icon="`mdi:arrow-${ arrow }`"></d2-icon>
  </the-section>
  <the-section title="text">
    <p class="text-2xl">
      text<d2-icon icon="mdi:account-circle"></d2-icon>text
    </p>
  </the-section>
  <the-section title="color by class">
    <d2-icon class="text-indigo-500" icon="mdi:account-circle"></d2-icon>
    <d2-icon class="text-indigo-500" icon="mdi:arrow-left"></d2-icon>
    <d2-icon class="text-indigo-500" :icon="`mdi:arrow-${ arrow }`"></d2-icon>
  </the-section>
  <the-section title="color by style">
    <d2-icon style="color: #6366F1;" icon="mdi:account-circle"></d2-icon>
    <d2-icon style="color: #6366F1;" icon="mdi:arrow-left"></d2-icon>
    <d2-icon style="color: #6366F1;" :icon="`mdi:arrow-${ arrow }`"></d2-icon>
  </the-section>
  <the-section title="size by class">
    <d2-icon class="text-4xl" icon="mdi:account-circle"></d2-icon>
    <d2-icon class="text-4xl" icon="mdi:arrow-left"></d2-icon>
    <d2-icon class="text-4xl" :icon="`mdi:arrow-${ arrow }`"></d2-icon>
  </the-section>
  <the-section title="size by style">
    <d2-icon style="font-size: 2.25rem; line-height: 2.5rem;" icon="mdi:account-circle"></d2-icon>
    <d2-icon style="font-size: 2.25rem; line-height: 2.5rem;" icon="mdi:arrow-left"></d2-icon>
    <d2-icon style="font-size: 2.25rem; line-height: 2.5rem;" :icon="`mdi:arrow-${ arrow }`"></d2-icon>
  </the-section>
  <the-section title="slot">
    <d2-icon>mdi:account-circle</d2-icon>
    <d2-icon>mdi:arrow-left</d2-icon>
    <d2-icon>mdi:arrow-{{ arrow }}</d2-icon>
  </the-section>
  <the-section title="icon collection">
    <d2-icon collection="mdi" icon="account-circle"></d2-icon>
    <d2-icon collection="mdi" icon="arrow-left"></d2-icon>
    <d2-icon collection="mdi" :icon="`arrow-${ arrow }`"></d2-icon>
  </the-section>
  <the-section title="icon collection icon group">
    <d2-icon-group collection="mdi">
      <d2-icon icon="account-circle"></d2-icon>
      <d2-icon icon="arrow-left"></d2-icon>
      <d2-icon :icon="`arrow-${ arrow }`"></d2-icon>
    </d2-icon-group>
  </the-section>
  <the-section title="cobertura icon group collection">
    <d2-icon-group collection="mdi">
      <d2-icon icon="account-circle"></d2-icon>
      <d2-icon icon="arrow-left"></d2-icon>
      <d2-icon :icon="`arrow-${ arrow }`"></d2-icon>
      <d2-icon icon="ri:github-fill"></d2-icon>
      <d2-icon collection="ri" icon="github-fill"></d2-icon>
    </d2-icon-group>
  </the-section>
  <the-section title="color">
    <d2-icon icon="flat-color-icons:google"></d2-icon>
    <d2-icon icon="flat-color-icons:steam"></d2-icon>
  </the-section>
  <the-section title="spin">
    <d2-icon icon="mdi:loading" spin></d2-icon>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const option = ['left', 'right']
    let index = 0

    const arrow = ref(option[index])

    function toggle () {
      index = Math.abs(index - 1)
      arrow.value = option[index]
    }

    return {
      arrow,
      toggle
    }
  }
}
</script>
