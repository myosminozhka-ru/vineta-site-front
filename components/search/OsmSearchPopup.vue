<template>
    <div class="seacrhModal" :class="{ 'isOpened': getModals.search.isOpened }" @click="closeSearch">
        <div class="seacrhModal__in">
            <form class="seacrhModal__form" @submit.prevent="goToSearchPage" @click.stop>
                <input type="text" class="seacrhModal__input" placeholder="Поиск по сайту" v-model="searchText">
                <button type="submit" class="seacrhModal__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 27 27" fill="none">
                        <path d="M24.3451 22.656L20.2229 18.5671C21.823 16.572 22.5979 14.0397 22.3882 11.4908C22.1786 8.94188 21.0003 6.5702 19.0957 4.86338C17.1911 3.15655 14.7049 2.24434 12.1483 2.31429C9.59181 2.38425 7.15923 3.43106 5.35081 5.23948C3.54239 7.04791 2.49558 9.48048 2.42562 12.037C2.35566 14.5936 3.26788 17.0797 4.9747 18.9844C6.68152 20.889 9.05321 22.0672 11.6021 22.2769C14.151 22.4866 16.6833 21.7117 18.6784 20.1116L22.7673 24.2004C22.8706 24.3046 22.9935 24.3872 23.1289 24.4437C23.2643 24.5001 23.4095 24.5291 23.5562 24.5291C23.7029 24.5291 23.8481 24.5001 23.9835 24.4437C24.1189 24.3872 24.2418 24.3046 24.3451 24.2004C24.5454 23.9933 24.6573 23.7164 24.6573 23.4282C24.6573 23.1401 24.5454 22.8632 24.3451 22.656V22.656ZM12.4451 20.1116C10.9068 20.1116 9.40304 19.6554 8.124 18.8008C6.84495 17.9461 5.84805 16.7314 5.25937 15.3102C4.67069 13.889 4.51666 12.3251 4.81677 10.8164C5.11687 9.30766 5.85764 7.92179 6.94538 6.83405C8.03312 5.74631 9.41899 5.00555 10.9277 4.70544C12.4365 4.40533 14.0003 4.55936 15.4215 5.14804C16.8427 5.73672 18.0575 6.73362 18.9121 8.01267C19.7667 9.29172 20.2229 10.7955 20.2229 12.3338C20.2229 14.3966 19.4034 16.3749 17.9448 17.8335C16.4862 19.2921 14.5079 20.1116 12.4451 20.1116V20.1116Z" fill="black"/>
                    </svg>
                </button>
            </form>
            <div class="seacrhModal__result" v-if="searchText">
                <template v-if="productsResult.length">
                    Найдено {{ productsResult.length }} результата
                </template>
                <template v-else>
                    Ничего не найдено
                </template>
            </div>
            <div class="seacrhModal__items">
                <a :href="`/catalog/${product.SECTION.CODE}/${product.CODE}`" class="seacrhModal__item" v-for="product in productsResult.slice(0, 4)" :key="product.index">
                    <div class="products__item_image">
                        <div class="image_container">
                            <img :src="$vareibles.remote + product.PREVIEW_PICTURE" alt="">
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
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters(['getProducts']),
        ...mapGetters(['getModals']),
        productsResult() {
            return this.getProducts.filter(product => product.NAME.includes(this.searchText) && this.searchText);
        }
    },
    data: () => ({
        searchText: '',
    }),
    mounted() {
        // console.log(this.getProducts);
    },
    methods: {
        ...mapActions(['toggleModal']),
      closeSearch() {
        this.toggleModal({
          isOpened: false,
          type: 'search'
        })
      },
      goToSearchPage() {
        this.closeSearch();
        this.$router.push({name: 'search', query: {'q': this.searchText}})
      }
    }
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
    transition: all .3s ease;
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
            color: #FFFFFF;
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
    }
    &__result {
        margin-top: rem(40);
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: rem(30);
        line-height: 140%;
        color: #FFFFFF;
    }
    &__items {
        margin-top: rem(60);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: rem(20);
    }
    &__item {
        background: #fff;
        text-decoration: none;
    }
}
</style>