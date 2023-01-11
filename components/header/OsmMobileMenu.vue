<template>
  <div class="menu hide_off_mobile" :class="{ isOpened: getModals.mobileMenu.isOpened }" @click="closeMenu">
    <div class="menu__in" @click.stop>
      <div>
        <div class="menu__top">
          <div class="menu__langs">
            <nuxt-link :to="switchLocalePath('en')" :class="{ isActive: $i18n.locale === 'en' }">En</nuxt-link>
            <div class="delim">/</div>
            <nuxt-link :to="switchLocalePath('ru')" :class="{ isActive: $i18n.locale === 'ru' }">Ру</nuxt-link>
          </div>
          <div class="menu__closer" @click="closeMenu">
            <nuxt-img src="/closer.svg" width="100%" alt="" loading="lazy" />
          </div>
        </div>
        <nav class="menu__links">
          <ul>
            <li class="menu__links_li has-child">
              <div>
                <nuxt-link :to="localePath({ name: 'catalog' })" class="text">{{$t('menu.catalog')}}</nuxt-link>
                <div class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 11 7" fill="none">
                    <path d="M1 6L5.5 2L10 6" stroke="#172242" stroke-width="2" />
                  </svg>
                </div>
                <!-- <div v-if="link.childs" class="header__arrow">
                      <img :src="require(`~/assets/img/arrow.svg`)" alt="arrow">
                  </div> -->
              </div>
              <ul v-if="getCatalog">
                <li v-for="child in getCatalog" :key="child.index">
                  <a
                    :href="
                      localePath({
                        name: 'catalog-catalogId',
                        params: { catalogId: child.CODE },
                      })
                    "
                  >
                    <div class="icon">
                      <nuxt-img :src="$config.vareibles.remote + child.PICTURE" width="100%" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ child.NAME }}</div>
                  </a>
                </li>
              </ul>
            </li>
            <li v-for="link in menu" :key="link.index" class="menu__links_li" :class="{ 'has-child': link.childs, isOpened: link.isOpened }">
              <div>
                <nuxt-link :to="localePath({ name: link.url })" class="text">{{ link.text }}</nuxt-link>
                <div v-if="link.childs" class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 11 7" fill="none">
                    <path d="M1 6L5.5 2L10 6" stroke="#172242" stroke-width="2" />
                  </svg>
                </div>
                <!-- <div v-if="link.childs" class="header__arrow">
                      <img :src="require(`~/assets/img/arrow.svg`)" alt="arrow">
                  </div> -->
              </div>
              <ul v-if="link.childs">
                <li v-for="child in link.childs" :key="child.index">
                  <nuxt-link :to="localePath({ name: child.url })">
                    <div class="icon">
                      <nuxt-img :src="child.icon" alt="" loading="lazy" />
                    </div>
                    <div class="text">{{ child.text }}</div>
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <!-- <div class="menu__socials">
        <a :href="social.link" class="section__social" target="_blank" v-for="social in socials" :key="social.index">
            <img :src="social.icon" width="100%" alt="">
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      socials: [
        {
          icon: require('~/assets/img/socials/vk.svg'),
          link: '#',
        },
        {
          icon: require('~/assets/img/socials/telegram.svg'),
          link: '#',
        },
        {
          icon: require('~/assets/img/socials/twitter.svg'),
          link: '#',
        },
      ],
      menu: [
        {
          text: this.$t('menu.about'),
          isOpened: false,
          url: 'about',
          childs: [
            {
              url: 'techs',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: this.$t('menu.aboutChilds.techs'),
            },
            {
              url: 'history',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: this.$t('menu.aboutChilds.history'),
            },
            {
              url: 'partners',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: this.$t('menu.aboutChilds.partners'),
            },
            {
              url: 'licenses',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: this.$t('menu.aboutChilds.licenses'),
            },
          ],
        },
        {
          text: this.$t('menu.news'),
          isOpened: false,
          url: 'news',
        },
        {
          text: this.$t('menu.jobs'),
          isOpened: false,
          url: 'vacancies',
        },
        {
          text: this.$t('menu.contacts'),
          isOpened: false,
          url: 'contacts',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getModals']),
    ...mapGetters(['getCatalog']),
    ...mapGetters(['getMainMore']),
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.closeMenu()
      }
    },
  },
  mounted() {
    this.closeMenu()
    this.openChilds()
  },
  methods: {
    openChilds() {
      document.querySelectorAll('.menu__links_li.has-child > div > .arrow').forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault()
          item.closest('li').classList.toggle('isOpened')
        })
      })
    },
    ...mapActions(['toggleModal']),
    closeMenu() {
      this.toggleModal({
        isOpened: false,
        type: 'mobileMenu',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000;
  background: #172242;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  &.isOpened {
    opacity: 1;
    visibility: visible;
  }
  &__in {
    width: 100%;
    max-width: 345px;
    background: #f2f2f2;
    height: 100%;
    margin-left: auto;
    overflow: auto;
    transition: all 0.3s ease;
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &.isOpened &__in {
    transform: translateX(0);
  }

  &__top {
    padding: 26px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__closer {
    width: 24px;
    font-size: 0;
  }

  &__langs {
    display: flex;
    align-items: center;

    a {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      color: #172242;
      text-decoration: none;

      &.isActive {
        font-weight: 600;
      }
    }

    .delim {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      color: #172242;
      margin: 0 8px;
    }
  }
  &__links {
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    & > ul {
      padding: rem(15);
    }
    a {
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #555f76;
      display: flex;
      align-items: center;

      .icon {
        width: 30px;
        height: 30px;
        margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  &__links_li {
    padding: 30px 0;
    border-bottom: 1px solid #d7dce1;
    & > ul {
      padding-top: 30px;
      display: none;
      li {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
    &.isOpened > ul,
    a.nuxt-link-exact-active + ul {
      display: block;
    }
    .arrow {
      width: 22px;
      height: 22px;
      font-size: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 22px;
      position: relative;
      z-index: 10;
      svg {
        width: 10px;
      }
    }
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & > a {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #172242;
      justify-content: space-between;
    }
  }
  &__socials {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    a {
      mix-blend-mode: difference;
      display: block;
      width: 20px;
      height: 20px;
      font-size: 0;
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
}
</style>
