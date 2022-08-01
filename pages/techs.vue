<template>
  <div class="wrapper">
    <osm-header />
    <div class="full-page-indicators" :class="{'white': +activeIndex === 5}">
      <div class="indicator" v-for="(indicator, key) in sections" :key="indicator.index" :class="{'active': +activeIndex === +key}" @click="activeIndex = key"><span></span></div>
    </div>
    <div class="sections" :data-id="activeIndex">
      <osm-first-section :class="{'isActive': activeIndex === 0}" :style="`${activeIndex >= 0 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
      <osm-second-section :class="{'isActive': activeIndex === 1}" :style="`${activeIndex >= 1 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
      <osm-third-section :class="{'isActive': activeIndex === 2}" :style="`${activeIndex >= 2 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
      <osm-fourth-section :class="{'isActive': activeIndex === 3}" :style="`${activeIndex >= 3 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
      <osm-fiveth-section :class="{'isActive': activeIndex === 4}" :style="`${activeIndex >= 4 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
      <osm-sixth-section :class="{'isActive': activeIndex === 5}" :style="`${activeIndex >= 5 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
      <osm-seventh-section :class="{'isActive': activeIndex === 6}" :style="`${activeIndex >= 6 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
      <osm-eighth-section :class="{'isActive': activeIndex === 7}" :style="`${activeIndex >= 7 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
      <osm-footer-section :class="{'isActive': activeIndex === 8}" :style="`${activeIndex >= 8 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`"/>
      <osm-preloader />
    </div>
  </div>
</template>

<script>
// import $ from 'jquery';
// import 'pagepiling-js-version-kostyast/jquery.pagepiling.min.js';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'IndexPage',
  components: {
    OsmHeader: () => import('~/components/global/OsmHeader.vue'),
    OsmFirstSection: () => import('~/components/techs/OsmFirst.vue'),
    OsmSecondSection: () => import('~/components/techs/OsmSecond.vue'),
    OsmThirdSection: () => import('~/components/techs/OsmThird.vue'),
    OsmFourthSection: () => import('~/components/techs/OsmFourth.vue'),
    OsmFivethSection: () => import('~/components/techs/OsmFiveth.vue'),
    OsmSixthSection: () => import('~/components/techs/OsmSixth.vue'),
    OsmSeventhSection: () => import('~/components/techs/OsmSeventh.vue'),
    OsmEighthSection: () => import('~/components/techs/OsmEighth.vue'),
    OsmFooterSection: () => import('~/components/sections/OsmFooter.vue'),
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue')
  },
  data: () => ({
    activeIndex: null,
    sections: [],
    isInProgress: false,
  }),
  computed: {
    ...mapGetters(['getMain']),
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
    document.removeEventListener('mousewheel', () => {
      // console.log('mousewheel event removed')
    });
  },
  created() {
      this.addBreadcrumbs([
          {
              name: 'Главная',
              link: 'index',
              isLink: true
          },
          {
              name: 'Технология производства',
              isLink: false
          },
      ])
    },
  mounted() {
    setTimeout(() => {
      if (window.innerWidth <= 1024) {
        this.activeIndex = -1;
      }
      if (window.innerWidth > 1024) {
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
      }
    }, 500)
  },
  methods: {
    ...mapActions(['addBreadcrumbs']),
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
<style lang="scss" scoped>
.wrapper {
  background: #fff;
}
</style>