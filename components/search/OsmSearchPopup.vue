<template>
  <div class="seacrhModal" :class="{ isOpened: getModals.search.isOpened }" @click.self="closeSearch">
    <div class="seacrhModal__in">
      <div class="seacrhModal__top">
        <div class="seacrhModal__closer" @click="closeSearch">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3492 20.0003L32.8492 9.51698C33.1631 9.20314 33.3394 8.77748 33.3394 8.33364C33.3394 7.88981 33.1631 7.46415 32.8492 7.15031C32.5354 6.83647 32.1098 6.66016 31.6659 6.66016C31.2221 6.66016 30.7964 6.83647 30.4826 7.15031L19.9992 17.6503L9.51591 7.15031C9.20207 6.83647 8.77642 6.66016 8.33258 6.66016C7.88874 6.66016 7.46309 6.83647 7.14925 7.15031C6.83541 7.46415 6.65909 7.88981 6.65909 8.33364C6.65909 8.77748 6.83541 9.20314 7.14925 9.51698L17.6492 20.0003L7.14925 30.4836C6.99303 30.6386 6.86904 30.8229 6.78443 31.026C6.69981 31.2291 6.65625 31.447 6.65625 31.667C6.65625 31.887 6.69981 32.1048 6.78443 32.3079C6.86904 32.511 6.99303 32.6954 7.14925 32.8503C7.30419 33.0065 7.48852 33.1305 7.69162 33.2151C7.89472 33.2997 8.11256 33.3433 8.33258 33.3433C8.5526 33.3433 8.77044 33.2997 8.97354 33.2151C9.17664 33.1305 9.36098 33.0065 9.51591 32.8503L19.9992 22.3503L30.4826 32.8503C30.6375 33.0065 30.8219 33.1305 31.025 33.2151C31.2281 33.2997 31.4459 33.3433 31.6659 33.3433C31.8859 33.3433 32.1038 33.2997 32.3069 33.2151C32.51 33.1305 32.6943 33.0065 32.8492 32.8503C33.0055 32.6954 33.1295 32.511 33.2141 32.3079C33.2987 32.1048 33.3422 31.887 33.3422 31.667C33.3422 31.447 33.2987 31.2291 33.2141 31.026C33.1295 30.8229 33.0055 30.6386 32.8492 30.4836L22.3492 20.0003Z" fill="white" />
          </svg>
        </div>
      </div>
      <form class="seacrhModal__form" @submit.prevent>
        <input id="seacrhModal__input" v-model="searchText" type="text" autofocus class="seacrhModal__input" placeholder="Поиск по сайту" />
        <div class="seacrhModal__button">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 27 27" fill="none">
            <path d="M24.3451 22.656L20.2229 18.5671C21.823 16.572 22.5979 14.0397 22.3882 11.4908C22.1786 8.94188 21.0003 6.5702 19.0957 4.86338C17.1911 3.15655 14.7049 2.24434 12.1483 2.31429C9.59181 2.38425 7.15923 3.43106 5.35081 5.23948C3.54239 7.04791 2.49558 9.48048 2.42562 12.037C2.35566 14.5936 3.26788 17.0797 4.9747 18.9844C6.68152 20.889 9.05321 22.0672 11.6021 22.2769C14.151 22.4866 16.6833 21.7117 18.6784 20.1116L22.7673 24.2004C22.8706 24.3046 22.9935 24.3872 23.1289 24.4437C23.2643 24.5001 23.4095 24.5291 23.5562 24.5291C23.7029 24.5291 23.8481 24.5001 23.9835 24.4437C24.1189 24.3872 24.2418 24.3046 24.3451 24.2004C24.5454 23.9933 24.6573 23.7164 24.6573 23.4282C24.6573 23.1401 24.5454 22.8632 24.3451 22.656V22.656ZM12.4451 20.1116C10.9068 20.1116 9.40304 19.6554 8.124 18.8008C6.84495 17.9461 5.84805 16.7314 5.25937 15.3102C4.67069 13.889 4.51666 12.3251 4.81677 10.8164C5.11687 9.30766 5.85764 7.92179 6.94538 6.83405C8.03312 5.74631 9.41899 5.00555 10.9277 4.70544C12.4365 4.40533 14.0003 4.55936 15.4215 5.14804C16.8427 5.73672 18.0575 6.73362 18.9121 8.01267C19.7667 9.29172 20.2229 10.7955 20.2229 12.3338C20.2229 14.3966 19.4034 16.3749 17.9448 17.8335C16.4862 19.2921 14.5079 20.1116 12.4451 20.1116V20.1116Z" fill="black" />
          </svg>
        </div>
      </form>
      <div v-if="searchText" class="seacrhModal__result">
        <template v-if="productsResult.length"> Найдено {{ productsResult.length }} результата </template>
        <template v-else> Ничего не найдено </template>
      </div>
      <div class="seacrhModal__items">
        <a v-for="product in productsResult.slice(0, 4)" :key="product.ID" :href="localePath(`/catalog/${product.SECTION}/${product.CODE}`)" class="seacrhModal__item">
          <div class="products__item_image">
            <div class="image_container">
              <img :src="$vareibles.remote + product.PREVIEW_PICTURE" alt="" />
            </div>
          </div>
          <div class="products__item_data">
            <span class="products__item_name">{{ product.NAME }}</span>
            <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    searchText: '',
  }),
  computed: {
    ...mapGetters(['getProducts']),
    ...mapGetters(['getModals']),
    productsResult() {
      return this.getProducts.filter((product) => product.NAME.toLowerCase().includes(this.searchText.toLowerCase()) && this.searchText)
    },
  },
  watch: {
    '$route.params': {
      handler() {
        this.closeSearch()
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {},

  methods: {
    ...mapActions(['toggleModal']),
    closeSearch() {
      this.toggleModal({
        isOpened: false,
        type: 'search',
      })
    },
    goToSearchPage() {
      this.closeSearch()
      this.$router.push(this.localePath({ name: 'search', query: { q: this.searchText } }))
    },
  },
}
</script>

<style lang="scss" scoped>
.seacrhModal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(23, 34, 66, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  @media all and (max-width: 860px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.isOpened {
    opacity: 1;
    visibility: visible;
  }
  &__in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    width: 100%;
    max-width: rem(1480);
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    @media all and (max-width: 860px) {
      display: block;
      overflow: auto;
      height: auto;
      max-height: 100vh;
      box-sizing: border-box;
    }
  }
  &__top {
    display: flex;
    justify-content: flex-end;
    margin-bottom: rem(9);

    @media all and (max-width: 960px) {
      margin-bottom: rem(50);
    }
  }
  &__closer {
    width: rem(50);
    height: rem(50);
    cursor: pointer;
    transition: all 0.3s ease-out;
    position: absolute;
    top: 60px;
    right: 60px;
    &:hover {
      filter: hue-rotate(29deg);
    }
    &:active {
      filter: hue-rotate(45deg);
    }
    @media all and (max-width: 1440px) {
      top: 50px;
      right: 50px;
    }
    @media all and (max-width: 1280px) {
      width: 40px;
      height: 40px;
    }
    @media all and (max-width: 960px) {
      top: 40px;
      right: 20px;
    }
    @media all and (max-width: 420px) {
      top: 30px;
      right: 15px;
    }
  }
  &__form {
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: rem(5) solid #fff;
  }
  &__input {
    flex: 1 1 auto;
    height: rem(50);
    background: none;
    border: none;
    outline: none;
    &,
    &::placeholder {
      font-style: normal;
      font-weight: 600;
      font-size: rem(30);
      line-height: 140%;
      color: #ffffff;
      @media all and (max-width: 860px) {
        font-size: 20px;
      }
    }

    @media all and (max-width: 960px) {
      width: calc(100% - 80px);
    }
  }
  &__button {
    width: rem(50);
    height: rem(50);
    margin-left: rem(20);
    border: none;
    background: #fff;
    border-radius: 50%;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;

    @media all and (max-width: 960px) {
      flex-shrink: 0;
      margin-right: 20px;
    }
  }
  &__result {
    margin-top: rem(40);
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: rem(30);
    line-height: 140%;
    color: #ffffff;
    @media all and (max-width: 860px) {
      font-size: 20px;
      margin-top: 30px;
    }
  }
  &__items {
    margin-top: rem(60);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: rem(20);
    @media all and (max-width: 860px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__item {
    background: #fff;
    text-decoration: none;
  }
}
</style>
