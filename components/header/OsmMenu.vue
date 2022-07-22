<template>
  <nav class="header__menu" @mouseleave="closeModals">
    <!-- <pre style="font-size: 15rem">
      {{ getMainMore.downloads }}
    </pre> -->
    <ul class="header__ul hide_on_mobile">
      <li class="header__li has-child" @mouseenter.stop="openModal(123)" :data-modal-to-open="123">
        <nuxt-link class="header__link" :to="{name: 'catalog'}" @click.stop="">
            <span>Каталог</span>
            <div class="header__arrow">
                <img :src="require(`~/assets/img/arrow.svg`)" alt="arrow">
            </div>
        </nuxt-link>
      </li>
      <li v-for="(link, key) in menu" :key="link.index" class="header__li" @mouseenter.stop="openModal(key)" :data-modal-to-open="key" :class="{'has-child': link.childs}">
        <nuxt-link class="header__link" :to="{name: link.url}" @click.stop="">
            <span>{{ link.text }}</span>
            <div v-if="link.childs" class="header__arrow">
                <img :src="require(`~/assets/img/arrow.svg`)" alt="arrow">
            </div>
        </nuxt-link>
      </li>
    </ul>
    <div class="menu__modals hide_on_mobile">
      <div class="menu__modal" :data-modal-id="123">
        <div class="menu__modal_top">
          <osm-h2 class="menu__modal_title">Выпускаемая продукция</osm-h2>
          <ul class="menu__modal_menu">
            <li v-for="category in getCatalog" :key="category.ID">
              <nuxt-link :to="{name: 'catalog-catalogId', params: {catalogId: category.CODE}}">
                <div class="icon">
                  <img :src="require('~/assets/img/catalog/catalog_icon1.svg')" width="100%" alt="">
                </div>
                <div class="text">{{ category.NAME }}</div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="menu__modal_bottom">
          <osm-h2 class="menu__modal_title">Загрузки</osm-h2>
          <a :href="$vareibles.remote + getMainMore.downloads[0].PROPERIES.FILE.VALUE.SRC" class="menu__modal_file">
            <div class="icon">
              <img src="~/assets/img/download.svg" width="100%" alt="">
            </div>
            <div class="text">
              <div class="top">{{ getMainMore.downloads[0].NAME }}</div>
              <div class="bottom">
                <span>PDF</span>
                <div class="delim">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                    <path d="M10.832 8.3335H9.16536C8.70513 8.3335 8.33203 8.70659 8.33203 9.16683V10.8335C8.33203 11.2937 8.70513 11.6668 9.16536 11.6668H10.832C11.2923 11.6668 11.6654 11.2937 11.6654 10.8335V9.16683C11.6654 8.70659 11.2923 8.3335 10.832 8.3335Z" fill="#2E5599"/>
                  </svg>
                </div>
                <span>30.2 МБ</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="menu__modal" @click.stop v-for="(submenu, key) in submenus" :key="submenu.index" :data-modal-id="key">
        <div class="menu__modal_top">
          <osm-h2 class="menu__modal_title">О компании</osm-h2>
          <ul class="menu__modal_menu">
            <li v-for="item in submenu.childs" :key="item.index">
              <nuxt-link :to="{name: item.url}">
                <div class="icon">
                  <img :src="item.icon" width="100%" alt="">
                </div>
                <div class="text">{{ item.text }}</div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="menu__modal_bottom">
          <osm-h2 class="menu__modal_title">Загрузки</osm-h2>
          <a :href="$vareibles.remote + getMainMore.downloads[0].PROPERIES.FILE.VALUE.SRC" class="menu__modal_file">
            <div class="icon">
              <img src="~/assets/img/download.svg" width="100%" alt="">
            </div>
            <div class="text">
              <div class="top">{{ getMainMore.downloads[0].NAME }}</div>
              <div class="bottom">
                <span>PDF</span>
                <div class="delim">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                    <path d="M10.832 8.3335H9.16536C8.70513 8.3335 8.33203 8.70659 8.33203 9.16683V10.8335C8.33203 11.2937 8.70513 11.6668 9.16536 11.6668H10.832C11.2923 11.6668 11.6654 11.2937 11.6654 10.8335V9.16683C11.6654 8.70659 11.2923 8.3335 10.832 8.3335Z" fill="#2E5599"/>
                  </svg>
                </div>
                <span>30.2 МБ</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <nuxt-link class="header__button header__button--search hide_off_mobile" :to="{ name: 'index' }">
        <object :data="require(`~/assets/img/search.svg`)" width="100%" />
    </nuxt-link>
    <nuxt-link class="header__button header__button--favorites hide_off_mobile" :to="{ name: 'index' }">
        <object :data="require(`~/assets/img/favorites.svg`)" width="100%" />
        <div v-if="favoritesCount" class="header__count">
            {{ favoritesCount }}
        </div>
    </nuxt-link>
    <div class="header__menu_opener hide_off_mobile" @click="openMenu">
      <svg xmlns="http://www.w3.org/2000/svg" width="77" height="30" viewBox="0 0 77 30" fill="none">
        <rect width="77" height="30" rx="5" fill="#2E5599"/>
        <path d="M19.75 18H12.25C12.0511 18 11.8603 18.079 11.7197 18.2197C11.579 18.3603 11.5 18.5511 11.5 18.75C11.5 18.9489 11.579 19.1397 11.7197 19.2803C11.8603 19.421 12.0511 19.5 12.25 19.5H19.75C19.9489 19.5 20.1397 19.421 20.2803 19.2803C20.421 19.1397 20.5 18.9489 20.5 18.75C20.5 18.5511 20.421 18.3603 20.2803 18.2197C20.1397 18.079 19.9489 18 19.75 18ZM12.25 12H25.75C25.9489 12 26.1397 11.921 26.2803 11.7803C26.421 11.6397 26.5 11.4489 26.5 11.25C26.5 11.0511 26.421 10.8603 26.2803 10.7197C26.1397 10.579 25.9489 10.5 25.75 10.5H12.25C12.0511 10.5 11.8603 10.579 11.7197 10.7197C11.579 10.8603 11.5 11.0511 11.5 11.25C11.5 11.4489 11.579 11.6397 11.7197 11.7803C11.8603 11.921 12.0511 12 12.25 12ZM25.75 14.25H12.25C12.0511 14.25 11.8603 14.329 11.7197 14.4697C11.579 14.6103 11.5 14.8011 11.5 15C11.5 15.1989 11.579 15.3897 11.7197 15.5303C11.8603 15.671 12.0511 15.75 12.25 15.75H25.75C25.9489 15.75 26.1397 15.671 26.2803 15.5303C26.421 15.3897 26.5 15.1989 26.5 15C26.5 14.8011 26.421 14.6103 26.2803 14.4697C26.1397 14.329 25.9489 14.25 25.75 14.25Z" fill="white"/>
        <path d="M36.936 19H37.932V12.124H37.968L40.26 19H41.292L43.596 12.124H43.632V19H44.724V10.684H43.128L40.86 17.572H40.824L38.544 10.684H36.936V19ZM48.9683 19.12C49.9883 19.12 50.6843 18.796 51.0563 18.52V17.74C50.4923 18.028 49.9643 18.208 49.1363 18.208C47.9123 18.208 47.1923 17.692 47.1203 16.228H51.2363V15.628C51.2363 13.696 50.4323 12.724 48.7402 12.724C47.3123 12.724 46.0283 13.684 46.0283 15.832V16.012C46.0283 17.92 47.0243 19.12 48.9683 19.12ZM48.6923 13.576C49.6283 13.576 50.1203 14.08 50.1203 15.376H47.1203C47.2163 13.96 48.0083 13.576 48.6923 13.576ZM56.0854 19H57.1414V12.844H56.0854V15.364H53.4214V12.844H52.3654V19H53.4214V16.24H56.0854V19ZM63.4823 19.12C65.1143 19.12 66.1823 17.944 66.1823 16V15.808C66.1823 13.876 65.1983 12.724 63.4943 12.724C62.0183 12.724 60.9863 13.72 60.8183 15.364H59.7143V12.844H58.6583V19H59.7143V16.24H60.7943V16.3C60.8903 18.076 61.8503 19.12 63.4823 19.12ZM63.5063 18.256C62.6183 18.256 61.8863 17.74 61.8863 16.072V15.736C61.8863 14.368 62.4623 13.588 63.4703 13.588C64.3703 13.588 65.0903 14.116 65.0903 15.784V16.12C65.0903 17.5 64.5143 18.256 63.5063 18.256Z" fill="white"/>
      </svg>
    </div>
  </nav>
</template>

<script>
import { mapGetters ,mapActions } from 'vuex';
  export default {
    name: 'OsmMenu',
    components: {
      OsmH2: () => import('~/components/global/OsmH2.vue'),
    },
    computed: {
      submenus() {
        return this.menu.filter(item => item.childs);
      },
      ...mapGetters(['getCatalog']),
      ...mapGetters(['getMainMore']),
    },
    data: () => ({
      menu: [
        {
          text: 'О компании',
          url: 'about',
          childs: [{
            url: 'techs',
            icon: require('~/assets/img/catalog/catalog_icon1.svg'),
            text: 'Технологии производства'
          },
          {
            url: 'history',
            icon: require('~/assets/img/catalog/catalog_icon1.svg'),
            text: 'История'
          },
          {
            url: 'partners',
            icon: require('~/assets/img/catalog/catalog_icon1.svg'),
            text: 'Партнеры'
          }]
        },
        {
          text: 'Новости',
          url: 'news'
        },
        {
          text: 'Вакансии',
          url: 'vacancies'
        },
        {
          text: 'Контакты',
          url: 'contacts'
        },
      ],
      favoritesCount: 4,
    }),
    mounted() {
      document.addEventListener('click', () => {
        this.closeModals();
      });
    },
    methods: {
      closeModals() {
        document.querySelectorAll(`.menu__modal.isOpened`).forEach(item => {
          item.classList.remove('isOpened');
        });
        document.querySelectorAll(`.header__li.isActive`).forEach(item => {
          item.classList.remove('isActive');
        });
      },
      openModal(id) {
        this.closeModals();
        if (!document.querySelector(`[data-modal-id="${id}"]`)) return;
        document.querySelector(`[data-modal-id="${id}"]`).classList.add('isOpened');
        document.querySelector(`[data-modal-to-open="${id}"]`).classList.add('isActive');
      },
      ...mapActions(['toggleModal']),
      openMenu() {
        this.toggleModal({
          isOpened: true,
          type: 'mobileMenu'
        })
      },
    }
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
      transition: all .3s ease;
      border: 1px solid #D7DCE1;
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
      @media all and (max-width: 1280px) {
        padding: 30px 20px;
      }
    }
    &__modal_bottom {
      background: #F2F2F2;
      padding: rem(62) rem(70);
      @media all and (max-width: 1280px) {
        padding: 30px 20px;
      }
    }
    &__modal_title {
      margin-bottom: rem(50) !important;
      @media all and (max-width: 1280px) {
        margin-bottom: 30px !important;
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
        align-items: center;
        text-decoration: none;
        
        .icon {
            width: rem(40);
            margin-right: rem(20);
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
            color: #555F76;
            position: relative;
            &:after {
              content: "";
              position: absolute;
              left: 0;
              right: 100%;
              bottom: rem(-5);
              height: 1px;
              background: #FF004D;
              transition: all .3s ease;
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
          color: #555F76;
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
      font-size: 0;
    }
&__button {
        display: block;
        font-size: 0;
        width: rem(30);
        margin-right: rem(40);
        position: relative;
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
        color: #FFFFFF;
        background: #FF004D;
        border: 1px solid #FFFFFF;
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
        border-top: 1px solid #D7DCE1;
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
      color: #D7DCE1;
      text-decoration: none;
      padding: rem(47) 0;
      @media all and (max-width: 1440px) {
        padding-top: 49px;
        padding-bottom: 49px;
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0;
        background: #fff;
        transition: all .3s ease;
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

</style>
