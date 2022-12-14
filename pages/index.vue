<template>
  <div class="wrapper">
    <div class="full-page-indicators" :class="{ white: +activeIndex === 5 }">
      <div v-for="(indicator, key) in sections" :key="indicator.index" class="indicator" :class="{ active: +activeIndex === +key }" @click="goToSlide(key)">
        <span></span>
      </div>
    </div>

    <div class="sections" :data-id="activeIndex">
      <osm-first-section :is-mounted="activeIndex === 0" :class="{ isActive: activeIndex === 0 }" :style="`${activeIndex >= 0 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" :is-start="activeIndex === 0" />
      <osm-second-section :is-mounted="activeIndex === 1" :class="{ isActive: activeIndex === 1 }" :style="`${activeIndex >= 1 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" :is-start="activeIndex === 1" />
      <osm-third-section :is-mounted="activeIndex === 2" :class="{ isActive: activeIndex === 2 }" :style="`${activeIndex >= 2 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" :is-active="activeIndex === 2" />
      <osm-fourth-section :class="{ isActive: activeIndex === 3 }" :style="`${activeIndex >= 3 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-fiveth-section :is-active="activeIndex === 4" :class="{ isActive: activeIndex === 4 }" :style="`${activeIndex >= 4 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-sixth-section :is-active="activeIndex === 5" :class="{ isActive: activeIndex === 5 }" :style="`${activeIndex >= 5 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-seventh-section :class="{ isActive: activeIndex === 6 }" :style="`${activeIndex >= 6 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />
      <osm-footer-section :is-active="activeIndex === 7" :class="{ isActive: activeIndex === 7 }" :style="`${activeIndex >= 7 ? 'transform: translate(0px, 0px);' : 'transform: translate(100vw, 0px);'}`" />

      <ClientOnly>
        <LightGallery :images="imagesGallery" :index="galleryIndex" :disable-scroll="true" @close="setGalleryIndex(null)" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  components: {
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
  }),

  async fetch({store}) {
    await store.dispatch('setLoadingStatus', true)

    if (!store.state.main.length) {
      await store.dispatch('addMain')
    }

    await store.dispatch('setLoadingStatus', false)
  },

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
    ...mapGetters(['getLicenses']),
    ...mapGetters(['galleryIndex']),
    ...mapGetters(['getSeo']),
    imagesGallery() {
      return this.getLicenses.map((item) => {
        return this.$config.vareibles.remote + item.PREVIEW_PICTURE
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
                // ???????????????????? ?????????????? ??????????????
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
  },
  methods: {
    ...mapActions([
      'setGalleryIndex',
      'setLoadingStatus',
      'addMainMore',
      'addLicenses',
      'addCatalog',
      'addNews',
    ]),
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
          this.goToSlide(this.activeIndex + 1)
        }, 300)
      }
      if (direction === 'up') {
        setTimeout(() => {
          this.activeIndex > 1 ? this.goToSlide(this.activeIndex - 1) : this.goToSlide(0)
        }, 300)
      }
      setTimeout(() => {
        this.isInProgress = false
      }, 2000)
    },
    goToSlide(number) {
      if (number === 4 && (!Object.keys(this.$store.state.main2).length || !this.$store.state.licenses.length)) {
        Promise.all([
          this.addMainMore(),
          this.addLicenses()
        ].map(p => p.catch(x => console.error(x))))
          .then(r => {
            this.activeIndex = number;
          }
        );
        return;
      }

      if (number === 6 && !this.$store.state.news.length) {
        this.addNews().then(() => {
          this.activeIndex = number;
        })
        return;
      }

      this.activeIndex = number;
    }
  },
}
</script>
