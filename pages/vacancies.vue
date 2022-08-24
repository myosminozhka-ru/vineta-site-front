<template>
  <div class="wrapper footerOnBottom" v-if="isDataLoaded">
    <!-- <osm-header /> -->
    <div class="header_padding">
      <nuxt-child />
    </div>
    <osm-footer />
    <osm-preloader />
  </div>
</template>
<script>
import {mapActions} from 'vuex';
  export default {
    name: 'AboutPage',
    components: {
      // OsmHeader: () => import('~/components/global/OsmHeader.vue'),
      OsmFooter: () => import('~/components/global/OsmFooter.vue'),    
      OsmPreloader: () => import('~/components/global/OsmPreloader.vue')      
    },
    data: () => ({
      isDataLoaded: false
    }),
    async fetch() {
        await this.addVacancies();
    },
    created() {
        this.addVacancies().then(result => {
          this.isDataLoaded = true;
        });
    },
    methods: {
        ...mapActions(['addVacancies'])
    }
  }

</script>

<style lang="scss" scoped>
  .header_padding {
    background: #fff;
  }
</style>
