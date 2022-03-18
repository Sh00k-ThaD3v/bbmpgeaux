<template>
  <div
    id="tooltip"
    role="tooltip"
    class="
      px-2 py-1
      text-xs font-medium
      bg-gray-600 text-white
      border border-gray-700
      rounded
    ">
    This is a demo tooltip
    <div v-if="arrow" id="arrow" data-popper-arrow></div>
  </div>
  <span id="button" aria-describedby="tooltip">
    <slot></slot>
  </span>
</template>

<script>
import { onMounted } from 'vue'
import { createPopper } from '@popperjs/core'
import { makeComponentName } from '../../../utils/make.js'

export const name = makeComponentName('popper')

export default {
  name,
  props: {
    arrow: { type: Boolean, default: false }
  },
  setup () {
    onMounted(() => {
      const button = document.querySelector('#button')
      const tooltip = document.querySelector('#tooltip')
      const popperInstance = createPopper(button, tooltip, {
        placement: 'top',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            }
          }
        ]
      })
      function show() {
        // Make the tooltip visible
        tooltip.setAttribute('data-show', '');

        // Enable the event listeners
        popperInstance.setOptions({
          modifiers: [{ name: 'eventListeners', enabled: true }],
        });

        // Update its position
        popperInstance.update();
      }

      function hide() {
        // Hide the tooltip
        tooltip.removeAttribute('data-show');

        // Disable the event listeners
        popperInstance.setOptions({
          modifiers: [{ name: 'eventListeners', enabled: false }],
        });
      }

      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];

      showEvents.forEach(event => {
        button.addEventListener(event, show);
      });

      hideEvents.forEach(event => {
        button.addEventListener(event, hide);
      });
    })
  }
}
</script>

<style>
#tooltip {
  z-index: 999;
  display: none;
}
#tooltip[data-show] {
  display: block;
}
#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
}

#tooltip[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

#tooltip[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^='right'] > #arrow {
  left: -4px;
}
</style>
