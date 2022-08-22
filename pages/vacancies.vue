<template>
  <div class="wrapper footerOnBottom">
    <!-- <osm-header /> -->
    <div class="header_padding">
      <nuxt-child />
    </div>
    <osm-footer />
    <osm-preloader />
  </div>
</template>
<script>
  export default {
    name: 'AboutPage',
    components: {
      // OsmHeader: () => import('~/components/global/OsmHeader.vue'),
      OsmFooter: () => import('~/components/global/OsmFooter.vue'),    
      OsmPreloader: () => import('~/components/global/OsmPreloader.vue')      
    },
  }

</script>

<style lang="scss" scoped>
  .header_padding {
    background: #fff;
  }
</style>
