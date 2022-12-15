<template>
  <div class="wrapper">

    <osm-preloader :class="[{'preloader--is-hidden': isMounted}]" />

    <div v-show="isMounted" class="full-page-indicators" :class="{ white: +activeIndex === 5 }">
      <div v-for="(indicator, key) in sections" :key="indicator.index" class="indicator" :class="{ active: +activeIndex === +key }" @click="activeIndex = key">
        <span></span>
      </div>
    </div>

    <div v-show="isMounted" class="sections" :data-id="activeIndex">
      <osm-first-section :is-mounted="activeIndex === 0" :class="{ isActive: activeIndex === 0 }" :style="`${activeIndex >= 0 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" :is-start="activeIndex === 0" />
      <osm-second-section :is-mounted="activeIndex === 1" :class="{ isActive: activeIndex === 1 }" :style="`${activeIndex >= 1 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" :is-start="activeIndex === 1" />
      <osm-third-section :is-mounted="activeIndex === 2" :class="{ isActive: activeIndex === 2 }" :style="`${activeIndex >= 2 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" :is-active="activeIndex === 2" />
      <osm-fourth-section :class="{ isActive: activeIndex === 3 }" :style="`${activeIndex >= 3 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-fiveth-section :is-active="activeIndex === 4" :class="{ isActive: activeIndex === 4 }" :style="`${activeIndex >= 4 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-sixth-section :is-active="activeIndex === 5" :class="{ isActive: activeIndex === 5 }" :style="`${activeIndex >= 5 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-seventh-section :class="{ isActive: activeIndex === 6 }" :style="`${activeIndex >= 6 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-footer-section :is-active="activeIndex === 7" :class="{ isActive: activeIndex === 7 }" :style="`${activeIndex >= 7 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />

      <ClientOnly>
        <LightGallery v-if="isMounted" :images="imagesGallery" :index="galleryIndex" :disable-scroll="true" @close="setGalleryIndex(null)" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  components: {
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue'),
    OsmFirstSection: () => import('~/components/sections/OsmFirst.vue'),
    OsmSecondSection: () => import('~/components/sections/OsmSecond.vue'),
    OsmThirdSection: () => import('~/components/sections/OsmThird.vue'),
    OsmFourthSection: () => import('~/components/sections/OsmFourth.vue'),
    OsmFivethSection: () => import('~/components/sections/OsmFiveth.vue'),
    OsmSixthSection: () => import('~/components/sections/OsmSixth.vue'),
    OsmSeventhSection: () => import('~/components/sections/OsmSeventh.vue'),
    OsmFooterSection: () => import('~/components/sections/OsmFooter.vue'),
  },
  data: () => ({
    activeIndex: -1,
    sections: [],
    isInProgress: false,
    isMounted: false,
  }),
  head() {
    return {
      title: this.getSeo.main.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.main.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.main.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getMain']),
    ...mapGetters(['getMainMore']),
    ...mapGetters(['getLicenses']),
    ...mapGetters(['galleryIndex']),
    ...mapGetters(['getSeo']),
    imagesGallery() {
      return this.getLicenses.map((item) => {
        return this.$vareibles.remote + item.PREVIEW_PICTURE
      })
    },
    activeSection: {
      get() {
        return this.activeIndex
      },
      set(newIndex) {
        this.activeIndex = newIndex
      },
    },
  },
  beforeDestroy() {
    document.removeEventListener('mousewheel', function () {})
  },
  mounted() {
    if (window.innerWidth <= 1024) {
      this.activeIndex = -1
    }
    if (window.innerWidth > 1024) {
      const stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
          clearInterval(stateCheck)
          setTimeout(() => {
            this.activeIndex = 0
            this.sections = document.querySelectorAll('.section')
            this.activeIndex = 0
            if (document.addEventListener) {
              if ('onwheel' in document) {
                // IE9+, FF17+, Ch31+
                document.addEventListener('wheel', this.onWheel)
              } else if ('onmousewheel' in document) {
                // устаревший вариант события
                document.addEventListener('mousewheel', this.onWheel)
              } else {
                // Firefox < 17
                document.addEventListener('MozMousePixelScroll', this.onWheel)
              }
            } else {
              // IE8-
              document.attachEvent('onmousewheel', this.onWheel)
            }
          }, 1000)
        }
      }, 100)
    }

    this.$nextTick().then(() => {
      setTimeout(() => {
        this.isMounted = true
      }, 1000)
    })
  },
  methods: {
    ...mapActions(['setGalleryIndex']),
    ...mapActions(['addMain']),
    onWheel(event) {
      event = event || window.event
      const delta = event.deltaX || event.detail || event.wheelDelta
      if (delta > 0 || event.detail < 0) {
        this.change('up')
        this.isInProgress = true
      } else {
        this.change('down')
        this.isInProgress = true
      }
    },
    change(direction) {
      if (this.isInProgress) return

      if (direction === 'down' && this.activeIndex < this.sections.length - 1) {
        setTimeout(() => {
          this.activeIndex++
        }, 300)
      }
      if (direction === 'up') {
        setTimeout(() => {
          this.activeIndex > 1 ? this.activeIndex-- : (this.activeIndex = 0)
        }, 300)
      }
      setTimeout(() => {
        this.isInProgress = false
      }, 2000)
    },
  },
}
</script>
