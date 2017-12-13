<template>
  <div :class="prefixCls+'-main'">
    <!-- 左侧导航菜单 -->
    <div :class="prefixCls+'-sidebar-menu'">
      <shrinkable-menu></shrinkable-menu>
    </div>

    <!-- 顶部导航菜单 -->
    <div :class="prefixCls+'-header'"></div>

    <!-- 内容 -->
    <div :class="prefixCls+'-page'">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import theme from 'style/theme'
  import ShrinkableMenu from 'components/shrinkable-menu'

  export default {
    components: { ShrinkableMenu },
    name: 'MainLayout',
    computed: {
      prefixCls: () => theme.prefixCls
    }
  }
</script>
