<template>
  <div class="wrapper">
    
    <!-- <pre style="font-size: 15rem;">{{getMainMore}}</pre> -->
    <div class="full-page-indicators" :class="{'white': +activeIndex === 5}">
      <div class="indicator" v-for="(indicator, key) in sections" :key="indicator.index" :class="{'active': +activeIndex === +key}" @click="activeIndex = key"><span></span></div>
    </div>
    <div class="sections" :data-id="activeIndex">
      <osm-first-section :isMounted="activeIndex === 0" :class="{'isActive': activeIndex === 0}" :style="`${activeIndex >= 0 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-second-section :isMounted="activeIndex === 1" :class="{'isActive': activeIndex === 1}" :style="`${activeIndex >= 1 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-third-section :class="{'isActive': activeIndex === 2}" :style="`${activeIndex >= 2 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`"/>
      <osm-fourth-section :class="{'isActive': activeIndex === 3}" :style="`${activeIndex >= 3 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`"/>
      <osm-fiveth-section :class="{'isActive': activeIndex === 4}" :style="`${activeIndex >= 4 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`"/>
      <osm-sixth-section :class="{'isActive': activeIndex === 5}" :style="`${activeIndex >= 5 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`"/>
      <osm-seventh-section :class="{'isActive': activeIndex === 6}" :style="`${activeIndex >= 6 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`"/>
      <osm-footer-section :class="{'isActive': activeIndex === 7}" :style="`${activeIndex >= 7 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`"/>
      <osm-preloader />
      <ClientOnly>
        <LightGallery :images="imagesGallery" :index="galleryIndex" :disable-scroll="true" @close="setGalleryIndex(null)" v-if="isMounted" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery';
// import 'pagepiling-js-version-kostyast/jquery.pagepiling.min.js';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'IndexPage',
  components: {
    // OsmHeader: () => import('~/components/global/OsmHeader.vue'),
    OsmFirstSection: () => import('~/components/sections/OsmFirst.vue'),
    OsmSecondSection: () => import('~/components/sections/OsmSecond.vue'),
    OsmThirdSection: () => import('~/components/sections/OsmThird.vue'),
    OsmFourthSection: () => import('~/components/sections/OsmFourth.vue'),
    OsmFivethSection: () => import('~/components/sections/OsmFiveth.vue'),
    OsmSixthSection: () => import('~/components/sections/OsmSixth.vue'),
    OsmSeventhSection: () => import('~/components/sections/OsmSeventh.vue'),
    OsmFooterSection: () => import('~/components/sections/OsmFooter.vue'),
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue')
  },
  data: () => ({
    activeIndex: -1,
    sections: [],
    isInProgress: false,
    isMounted: false
  }),
  computed: {
    ...mapGetters(['getMain']),
    ...mapGetters(['getMainMore']),
    ...mapGetters(['getLicenses']),
    ...mapGetters(['galleryIndex']),
    imagesGallery() {
        return this.getLicenses.map(item => {
            return this.$vareibles.remote + item.PREVIEW_PICTURE;
        });
    },
    activeSection: {
      get() {
        return this.activeIndex;
      },
      set(newIndex) {
        this.activeIndex = newIndex;
      }
    }
  },
  beforeDestroy() {
    // console.log('beforeDestroy')
    document.removeEventListener('mousewheel', function() {
      // console.log('mousewheel event removed')
    });
  },
  mounted() {
    this.isMounted = true;
    // console.log('getMainMore', this.getMainMore)
    if (window.innerWidth <= 1024) {
      this.activeIndex = -1;
    }
    if (window.innerWidth > 1024) {
      const stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
          clearInterval(stateCheck);
          setTimeout(() => {
        this.activeIndex = 0;
            this.sections = document.querySelectorAll('.section');
            this.activeIndex = 0;
            document.addEventListener('mousewheel', (event) => {
              if (event.wheelDelta > 0 || event.detail < 0) {
                this.change('up');
                this.isInProgress = true;
              } else {
                this.change('down');
                this.isInProgress = true;
              }
            });
          }, 1000);
          }
      }, 100);
    }
  },
  methods: {
    ...mapActions(['setGalleryIndex']),
    change(direction) {
      if (this.isInProgress) return;
      
      if (direction === 'down' && this.activeIndex < this.sections.length - 1) {
        this.activeIndex++;
      }
      if (direction === 'up') {
        this.activeIndex--;
      }
      if (this.activeIndex < 1) {
        this.activeIndex = 0;
      }
      setTimeout(() => {
        this.isInProgress = false;
      }, 500);
    },
  }
}
</script>