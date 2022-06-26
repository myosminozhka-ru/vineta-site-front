<template>
  <div class="wrapper">
    <osm-header />
    <div class="full-page-indicators" :class="{'white': +activeIndex === 5}">
      <div class="indicator" v-for="(indicator, key) in sections" :key="indicator.index" :class="{'active': +activeIndex === +key}" @click="activeIndex = key"><span></span></div>
    </div>
    <div class="sections" :data-id="activeIndex">
      <osm-footer-section :class="{'isActive': activeIndex === 7}" :style="`${activeIndex >= 7 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`"/>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery';
// import 'pagepiling-js-version-kostyast/jquery.pagepiling.min.js';
import { mapGetters } from 'vuex';
export default {
  name: 'IndexPage',
  components: {
    OsmHeader: () => import('~/components/global/OsmHeader.vue'),
    OsmFooterSection: () => import('~/components/sections/OsmFooter.vue'),
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
      console.log('mousewheel event removed')
    });
  },
  mounted() {
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
  },
  methods: {
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