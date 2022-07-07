<template>
  <div class="menu hide_off_mobile">
    <div class="menu__in">
      <div class="menu__top">
        <div class="menu__langs">
          <nuxt-link :to="{ name: 'index' }" class="isActive">Ру</nuxt-link>
          <div class="delim">/</div>
          <nuxt-link :to="{ name: 'index' }">En</nuxt-link>
        </div>
        <div class="menu__closer">
          <img :src="require('~/assets/img/closer.svg')" width="100%" alt="">
        </div>
      </div>
      <nav class="menu__links">

      </nav>
      <div class="menu__socials"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      menu: [{
          text: 'Каталог',
          url: 'catalog',
          childs: [{
            url: 'index',
            icon: require('~/assets/img/catalog/catalog_icon1.svg'),
            text: 'Оборудование очистки газов и воздухаы'
          }]
        },
        {
          text: 'О компании',
          url: 'about',
          childs: [{
            url: 'index',
            icon: require('~/assets/img/catalog/catalog_icon1.svg'),
            text: 'Оборудование очистки газов и воздухаы'
          }]
        },
        {
          text: 'Новости',
          url: 'news',
          childs: [{
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
          url: 'vacancies'
        },
        {
          text: 'Контакты',
          url: 'contacts'
        },
      ],
    })
  }

</script>

<style lang="scss" scoped>
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: #172242;
    opacity: 0;
    visibility: hidden;
    &__in {
      width: 100%;
      max-width: 345px;
      background: #F2F2F2;
      height: 100%;
      margin-left: auto;
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
  }

</style>
