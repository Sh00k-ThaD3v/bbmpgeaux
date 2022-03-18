<template>
  <d2-flex class="header__button header__button--icon" tag="button" center>
    <d2-icon name="icon-park-outline:message"/>
  </d2-flex>
</template>

<script>
import { makeNameByUrl } from '@d2-framework/d2-utils'

export default {
  name: makeNameByUrl(import.meta.url)
}
</script>
