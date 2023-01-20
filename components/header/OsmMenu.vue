<template>
  <nav class="header__menu" @mouseleave="closeModals">
    <!-- <pre style="font-size: 15rem">
      {{ getMainMore.downloads }}
    </pre> -->
    <ul class="header__ul hide_on_mobile">
      <li class="header__li has-child" :data-modal-to-open="123" @mouseenter.stop="openModal(123)">
        <nuxt-link class="header__link" :to="localePath({ name: 'catalog' })" @click.stop="">
          <span>{{ $t('buttons.catalog') }}</span>
          <div class="header__arrow">
            <nuxt-img src="/arrow.svg" alt="arrow" loading="lazy" />
          </div>
        </nuxt-link>
      </li>
      <li v-for="(link, key) in menu" :key="link.index" class="header__li" :data-modal-to-open="key" :class="{ 'has-child': link.childs }" @mouseenter.stop="openModal(key)">
        <nuxt-link class="header__link" :to="localePath({ name: link.url })" @click.stop="">
          <span>{{ link.text }}</span>
          <div v-show="link.childs" class="header__arrow">
            <nuxt-img src="/arrow.svg" alt="arrow" loading="lazy" />
          </div>
        </nuxt-link>
      </li>
    </ul>
    <div class="menu__modals hide_on_mobile">
      <div class="menu__modal" :data-modal-id="123">
        <div class="menu__modal_top" @mousewheel.stop>
          <osm-h2 class="menu__modal_title">{{ $t('menu.products') }}</osm-h2>

          <ul class="menu__modal_menu menu__modal_menu--catalog">
            <li v-for="category in getCatalog" :key="category.ID">
              <!-- <pre style="font-size: 15rem">{{ category }}</pre> -->
              <a
                :href="
                  localePath({
                    name: 'catalog-catalogId',
                    params: { catalogId: category.CODE },
                  })
                "
              >
                <div class="icon">
                  <nuxt-img :src="$config.vareibles.remote + category.PICTURE" alt="" loading="lazy" />
                </div>
                <div class="text">{{ category.NAME }}</div>
              </a>
            </li>
          </ul>
        </div>
        <div v-show="getDownloads['katalog-produktsii']" class="menu__modal_bottom">
          <osm-h2 class="menu__modal_title">
            {{ $t('buttons.downloads') }}
          </osm-h2>
          <div class="menu__modal_list">
            <a v-for="item in catalogDownloadLinks" :key="item.CODE" target="_blank" :href="item.PROPERIES[0].VALUE.SRC" class="menu__modal_file" download="">
              <div class="icon">
                <nuxt-img src="/download.svg" width="100%" alt="" loading="lazy" />
              </div>
              <div class="text">
                <div class="top">{{ item.NAME }}</div>
                <div class="bottom">
                  <span>{{ item.PROPERIES[0].VALUE.FILE_NAME?.split('.')[1].toUpperCase() }}</span>
                  <div class="delim">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                      <path d="M10.832 8.3335H9.16536C8.70513 8.3335 8.33203 8.70659 8.33203 9.16683V10.8335C8.33203 11.2937 8.70513 11.6668 9.16536 11.6668H10.832C11.2923 11.6668 11.6654 11.2937 11.6654 10.8335V9.16683C11.6654 8.70659 11.2923 8.3335 10.832 8.3335Z" fill="#2E5599" />
                    </svg>
                  </div>
                  <span>{{ sizeFile(item.PROPERIES[0].VALUE.FILE_SIZE) }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div v-for="(submenu, key) in submenus" :key="submenu.index" class="menu__modal" :data-modal-id="key" @click.stop>
        <div class="menu__modal_top">
          <osm-h2 class="menu__modal_title">{{ $t('buttons.about') }}</osm-h2>
          <ul class="menu__modal_menu">
            <li v-for="item in submenu.childs" :key="item.index">
              <nuxt-link :to="localePath({ name: item.url })">
                <div class="icon">
                  <nuxt-img :src="item.icon" alt="" loading="lazy" />
                </div>
                <div class="text">{{ item.text }}</div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div v-show="Object.keys(getDownloads).length" class="menu__modal_bottom">
          <osm-h2 class="menu__modal_title">
              {{ $t('buttons.downloads') }}
          </osm-h2>
          <div class="menu__modal_list">
            <a v-for="item in aboutDownloadLinks" :key="item.CODE" target="_blank" :href="item.PROPERIES[0].VALUE.SRC" class="menu__modal_file" download="">
              <div class="icon">
                <nuxt-img src="/download.svg" width="100%" alt="" loading="lazy" />
              </div>
              <div class="text">
                <div class="top">{{ item.NAME }}</div>
                <div class="bottom">
                  <span>{{ item.PROPERIES[0].VALUE.FILE_NAME?.split('.')[1].toUpperCase() }}</span>
                  <div class="delim">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                      <path d="M10.832 8.3335H9.16536C8.70513 8.3335 8.33203 8.70659 8.33203 9.16683V10.8335C8.33203 11.2937 8.70513 11.6668 9.16536 11.6668H10.832C11.2923 11.6668 11.6654 11.2937 11.6654 10.8335V9.16683C11.6654 8.70659 11.2923 8.3335 10.832 8.3335Z" fill="#2E5599" />
                    </svg>
                  </div>
                  <span>{{ sizeFile(item.PROPERIES[0].VALUE.FILE_SIZE) }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="header__button header__button--search hide_off_mobile" @click="openSearch">
      <object :data="require(`~/assets/img/search.svg`)" width="100%" />
    </div>
    <nuxt-link class="header__button header__button--favorites hide_off_mobile" :to="localePath({ name: 'favorites' })">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none">
        <rect width="30" height="30" rx="15" fill="#2E5599" />
        <path d="M22.9788 12.7966C22.9243 12.6295 22.7767 12.5102 22.602 12.4916L17.4819 11.972L15.4058 7.26423C15.3348 7.10463 15.1757 7 15.0001 7C14.8245 7 14.6654 7.10374 14.5945 7.26512L12.5179 11.9725L7.39867 12.4916C7.22399 12.5093 7.07592 12.6299 7.02183 12.7966C6.9673 12.9638 7.01695 13.1473 7.14818 13.2643L10.9839 16.6949L9.89642 21.7236C9.85962 21.8952 9.92701 22.0725 10.0693 22.1758C10.1469 22.2321 10.2382 22.2605 10.33 22.2605C10.4067 22.2605 10.4838 22.2406 10.553 22.1998L15.0005 19.6107L19.4472 22.1998C19.5988 22.2871 19.7886 22.2787 19.9309 22.1736C20.0728 22.0721 20.141 21.893 20.1042 21.7214L19.0167 16.6922L22.8529 13.2621C22.9833 13.1469 23.0334 12.9633 22.9788 12.7966ZM18.2325 16.2054C18.1137 16.3118 18.0609 16.4737 18.0946 16.6297L19.0243 20.9278L15.2231 18.7156C15.0852 18.6349 14.915 18.6349 14.7771 18.7156L10.9751 20.9278L11.9047 16.6297C11.9384 16.4737 11.8857 16.3118 11.7669 16.2054L8.48794 13.2736L12.8637 12.8294C13.0224 12.8139 13.1598 12.7124 13.2245 12.567L14.9997 8.54281L16.7743 12.567C16.8391 12.7124 16.9765 12.8139 17.1352 12.8294L21.5109 13.2736L18.2325 16.2054Z" fill="white" />
      </svg>
      <div v-show="getFavorites.length" class="header__count">
        {{ getFavorites.length }}
      </div>
    </nuxt-link>
    <div class="header__menu_opener hide_off_mobile" @click="openMenu">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 12H2.25C2.05109 12 1.86032 12.079 1.71967 12.2197C1.57902 12.3603 1.5 12.5511 1.5 12.75C1.5 12.9489 1.57902 13.1397 1.71967 13.2803C1.86032 13.421 2.05109 13.5 2.25 13.5H9.75C9.94891 13.5 10.1397 13.421 10.2803 13.2803C10.421 13.1397 10.5 12.9489 10.5 12.75C10.5 12.5511 10.421 12.3603 10.2803 12.2197C10.1397 12.079 9.94891 12 9.75 12ZM2.25 6H15.75C15.9489 6 16.1397 5.92098 16.2803 5.78033C16.421 5.63968 16.5 5.44891 16.5 5.25C16.5 5.05109 16.421 4.86032 16.2803 4.71967C16.1397 4.57902 15.9489 4.5 15.75 4.5H2.25C2.05109 4.5 1.86032 4.57902 1.71967 4.71967C1.57902 4.86032 1.5 5.05109 1.5 5.25C1.5 5.44891 1.57902 5.63968 1.71967 5.78033C1.86032 5.92098 2.05109 6 2.25 6ZM15.75 8.25H2.25C2.05109 8.25 1.86032 8.32902 1.71967 8.46967C1.57902 8.61032 1.5 8.80109 1.5 9C1.5 9.19891 1.57902 9.38968 1.71967 9.53033C1.86032 9.67098 2.05109 9.75 2.25 9.75H15.75C15.9489 9.75 16.1397 9.67098 16.2803 9.53033C16.421 9.38968 16.5 9.19891 16.5 9C16.5 8.80109 16.421 8.61032 16.2803 8.46967C16.1397 8.32902 15.9489 8.25 15.75 8.25Z" fill="white"/>
      </svg>{{$t('menu.menu')}}
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'OsmMenu',
  components: {
    OsmH2: () => import('~/components/global/OsmH2.vue'),
  },
  data: () => ({
    favoritesCount: 4,
    filteredFirstCatalog: [],
    filteredSecondCatalog: [],
  }),
  computed: {
    menu() {
      return [
        {
          text: this.$t('buttons.about'),
          url: 'about',
          childs: [
            {
              url: 'techs',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: this.$t('buttons.techs'),
            },
            {
              url: 'history',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: this.$t('buttons.history'),
            },
            {
              url: 'partners',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: this.$t('buttons.partners'),
            },
            {
              url: 'licenses',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: this.$t('buttons.licenses'),
            },
          ],
        },
        {
          text: this.$t('buttons.news'),
          url: 'news',
        },
        {
          text: this.$t('buttons.vacancies'),
          url: 'vacancies',
        },
        {
          text: this.$t('buttons.contacts'),
          url: 'contacts',
        },
      ]
    },
    submenus() {
      return this.menu.filter((item) => item.childs)
    },
    ...mapGetters(['getCatalog']),
    ...mapGetters(['getMainMore']),
    ...mapGetters(['getDownloads']),
    ...mapGetters('localStorage', ['getFavorites']),
    catalogDownloadLinks() {
      const getDownload = {...this.getDownloads};
      const filterArray = []
      for (const key in getDownload) {
        if (getDownload[key].PROPERIES?.length > 1) {
          filterArray.push(getDownload[key])
        }
      }
      return filterArray.filter((item) => item.PROPERIES[1].VALUE === 'catalog_file')
    },
    aboutDownloadLinks() {
      const getDownload = {...this.getDownloads};
      const filterArray = []
      for (const key in getDownload) {
        if (getDownload[key].PROPERIES?.length > 1) {
          filterArray.push(getDownload[key])
        }
      }
      return filterArray.filter((item) => item.PROPERIES[1].VALUE === 'about_file')
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      this.closeModals()
    })
    this.filterCatalog()
  },
  methods: {
    closeModals() {
      document.querySelectorAll(`.menu__modal.isOpened`).forEach((item) => {
        item.classList.remove('isOpened')
      })
      document.querySelectorAll(`.header__li.isActive`).forEach((item) => {
        item.classList.remove('isActive')
      })
    },
    openModal(id) {
      this.closeModals()
      if (!document.querySelector(`[data-modal-id="${id}"]`)) return
      document.querySelector(`[data-modal-id="${id}"]`).classList.add('isOpened')
      document.querySelector(`[data-modal-to-open="${id}"]`).classList.add('isActive')
    },
    ...mapActions(['toggleModal']),
    openMenu() {
      this.toggleModal({
        isOpened: true,
        type: 'mobileMenu',
      })
    },
    ...mapActions(['toggleModal']),
    openSearch() {
      this.toggleModal({
        isOpened: true,
        type: 'search',
      })
      if (document.getElementById('seacrhModal__input')) {
        setTimeout(() => {
          document.getElementById('seacrhModal__input').focus()
        }, 0)
      }
    },
    filterCatalog() {
      const firstArray = []
      const secondArray = []
      this.getCatalog.forEach((i) => {
        switch (i.ID) {
          case '16':
            firstArray[0] = i
            break
          case '3':
            firstArray[1] = i
            break
          case '33':
            firstArray[2] = i
            break
          case '2':
            firstArray[3] = i
            break
          case '9':
            firstArray[4] = i
            break
          case '1':
            secondArray[0] = i
            break
          case '29':
            secondArray[1] = i
            break
          case '34':
            secondArray[2] = i
            break
          case '8':
            secondArray[3] = i
            break
        }
      })
      this.filteredFirstCatalog = firstArray
      this.filteredSecondCatalog = secondArray
    },
    sizeFile(size) {
      if (size === 0) {
        return '0'
      } else {
        const k = 1024
        const sizes = ['Байт', 'КБ', 'МБ', 'ГБ', 'ТБ']
        const i = Math.floor(Math.log(size) / Math.log(k))
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  &__modals {
    background: #000;
  }

  &__modal {
    position: absolute;
    top: 100%;
    left: rem(240);
    right: rem(240);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border: 1px solid #d7dce1;
    border-top: none;

    @media all and (max-width: 1280px) {
      left: 0;
      right: 0;
    }

    &.isOpened {
      opacity: 1;
      visibility: visible;
      z-index: 5;
    }
  }

  &__modal_top {
    padding: rem(62) rem(70) rem(38);
    background: #fff;
    @media all and (max-width: 1450px) {
      padding: 12rem 50rem 10rem;
    }
    @media all and (min-width: 1281px) {
      max-height: 400px;
      overflow: auto;
    }

    @media all and (max-width: 1280px) {
      padding: 30px 20px;
    }
  }

  &__modal_bottom {
    background: #f2f2f2;
    padding: rem(62) rem(70);
    @media all and (max-width: 1450px) {
      padding: rem(34) rem(51);
    }

    @media all and (max-width: 1280px) {
      padding: 30px 20px;
    }
  }

  &__modal_title {
    margin-bottom: rem(50) !important;
    @media all and (max-width: 1450px) {
      margin-bottom: rem(30) !important;
    }

    @media all and (max-width: 1280px) {
      margin-bottom: 20px !important;
    }
  }

  &__modal_menu {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    &--catalog {
      flex-direction: column;
      max-height: 300px;
      @media all and (max-width: 1280px) {
        max-height: 300px;
      }
    }

    li {
      width: calc(100% / 3 - #{rem(20)});

      &:not(:last-child) {
        margin-bottom: rem(30);
      }

      @media all and (max-width: 1280px) {
        width: calc(100% / 2 - 30px);

        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }

    a {
      display: flex;
      align-items: flex-start;
      text-decoration: none;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: rem(40);
        margin-right: rem(20);

        img {
          max-width: 100%;
        }

        @media all and (max-width: 1280px) {
          width: 30px;
          margin-right: 20px;
        }
      }

      .text {
        max-width: calc(100% - #{rem(60)});
        font-weight: 400;
        font-size: rem(24);
        line-height: 140%;
        color: #555f76;
        position: relative;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 100%;
          bottom: rem(-5);
          height: 1px;
          background: #ff004d;
          transition: all 0.3s ease;
        }

        @media all and (max-width: 1280px) {
          width: calc(100% - 30px);
          font-size: 20px;
        }
      }

      &:hover .text:after {
        right: 0;
      }
    }
  }

  &__modal_file {
    text-decoration: none;
    display: inline-flex;

    .icon {
      width: rem(40);
      height: rem(40);
      margin-right: rem(20);
      flex-shrink: 0;

      @media all and (max-width: 1280px) {
        width: 30px;
        margin-right: 20px;
      }
    }

    .bottom {
      display: flex;
      align-items: center;

      span {
        font-style: normal;
        font-weight: 400;
        font-size: rem(14);
        line-height: 140%;
        color: #555f76;
      }
    }

    .delim {
      width: rem(20);
      height: rem(20);
      margin: 0 rem(5);
      font-size: 0;
    }

    .top {
      font-style: normal;
      font-weight: 600;
      font-size: rem(20);
      line-height: 140%;
      color: #172242;
    }
  }
}

.header {
  &__menu_opener {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    background: #2E5599;
    border-radius: 5px;
    padding: 6px 10px;
    color: #ffffff;
    svg {
      margin-right: 8px;
    }
  }

  &__button {
    display: block;
    font-size: 0;
    width: rem(30);
    margin-right: rem(40);
    position: relative;

    object {
      pointer-events: none;
    }

    @media all and (max-width: 1280px) {
      width: 30px;
      margin-right: 30px;
    }

    @media all and (max-width: 840px) {
      width: 30px;
      margin-right: 15px;

      &--favorites {
        order: -1;
      }
    }

    @media all and (max-width: 359px) {
      width: 25px;
      margin-right: 15px;
    }
  }

  &__count {
    position: absolute;
    top: rem(-5);
    left: rem(-5);
    width: rem(19);
    height: rem(19);
    font-size: rem(14);
    line-height: rem(19);
    font-style: normal;
    font-weight: 400;
    color: #ffffff;
    background: #ff004d;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    text-align: center;
    border-radius: 50%;

    @media all and (max-width: 1280px) {
      top: -5px;
      left: -5px;
      width: 19px;
      height: 19px;
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__menu {
    @media all and (max-width: 1280px) {
      width: 100%;
      order: 3;
    }

    @media all and (max-width: 840px) {
      display: flex;
      align-items: center;
      width: auto;
      order: 1;
    }
  }

  &__ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    @media all and (max-width: 1280px) {
      justify-content: space-between;
      border-top: 1px solid #d7dce1;
      margin-top: 20px;
    }
  }

  &__li {
    position: relative;

    &:not(:last-child) {
      margin-right: rem(40);
    }
  }

  &__link {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: rem(18);
    line-height: 140%;
    color: #d7dce1;
    text-decoration: none;
    padding: rem(47) 0;
    span {
      position: relative;
      display: inline-block;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 100%;
        bottom: rem(-5);
        height: 1px;
        background: #ff004d;
        transition: all 0.3s ease;
      }
    }
    &:hover {
      span {
        &:after {
          right: 0;
        }
      }
    }
    @media all and (max-width: 1440px) {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    @media all and (max-width: 1280px) {
      font-size: 18px;
      padding: 20px 0;
    }
  }

  &__li.isActive &__link:after {
    height: rem(8);

    @media all and (max-width: 1280px) {
      height: 4px;
    }
  }

  &__arrow {
    width: rem(9);
    margin-left: rem(10);
    font-size: 0;

    @media all and (max-width: 1280px) {
      width: 9px;
      margin-left: 10px;
    }

    img {
      width: 100%;
      display: block;
    }
  }
}

.menu__modal_list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 10px;
}
</style>
