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
        <nuxt-link :to="localePath({ name: 'partners' })">{{ $t('sections.footer.to_customers') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath({ name: 'licenses' })">{{ $t('sections.footer.licenses_and_certificates') }}</nuxt-link>
      </li>
      <li>
        <a v-if="getDownloadsCustomers.src" :href="getDownloadsCustomers.src" download="catalogue_Vineta" target="_black">{{ $t('buttons.download_catalog') }}</a>
      </li>
      <li>
        <a href="/files/vineta_book_TO_002.pdf" download target="_blank">{{ $t('sections.footer.heat_exchange_equipment') }}</a>
      </li>
      <li>
        <a href="/files/vineta_book_TP_rus_001.pdf" download target="_blank">{{ $t('sections.footer.fuel_preparation_equipment') }}</a>
      </li>
      <li>
        <a href="/files/Vineta_book_VGO_ru_002.pdf" download target="_blank">{{ $t('sections.footer.air_and_gas_cleaning_equipment') }}</a>
      </li>
      <li>
        <a href="/files/Vineta_book_VO_rus_ver012.pdf" download target="_blank">{{ $t('sections.footer.water_treatment_and_purification_equipment') }}</a>
      </li>
      <!-- <li v-for="link in []" :key="link.ID">
        <a :href="link.PROPERIES[0].SRC" :download="link.CODE" target="_black">{{ link.NAME }}</a>
      </li> -->
    </ul>
    <ul class="opened isOpened">
      <li>
        <nuxt-link :to="localePath({ name: 'contacts' })">{{ $t('buttons.contacts') }}</nuxt-link>
      </li>
      <li>
        <span>{{ getContacts[0]?.ADRESS?.VALUE }}</span>
      </li>
      <template v-if="getPhoneAndEmail.length">
        <li v-for="(contact, index) in getPhoneAndEmail" :key="index">
          <a :href=" contact.CODE === 'PHONE' ? `tel:${contact.VALUE}` : `mailto:${contact.VALUE}`">{{contact.VALUE}}</a>
        </li>
      </template>
      <li>
        <span>{{ $t('sections.footer.worktime') }}</span>
      </li>
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
    getDownloadsCustomers() {
      const produktsii = this.getDownloads['katalog-produktsii']
      const length = produktsii?.PROPERIES.length;
      const src = length ? produktsii?.PROPERIES[0]?.SRC : '';
      const name = length ? produktsii?.NAME : '';
      return {
        src,
        name,
      }
    },
    aboutDownloadLinks() {
      const filterArray = [];
      for (const key in this.getDownloads) {
        if (this.getDownloads[key].PROPERIES?.length > 1) {
          filterArray.push(this.getDownloads[key])
        }
      }
      return filterArray.filter((item) => item?.PROPERIES[1]?.VALUE === 'about_file');
    },
    /**
     * Получение телефона и почты
     * @function
     * @return {{}[] | []}
     */
    getPhoneAndEmail() {
      return this.getContacts[0]?.PROPERIES.filter((item) => item.CODE === 'PHONE' || item.CODE === 'EMAIL') || []
    }
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
      flex-shrink: 0;
      flex-grow: 1;
      flex-basis: 0;
      @media all and (max-width: 840px) {
        padding-top: 20px;
        width: 100%;
        border-top: 1px solid #b4b9c1;
      }
      &:not(:last-child) {
        margin-right: rem(130);
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
