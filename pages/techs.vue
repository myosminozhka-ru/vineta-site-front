<template>
  <div class="wrapper">
    <!-- <osm-header /> -->
    <div class="full-page-indicators" :class="{ white: +activeIndex === 5 }">
      <div v-for="(indicator, key) in sections" :key="indicator.index" class="indicator" :class="{ active: +activeIndex === +key }" @click="activeIndex = key"><span></span></div>
    </div>
    <div class="sections" :data-id="activeIndex">
      <osm-first-section :class="{ isActive: activeIndex === 0 }"
                         :style="`${activeIndex >= 0 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`"
                         :data-object="getTechnology[0] || {}"
                         @toNext="goToNext" />
      <osm-second-section id="second"
                          :class="{ isActive: activeIndex === 1 }"
                          :style="`${activeIndex >= 1 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`"
                          :data-object="getTechnology[1] || {}" />
      <osm-third-section :class="{ isActive: activeIndex === 2 }"
                         :style="`${activeIndex >= 2 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`"
                         :data-object="getTechnology[2] || {}" />
      <osm-fourth-section :class="{ isActive: activeIndex === 3 }"
                          :style="`${activeIndex >= 3 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`"
                          :data-object="getTechnology[3] || {}" />
      <osm-fiveth-section :class="{ isActive: activeIndex === 4 }"
                          :style="`${activeIndex >= 4 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`"
                          :data-object="getTechnology[4] || {}" />
      <osm-sixth-section :class="{ isActive: activeIndex === 5 }"
                         :style="`${activeIndex >= 5 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`"
                         :data-object="getTechnology[5] || {}" />
      <osm-seventh-section :class="{ isActive: activeIndex === 6 }"
                           :style="`${activeIndex >= 6 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`"
                           :data-object="getTechnology[6] || {}" />
      <osm-eighth-section v-if="false" :class="{ isActive: activeIndex === 7 }" :style="`${activeIndex >= 7 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
      <osm-footer-section class="techs_footer" :class="{ isActive: activeIndex === 7 }" :style="`${activeIndex >= 7 ? 'transform: translate(0px, 0px);' : 'transform: translate(0px, 100vw);'}`" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TechsPage',
  components: {
    OsmFirstSection: () => import('~/components/techs/OsmFirst.vue'),
    OsmSecondSection: () => import('~/components/techs/OsmSecond.vue'),
    OsmThirdSection: () => import('~/components/techs/OsmThird.vue'),
    OsmFourthSection: () => import('~/components/techs/OsmFourth.vue'),
    OsmFivethSection: () => import('~/components/techs/OsmFiveth.vue'),
    OsmSixthSection: () => import('~/components/techs/OsmSixth.vue'),
    OsmSeventhSection: () => import('~/components/techs/OsmSeventh.vue'),
    OsmEighthSection: () => import('~/components/techs/OsmEighth.vue'),
    OsmFooterSection: () => import('~/components/sections/OsmFooter.vue'),
  },
  data: () => ({
    activeIndex: null,
    sections: [],
    isInProgress: false,
    isMounted: false
  }),
  async fetch({store, i18n}) {
    await store.dispatch('setLoadingStatus', true)

    if (!store.state.technology.technology) {
      await store.dispatch('addTechnology')
    }

    await store.dispatch('addBreadcrumbs', [
      {
        name: i18n.messages[i18n.locale].buttons.main,
        link: 'index',
        isLink: true,
      },
      {
        name: i18n.messages[i18n.locale].buttons.techs,
        isLink: false,
      },
    ])

    store.dispatch('setLoadingStatus', false)
  },
  head() {
    return {
      title: this.getSeo.techs.SEO.META.TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getSeo.techs.SEO.META.DESCRIPTION,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getSeo.techs.SEO.META.KEYWORDS,
        },
      ],
    }
  },
  computed: {
    // ...mapGetters(['getMain']),
    ...mapGetters(['getSeo', 'getTechnology']),
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
    document.removeEventListener('mousewheel', () => {
    })
  },
  mounted() {
    if (window.innerWidth <= 1024) {
      this.activeIndex = -1
      this.scrollTo()
    }

    if (window.innerWidth > 1024) {
      const stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
          clearInterval(stateCheck)
          setTimeout(() => {
            this.activeIndex = 0
            this.sections = document.querySelectorAll('.section')
            this.activeIndex = 0
            this.sections.forEach((item) => {
              if (item.querySelector('.section__top--tech') && item.querySelector('.section__middle--tech')) {
                const top = item.querySelector('.section__top--tech').clientHeight
                const middle = item.querySelector('.section__middle--tech').clientHeight
                item.querySelector('.section__bottom--tech').style.height = `calc(100% - ${top}px - ${middle}px)`
              }
            })
            document.addEventListener('mousewheel', (event) => {
              if (event.wheelDelta > 0 || event.detail < 0) {
                this.change('up')
                this.isInProgress = true
              } else {
                this.change('down')
                this.isInProgress = true
              }
            })

            if (this.$route.hash === '#second') {
              this.activeIndex = 1
            }
          }, 100)
        }
      }, 1000)
    }
  },
  methods: {
    ...mapActions(['addBreadcrumbs', 'setLoadingStatus']),
    change(direction) {
      if (this.isInProgress) return

      if (direction === 'down' && this.activeIndex < this.sections.length - 1) {
        this.activeIndex++
      }
      if (direction === 'up') {
        this.activeIndex--
      }
      if (this.activeIndex < 1) {
        this.activeIndex = 0
      }
      setTimeout(() => {
        this.isInProgress = false
      }, 500)
    },
    scrollTo() {
      const sectionBottom = document.querySelector('.section__bottom--tech .title')
      const elementPosition = sectionBottom.getBoundingClientRect().top

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth',
      })
    },
    goToNext() {
      if (window.innerWidth > 1024) {
        this.activeIndex = 1
      } else {
        this.scrollTo()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  background: #fff;
}

:deep(.texts) {
  position: relative;
  z-index: 2;
  height: 100%;
  overflow: auto;
}
:deep(.title) {
  font-style: normal;
  font-weight: 600;
  font-size: rem(30);
  margin-bottom: rem(30);
  line-height: 140%;
  color: #172242;
  @media all and (max-width: 1280px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
}
:deep(.list) {
  padding: 0;
  margin: 0;
  padding-left: rem(24);
  @media all and (max-width: 1280px) {
    padding-left: 24px;
  }
  &:not(:last-child) {
    margin-bottom: rem(40);
    @media all and (max-width: 1280px) {
      margin-bottom: 40px;
    }
  }
  li {
    font-style: normal;
    font-weight: 400;
    font-size: rem(18);
    line-height: 140%;
    color: #555f76;
    @media all and (max-width: 1280px) {
      margin-bottom: 40px;
      font-size: 16px;
    }
    &:not(:last-child) {
      margin-bottom: rem(10);
      @media all and (max-width: 1280px) {
        margin-bottom: 10px;
      }
    }
  }
}
:deep(.subtitle) {
  font-style: normal;
  font-weight: 600;
  font-size: rem(18);
  line-height: 140%;
  color: #172242;
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
  &:not(:last-child) {
    margin-bottom: rem(20);
    @media all and (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }
}
:deep(.text) {
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: rem(18);
  line-height: 140%;
  color: #555f76;
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
  &:not(:last-child) {
    margin-bottom: rem(20);
    @media all and (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }
}
:deep(.line) {
  height: rem(2);
  background: #d7dce1;
  border-radius: 20px;
  @media all and (max-width: 1280px) {
    height: 2px;
  }
  &:not(:last-child) {
    margin-bottom: rem(20);
    @media all and (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }
}

</style>
