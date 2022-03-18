<template>
  <h2 class="mb-4 text-lg text-gray-500 select-none">Example</h2>
  <d2-button-group size="small">
    <d2-button
      v-for="(group, groupIndex) in groupNames"
      :key="group"
      color="gray"
      :active="groupActiveIndex === groupIndex"
      @click="onClickGroup(groupIndex)"
      plain
    >
      {{ group }}
    </d2-button>
  </d2-button-group>
  <hr class="my-4">
  <d2-button-group size="small">
    <d2-button
      v-for="item in groupActiveMenu"
      :key="item"
      color="gray"
      class="mb-2"
      :active="$route.path === item"
      @click="onClickLink(item)"
      plain
    >
      {{ label(item) }}
    </d2-button>
  </d2-button-group>
  <hr class="mt-2">
  <router-view></router-view>
</template>

<script>
import routes from 'virtual:generated-pages'
import { groupBy } from 'lodash-es'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

function make (source, path = '') {
  const _path = (path ? `${path}/` : '') + source.path
  const result = {
    path: _path
  }
  if (source.children) {
    result.children = source.children.map(e => make(e, _path))
  }
  return result
}

const group = groupBy(
  (
    (
      routes
        .map(e => make(e))
        .find(e => e.path === '/example') || {}
    )
      .children || []
  )
    .map(e => e.path),
  menu => menu.split('/')[2]
)

const groupNames = Object.keys(group).sort()

export default {
  setup () {
    const route = useRoute()
    const router = useRouter()

    const groupActiveNameInRoute = route.path.replace(new RegExp('/example/'), '').split('/')[0] || ''

    const groupActiveIndex = ref(groupNames.findIndex(e => e === groupActiveNameInRoute) || 0)

    const groupActiveName = computed(() => groupNames[groupActiveIndex.value])

    const groupActiveMenu = computed(() => group[groupActiveName.value])

    function label (text) {
      return text.replace(new RegExp(`/example/${groupActiveName.value}/`), '')
    }

    function onClickGroup (groupIndex) {
      groupActiveIndex.value = groupIndex
      onClickLink(groupActiveMenu.value[0])
    }

    function onClickLink (to) {
      router.push(to)
    }
    
    return {
      groupNames,
      groupActiveIndex,
      groupActiveMenu,
      label,
      onClickGroup,
      onClickLink
    }
  }
}
</script>
