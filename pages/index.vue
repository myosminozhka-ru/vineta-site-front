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
        console.log(newIndex);
        if (newIndex < 0) {
          this.activeIndex = 0;
        } else if (newIndex > this.sections.length) {
          this.activeIndex = this.sections.length - 1;
        } else {
          this.activeIndex = newIndex;
        }
        console.log('this.activeIndex is ' + this.activeIndex);
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
      

      console.log('change');
      if (event.wheelDelta > 0 || event.detail < 0) {
        this.isInProgress = true;
        this.change('up');
        this.activeSection--;
      } else {
        this.isInProgress = true;
        this.activeSection++;
        this.change('down');
      }
    });
  },
  methods: {
    change(direction) {
      console.log(direction);
      this.$gsap.to(this.sections[this.activeSection], 1, {
        y: () => {
          if (direction === 'up' && this.activeSection !== 0) {
            return '100vh';
          } else if (direction === 'down' && this.activeSection !== 0) {
            return 0;
          } else {
            return 0;
          }
        },
        onComplete: () => {
          this.isInProgress = false;
          console.log('onComplete');
        }
      });
    },
  }
}
</script>
