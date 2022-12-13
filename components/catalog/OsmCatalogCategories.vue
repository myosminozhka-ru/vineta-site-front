<template>
  <div class="categories">
    <!-- <pre>
      {{ 'okhladiteli-masla-i-vody' }}
    </pre> -->
    <div v-for="category in getCatalog" :key="category.ID" class="categories__item">
      <nuxt-link
        :to="
          localePath({
            name: 'catalog-catalogId',
            params: { catalogId: category.CODE },
          })
        "
        class="categories__item_image"
      >
        <div class="image_container">
          <nuxt-img v-if="category.DETAIL_PICTURE" :src="$vareibles.remote + category.DETAIL_PICTURE" alt="" loading="lazy" />
          <nuxt-img v-else src="/product.noimage.png" alt="" loading="lazy" />
        </div>
      </nuxt-link>
      <nuxt-link
        :to="
          localePath({
            name: 'catalog-catalogId',
            params: { catalogId: category.CODE },
          })
        "
        class="categories__item_name"
      >
        {{ category.NAME }}
      </nuxt-link>
      <div>
        <template v-if="'CHILD' in category">
          <ul v-if="'CHILD' in category" class="categories__item_childs">
            <li v-for="child in category.CHILD" :key="child.index">
              <div class="categories__item_category" @click="toggleColumns(child.CODE)">
                {{ child.NAME }}
              </div>
              <!-- <ul v-if="arrayShowColumns.includes(child.CODE)"> -->
              <ul v-if="arrayShowColumns.includes(child.CODE)">
                <li v-for="product in child.ELEMENTS" :key="product.index" class="categories__item_child">
                  <nuxt-link :to="localePath(`/catalog/${child.CODE}/${product.CODE}`)"> — {{ product.NAME }} </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </template>
        <template v-if="'ELEMENTS' in category">
          <ul class="categories__item_childs">
            <li>
              <ul>
                <li v-for="product in category.ELEMENTS" :key="product.index" class="categories__item_child">
                  <nuxt-link :to="localePath(`/catalog/${category.CODE}/${product.CODE}`)">— {{ product.NAME }}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    arrayShowColumns: [],
  }),
  computed: {
    ...mapGetters(['getCatalog']),
    ...mapGetters(['getProducts']),
  },
  methods: {
    toggleColumns(id) {
      if (this.arrayShowColumns.includes(id)) {
        this.arrayShowColumns = this.arrayShowColumns.filter((item) => item !== id)
      } else {
        this.arrayShowColumns.push(id)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  @media all and (max-width: 1280px) {
    margin-bottom: 30px;
  }
  &__item {
    width: calc(100% / 3 - #{rem(40)} / 3);
    &:nth-child(n + 4) {
      margin-top: rem(79);
    }
    @media all and (max-width: 1280px) {
      width: calc(100% / 2 - 10px);
      &:nth-child(n + 3) {
        margin-top: 30px;
      }
    }
    @media all and (max-width: 840px) {
      width: 100%;
      &:nth-child(n + 2) {
        margin-top: 20px;
      }
    }
  }
  &__item_image {
    background: #d7dce1;
    margin-bottom: rem(40);
    display: block;
    padding: 20px;
    @media all and (max-width: 1280px) {
      margin-bottom: 30px;
    }
    @media all and (max-width: 840px) {
      margin-bottom: 20px;
    }
    .image_container {
      position: relative;
      padding-top: 58%;
      @media all and (max-width: 1440px) {
        padding-top: 76%;
      }
      @media all and (max-width: 1280px) {
        padding-top: 58%;
      }
      @media all and (max-width: 840px) {
        padding-top: 83%;
      }
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__item_name {
    margin-bottom: rem(15);
    display: block;
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: rem(20);
    line-height: 140%;
    color: #172242;
    transition: all 0.3s ease;
    cursor: pointer;
    @media all and (max-width: 1280px) {
      margin-bottom: 15px;
      font-size: 20px;
    }
    &:hover {
      color: #ff0040;
    }
  }
  &__item_category {
    margin-bottom: rem(15);
    display: block;
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: rem(16);
    line-height: 140%;
    color: #172242;
    transition: all 0.3s ease;
    @media all and (max-width: 1280px) {
      margin-bottom: 15px;
      font-size: 20px;
    }
    &:hover {
      color: #ff0040;
    }
  }
  &__item_childs {
    margin: 0;
    padding: 0;
    list-style: none;
    ul {
      padding: 0;
      list-style: none;
    }
    & > li:not(:last-child) {
      margin-bottom: rem(15);
    }
    @media all and (max-width: 1280px) {
      padding: 0 0 0 23px;
    }
  }
  &__item_category {
    cursor: pointer;
  }
  &__item_child {
    font-style: normal;
    font-weight: 400;
    font-size: rem(16);
    line-height: 140%;
    color: #555f76;
    @media all and (max-width: 1280px) {
      font-size: 16px;
    }
    &:not(:last-child) {
      margin-bottom: rem(10);
      @media all and (max-width: 1280px) {
        margin-bottom: 10px;
      }
    }
    a {
      text-decoration: none;
      font-style: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      color: inherit;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        bottom: rem(-5);
        height: 0;
        background: #ff0040;
        transition: all 0.3s ease;
        border-radius: rem(5);
      }
    }
    &:hover {
      color: #ff0040;
      a:after {
        height: 1px;
      }
    }
  }
}
</style>
