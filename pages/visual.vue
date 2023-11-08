<template>
  <div class="header_padding">
    <div class="wrapper footerOnBottom">
      <div class="visual">
        <OsmScena :is-start="true"/>
      </div>
      <osm-footer />
    </div>
  </div>
</template>
<script>
import Scene from '~/components/visual/SceneV.vue'
export default {
  name: 'VisualPage',
  components: {
    OsmScena: Scene,
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
