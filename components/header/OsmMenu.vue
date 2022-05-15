<template>
  <nav class="header__menu">
    <ul class="header__ul">
      <li v-for="link in menu" :key="link.index" class="header__li">
        <nuxt-link class="header__link" :to="{name: link.url}">
            <span>{{ link.text }}</span>
            <div v-if="link.childs" class="header__arrow">
                <img :src="require(`~/assets/img/arrow.svg`)" alt="arrow">
            </div>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'OsmMenu',
    data: () => ({
      menu: [{
          text: 'Каталог',
          url: 'index',
          childs: [{
            text: 'Подпункт',
            url: 'index',
          }]
        },
        {
          text: 'О компании',
          url: 'index',
          childs: [{
            text: 'Подпункт',
            url: 'index',
          }]
        },
        {
          text: 'О компании',
          url: 'index',
          childs: [{
            text: 'Подпункт',
            url: 'index',
          }]
        },
        {
          text: 'Новости',
          url: 'index',
          childs: [{
            text: 'Подпункт',
            url: 'index',
          }]
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
    })
  }

</script>

<style lang="scss" scoped>
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
