<template>
  <div class="menu hide_off_mobile" :class="{'isOpened': getModals.mobileMenu.isOpened}" @click="closeMenu">
    <div class="menu__in" @click.stop>
      <div class="menu__top">
        <div class="menu__langs">
          <nuxt-link :to="{ name: 'index' }" class="isActive">Ру</nuxt-link>
          <div class="delim">/</div>
          <nuxt-link :to="{ name: 'index' }">En</nuxt-link>
        </div>
        <div class="menu__closer" @click="closeMenu">
          <img :src="require('~/assets/img/closer.svg')" width="100%" alt="">
        </div>
      </div>
      <nav class="menu__links">
        <ul>
          <li class="menu__links_li has-child">
            <a :to="{name: 'catalog'}" @click.prevent>
                <div class="text">Каталог</div>
                <div class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 11 7" fill="none">
                    <path d="M1 6L5.5 2L10 6" stroke="#172242" stroke-width="2"/>
                  </svg>
                </div>
                <!-- <div v-if="link.childs" class="header__arrow">
                    <img :src="require(`~/assets/img/arrow.svg`)" alt="arrow">
                </div> -->
            </a>
            <ul v-if="getCatalog">
              <li v-for="child in getCatalog" :key="child.index">
                <nuxt-link :to="{name: 'catalog-catalogId', params: {catalogId: child.CODE}}">
                <div class="icon">
                  <img :src="require('~/assets/img/catalog/catalog_icon1.svg')" width="100%" alt="">
                </div>
                <div class="text">{{ child.NAME }}</div>
              </nuxt-link>
              </li>
            </ul>
          </li>
          <li v-for="link in menu" :key="link.index" class="menu__links_li" :class="{'has-child': link.childs, 'isOpened': link.isOpened}">
            <nuxt-link :to="{name: link.url}">
                <div class="text">{{ link.text }}</div>
                <div class="arrow" v-if="link.childs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 11 7" fill="none">
                    <path d="M1 6L5.5 2L10 6" stroke="#172242" stroke-width="2"/>
                  </svg>
                </div>
                <!-- <div v-if="link.childs" class="header__arrow">
                    <img :src="require(`~/assets/img/arrow.svg`)" alt="arrow">
                </div> -->
            </nuxt-link>
            <ul v-if="link.childs">
              <li v-for="child in link.childs" :key="child.index">
                <nuxt-link :to="{name: child.url}">
                  <div class="icon">
                    <img :src="child.icon" width="100%" alt="">
                  </div>
                  <div class="text">{{ child.text }}</div>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="menu__socials">
        <!-- <pre style="font-size: 15rem">
          {{ getMainMore.contact[0].PROPERIES }}
        </pre> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
  export default {
    data: () => ({
      menu: [
        {
          text: 'О компании',
          isOpened: false,
          url: 'about'
        },
        {
          text: 'Новости',
          isOpened: false,
          url: 'news',
        },
        {
          text: 'Вакансии',
          isOpened: false,
          url: 'vacancies'
        },
        {
          text: 'Контакты',
          isOpened: false,
          url: 'contacts'
        },
      ],
    }),
    mounted() {
      this.closeMenu();
      this.openChilds();
    },
    computed: {
      ...mapGetters(['getModals']),
      ...mapGetters(['getCatalog']),
      ...mapGetters(['getMainMore']),
    },
    methods: {
      openChilds() {
        document.querySelectorAll('.menu__links_li.has-child > a').forEach(item => {
          item.addEventListener('click', (e) => {
            e.preventDefault();
            item.closest('li').classList.toggle('isOpened');
          })
        });
        // console.log(item)
        // if (!item) return;
        // item.isOpened = !item.isOpened;
      },
      ...mapActions(['toggleModal']),
      closeMenu() {
        this.toggleModal({
          isOpened: false,
          type: 'mobileMenu'
        })
      },
    }
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
    transition: all .3s ease;
    &.isOpened {
      opacity: 1;
      visibility: visible;
    }
    &__in {
      width: 100%;
      max-width: 345px;
      background: #F2F2F2;
      height: 100%;
      margin-left: auto;
      overflow: auto;
      transition: all .3s ease;
      transform: translateX(100%);
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
        color: #555F76;
        display: flex;
        align-items: center;
        
        .icon {
          width: 30px;
          height: 30px;
          margin-right: 20px;
        }
      }
    }
    &__links_li {
      padding: 30px 0;
      border-bottom: 1px solid  #D7DCE1;
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
      & > a {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #172242;
        justify-content: space-between;
        .arrow {
          width: 12px;
          height: 6px;
          font-size: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

</style>
