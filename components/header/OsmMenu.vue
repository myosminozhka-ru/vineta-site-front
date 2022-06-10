<template>
  <nav class="header__menu">
    <ul class="header__ul">
      <li v-for="(link, key) in menu" :key="link.index" class="header__li" @click.stop="openModal(key)" :data-modal-to-open="key" :class="{'has-child': link.childs}">
        <nuxt-link class="header__link" :to="{name: link.url}" @click.stop="">
            <span>{{ link.text }}</span>
            <div v-if="link.childs" class="header__arrow">
                <img :src="require(`~/assets/img/arrow.svg`)" alt="arrow">
            </div>
        </nuxt-link>
      </li>
    </ul>
    <div class="menu__modals">
      <div class="menu__modal" @click.stop v-for="(submenu, key) in submenus" :key="submenu.index" :data-modal-id="key">
        <div class="menu__modal_top">
          <osm-h2 class="menu__modal_title">Выпускаемая продукция</osm-h2>
          <ul class="menu__modal_menu">
            <li v-for="child in submenu.childs" :key="child.index">
              <a href="#">
                <div class="icon">
                  <img :src="child.icon" width="100%" alt="">
                </div>
                <div class="text">{{ child.text }}</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu__modal_bottom">
          <osm-h2 class="menu__modal_title">Загрузки</osm-h2>
          <a href="#" class="menu__modal_file">
            <div class="icon">
              <img src="~/assets/img/download.svg" width="100%" alt="">
            </div>
            <div class="text">
              <div class="top">Каталог продукции ООО «Винета»</div>
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
  </nav>
</template>

<script>
  export default {
    name: 'OsmMenu',
    components: {
      OsmH2: () => import('~/components/global/OsmH2.vue'),
    },
    computed: {
      submenus() {
        return this.menu.filter(item => item.childs);
      }
    },
    data: () => ({
      menu: [{
          text: 'Каталог',
          url: 'index',
          childs: [{
            url: 'index',
            icon: require('~/assets/img/catalog/catalog_icon1.svg'),
            text: 'Оборудование очистки газов и воздухаы'
          }]
        },
        {
          text: 'О компании',
          url: 'index',
          childs: [{
            url: 'index',
            icon: require('~/assets/img/catalog/catalog_icon1.svg'),
            text: 'Оборудование очистки газов и воздухаы'
          }]
        },
        {
          text: 'О компании',
          url: 'index',
          childs: [{
            url: 'index',
            icon: require('~/assets/img/catalog/catalog_icon1.svg'),
            text: 'Оборудование очистки газов и воздухаы'
          }]
        },
        {
          text: 'Новости',
          url: 'index',
          childs: [
            {
              url: 'index',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: 'Оборудование очистки газов и воздухаы'
            },
            {
              url: 'index',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: 'Оборудование очистки газов и воздухаы'
            },
            {
              url: 'index',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: 'Оборудование очистки газов и воздухаы'
            },
            {
              url: 'index',
              icon: require('~/assets/img/catalog/catalog_icon1.svg'),
              text: 'Оборудование очистки газов и воздухаы'
            }
          ]
        },
        {
          text: 'Вакансии',
          url: 'index'
        },
        {
          text: 'Контакты',
          url: 'index'
        },
      ]
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
      }
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
      left: vw(240);
      right: vw(240);
      opacity: 0;
      visibility: hidden;
      transition: all .3s ease;
      &.isOpened {
        opacity: 1;
        visibility: visible;
        z-index: 5;
      }
    }
    &__modal_top {
      padding: vw(62) vw(70) vw(38);
      background: #fff;
    }
    &__modal_bottom {
      background: #F2F2F2;
      padding: vw(60) vw(70) vw(70);
    }
    &__modal_title {
      margin-bottom: vw(50);
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
        width: calc(100% / 3 - #{vw(20)});
        &:not(:last-child) {
            margin-bottom: vw(30);
        }
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        .icon {
            width: vw(40);
            margin-right: vw(20);
        }
        .text {
            width: calc(100% - #{vw(60)});
            font-weight: 400;
            font-size: vw(24);
            line-height: 140%;
            color: #555F76;
        }
      }
    }
    &__modal_file {
      text-decoration: none;
      display: inline-flex;
      .icon {
        width: vw(40);
        height: vw(40);
        margin-right: vw(20);
      }
      .bottom {
        display: flex;
        align-items: center;
        span {
          font-style: normal;
          font-weight: 400;
          font-size: vw(14);
          line-height: 140%;
          color: #555F76;
        }
      }
      .delim {
        width: vw(20);
        height: vw(20);
        margin: 0 vw(5);
        font-size: 0;
      }
      .top {
        font-style: normal;
        font-weight: 600;
        font-size: vw(20);
        line-height: 140%;
        color: #172242;
      }
    }
  }
  .header {

    // &__menu {}
    &__ul {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &__li {
      position: relative;
      &:not(:last-child) {
        margin-right: vw(40);
      }
    }

    &__link {
      display: flex;
      align-items: center;
      font-style: normal;
      font-weight: 400;
      font-size: vw(18);
      line-height: 140%;
      color: #D7DCE1;
      text-decoration: none;
      padding: vw(35) 0;
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
    }
    &__li.isActive &__link:after {
      height: vw(8);
    }
    &__arrow {
        width: vw(9);
        margin-left: vw(10);
        font-size: 0;
        img {
            width: 100%;
            display: block;
        }
    }
  }

</style>
