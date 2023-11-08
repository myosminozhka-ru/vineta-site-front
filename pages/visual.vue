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
  mounted() {
    this.$store.commit('setLoadingStatus', false)
    setTimeout(() => {
      this.$store.dispatch('setLoadingStatus', false)
    }, 2000)
  }
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
