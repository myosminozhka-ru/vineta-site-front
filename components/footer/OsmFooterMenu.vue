<template>
  <nav class="footer__menu">
    <ul class="opened isOpened">
      <li>
        <nuxt-link :to="localePath({ name: 'about' })">{{ $t('buttons.about') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath({ name: 'catalog' })">{{ $t('buttons.catalog') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath({ name: 'news' })">{{ $t('buttons.news') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath({ name: 'vacancies' })">{{ $t('buttons.vacancies') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath({ name: 'contacts' })">{{ $t('buttons.contacts') }}</nuxt-link>
      </li>
    </ul>
    <ul class="opened isOpened">
      <li>
        <nuxt-link :to="localePath({ name: 'partners' })">Заказчикам</nuxt-link>
      </li>
      <li>
        <a v-if="'PROPERIES' in getMainMore.downloads[0]" :href="$vareibles.remote + getDownloads['katalog-produktsii'].PROPERIES[0].VALUE.SRC">{{ $t('buttons.download_catalog') }}</a>
      </li>
      <li>
        <a href="//vinetaboat.ru/" target="_blank">Катера и лодки</a>
      </li>
    </ul>
    <ul class="opened isOpened">
      <li>
        <nuxt-link :to="localePath({ name: 'contacts' })">{{ $t('buttons.contacts') }}</nuxt-link>
      </li>
      <li>
        <span>{{ getContacts[0].ADRESS.VALUE }}</span>
      </li>
      <li>
        <a href="tel:78124935048">+7(812)493-50-48</a>
      </li>
      <li>
        <a href="mailto:info@vineta.ru">info@vineta.ru</a>
      </li>
      <li>
        <span>{{ $t('sections.footer.worktime') }}</span>
      </li>
      <div v-if="false" class="footer__top_socials hide_on_desktop">
        <a v-for="social in socials" :key="social.index" :href="social.link" target="_blank" class="footer__top_social">
          <img :src="social.icon" width="100%" alt="" />
        </a>
      </div>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    socials: [
      {
        icon: require('~/assets/img/socials/vk.svg'),
        link: '#',
      },
      {
        icon: require('~/assets/img/socials/vk.svg'),
        link: '#',
      },
      {
        icon: require('~/assets/img/socials/vk.svg'),
        link: '#',
      },
    ],
  }),
  computed: {
    ...mapGetters(['getMainMore']),
    ...mapGetters(['getDownloads']),
    ...mapGetters(['getContacts']),
  },
  mounted() {
    this.initCollapse()
  },
  methods: {
    initCollapse() {
      document.querySelectorAll('.footer__menu ul').forEach((item) => {
        item.querySelector('li:first-child').addEventListener('click', (event) => {
          event.target.closest('ul').classList.toggle('opened')
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  &__top_socials {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  &__top_social {
    font-size: 0;
    display: block;
    @media all and (max-width: 1280px) {
      width: 30px;
    }
    &:not(:last-child) {
      @media all and (max-width: 1280px) {
        margin-right: 10px;
      }
    }
  }
  &__menu {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media all and (max-width: 840px) {
      flex-direction: column;
    }
    ul {
      margin: 0;
      padding: 0;
      @media all and (max-width: 840px) {
        padding-top: 20px;
        width: 100%;
        border-top: 1px solid #b4b9c1;
      }
      &:not(:last-child) {
        margin-right: rem(160);
        @media all and (max-width: 1280px) {
          margin-right: 86px;
        }
        @media all and (max-width: 840px) {
          margin-right: 0;
          padding-bottom: 20px;
        }
      }
      li {
        display: block;
        &:not(:last-child) {
          margin-bottom: rem(15);
          @media all and (max-width: 1280px) {
            margin-bottom: 15px;
          }
          @media all and (max-width: 840px) {
            margin-bottom: 0;
          }
        }
        &:not(:first-child) {
          @media all and (max-width: 840px) {
            height: 0;
            overflow: hidden;
          }
        }
      }
      &.opened li:not(:first-child) {
        @media all and (max-width: 840px) {
          height: auto;
          margin-bottom: 15px;
        }
      }
      a {
        position: relative;
        transition: all 0.3s ease;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 100%;
          bottom: rem(-5);
          height: rem(1);
          background: #fff;
          transition: all 0.3s ease;
        }
        &:hover {
          color: #fff !important;
        }
        &:hover:after {
          right: 0;
        }
      }

      a,
      span {
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: rem(16);
        line-height: 140%;
        color: #d7dce1;
        @media all and (max-width: 1280px) {
          font-size: 16px;
        }
      }
      li:first-child {
        margin-bottom: rem(20);
        position: relative;
        cursor: pointer;
        @media all and (max-width: 1280px) {
          margin-bottom: 20px;
        }
        @media all and (max-width: 840px) {
          margin-bottom: 0;
          &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 16px;
            background: url('~assets/img/link_arrow.svg') 50% 50% no-repeat;
          }
        }
        a,
        span {
          font-style: normal;
          font-weight: 600;
          font-size: rem(24);
          line-height: 140%;
          color: #ffffff;
          @media all and (max-width: 1280px) {
            font-size: 18px;
          }
          @media all and (max-width: 840px) {
            pointer-events: none;
          }
        }
      }
      &.opened li:first-child {
        @media all and (max-width: 840px) {
          margin-bottom: 9px;
          &:after {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
}
</style>
