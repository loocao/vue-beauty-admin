<template>
  <div :class="prefixCls+'-shrinkable-menu'">
    <slot name="top"></slot>
    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script>
  import theme from 'style/theme'
  import SidebarMenu from './sidebar-menu'

  export default {
    name: 'ShrinkableMenu',
    components: { SidebarMenu },
    computed: {
      prefixCls: () => theme.prefixCls
    }
  }
</script>
