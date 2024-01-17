<template>
  <div class="header_padding">
    <div class="wrapper footerOnBottom">
      <div class="visual">
        <VisualScene :is-start="true" :format="'obj'"/>
      </div>
      <osm-footer />
    </div>
  </div>
</template>
<script>
export default {
  name: 'VisualPage',
  components: {
    VisualScene: () => import('~/components/visual/VisualScene.vue'),
    OsmFooter: () => import('~/components/global/OsmFooter.vue'),
  },
  async fetch({store}) {
    await store.dispatch('setLoadingStatus', true)
    await store.dispatch('setLoadingStatus', false)
  },
}
</script>

<style lang="scss" scoped>
.header_padding {
  background: #fff;
}
.visual {
  height: 100vh;
  width: 100%;
  position: relative;
}
</style>
