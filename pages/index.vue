<template>
  <div class="wrapper">
    <osm-header />
    <div class="sections">
      <osm-first-section :class="{'isActive': activeIndex === 0}" />
      <osm-second-section :class="{'isActive': activeIndex === 1}" />
      <osm-third-section :class="{'isActive': activeIndex === 2}" />
      <osm-fourth-section :class="{'isActive': activeIndex === 3}" />
      <osm-fiveth-section :class="{'isActive': activeIndex === 4}"/>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery';
// import 'pagepiling-js-version-kostyast/jquery.pagepiling.min.js';
export default {
  name: 'IndexPage',
  components: {
    OsmHeader: () => import('~/components/global/OsmHeader.vue'),
    OsmFirstSection: () => import('~/components/sections/OsmFirst.vue'),
    OsmSecondSection: () => import('~/components/sections/OsmSecond.vue'),
    OsmThirdSection: () => import('~/components/sections/OsmThird.vue'),
    OsmFourthSection: () => import('~/components/sections/OsmFourth.vue'),
    OsmFivethSection: () => import('~/components/sections/OsmFiveth.vue'),
  },
  data: () => ({
    activeIndex: 0,
    sections: [],
    isInProgress: false,
  }),
  computed: {
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
    this.sections = document.querySelectorAll('.section.section__item');

    document.addEventListener('mousewheel', (event) => {
      if (this.isInProgress) return;
      if (event.wheelDelta > 0 || event.detail < 0) {
        this.change('up');
        this.isInProgress = true;
      } else {
        this.change('down');
        this.isInProgress = true;
      }
    });
  },
  methods: {
    change(direction) {
      if (this.activeIndex < 1) {
        this.activeIndex = 1;
      }
      if (direction === 'down' && this.activeIndex < this.sections.length - 1) {
        this.activeIndex++;
      }
      this.$gsap.to(this.sections[this.activeSection], 0.5, {
        y: direction === 'down' ? 0 : '100vh',
        onComplete: () => {
          console.log(this.activeIndex);
          this.isInProgress = false;
        }
      });
      
      if (direction === 'up' && this.activeIndex > 1) {
        this.activeIndex--;
      }
    },
  }
}
</script>
