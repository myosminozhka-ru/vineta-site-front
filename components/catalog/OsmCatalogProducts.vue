<template>
  <div class="products">
    <div v-if="filteredProducts" class="products__items">
      <nuxt-link
        v-for="product in filteredProducts"
        :key="product.ID"
        class="products__item"
        :to="
          localePath({
            name: 'catalog-catalogId-productId',
            params: { productId: product.CODE },
          })
        "
      >
        <div class="products__item_image">
          <div class="image_container">
            <img v-if="product.PREVIEW_PICTURE" :src="$vareibles.remote + product.PREVIEW_PICTURE" alt="" />
            <img v-else :src="require('~/assets/img/product.noimage.png')" alt="" />
          </div>
        </div>
        <div class="products__item_data">
          <span class="products__item_name" :style="'height:' + maxHeight">{{ product.NAME }}</span>
          <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
          <div class="products__item_properties">
            <div v-for="property in product.PROPERIES" :key="property.index" class="products__item_property">
              <template v-if="'NAME' in property && property.NAME">
                <div class="name">{{ property.NAME }}</div>
                <div class="value">{{ property.VALUE }}</div>
              </template>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div v-else class="products__none">
      {{ $t('catalog.empty') }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    products: [],
    maxHeight: 'auto',
  }),
  computed: {
    ...mapGetters(['getCatalog']),
    ...mapGetters(['getFilters']),
    catalogId() {
      return this.$route.params.catalogId
    },
    currentCategory: {
      get() {
        return this.getCatalog.filter((item) => item.CODE === this.catalogId)
      },
      set(newValue) {
        // console.log(newValue);
        return this.getCatalog.filter((item) => item.CODE === this.catalogId)
      },
    },

    filteredProducts() {
      const types = this.getFilters.types
      const params = this.getFilters.params

      if (types || params) {
        if (types.length && params.length) {
          return this.products
            .map((mainProduct) => {
              const type = types.includes(mainProduct.SECTION)
              let filter
              if (mainProduct.PROPERIES_FILTER) {
                filter = Boolean(
                  mainProduct.PROPERIES_FILTER.map((properiesFilter) => {
                    const result = params
                      .map((parameter) => {
                        if (properiesFilter.VALUE.includes(parameter)) {
                          return true
                        } else {
                          return false
                        }
                      })
                      .filter((item) => item !== false)

                    if (result.length) {
                      return true
                    } else {
                      return false
                    }
                  }).filter((item) => item !== false).length
                )
              } else {
                filter = false
              }

              if (type && filter) {
                return mainProduct
              } else {
                return false
              }
            })
            .filter((item) => item !== false)
        } else if (types.length) {
          return this.products.filter((product) => types.includes(product.SECTION))
        } else if (params.length) {
          return this.products
            .map((mainProduct) => {
              let filter
              if (mainProduct.PROPERIES_FILTER) {
                filter = Boolean(
                  mainProduct.PROPERIES_FILTER.map((properiesFilter) => {
                    const result = params
                      .map((parameter) => {
                        if (properiesFilter.VALUE.includes(parameter)) {
                          return true
                        } else {
                          return false
                        }
                      })
                      .filter((item) => item !== false)

                    if (result.length) {
                      return true
                    } else {
                      return false
                    }
                  }).filter((item) => item !== false).length
                )
              } else {
                filter = false
              }

              if (filter) {
                return mainProduct
              } else {
                return false
              }
            })
            .filter((item) => item !== false)
        } else {
          return this.products
        }
      } else {
        return this.products
      }

      // if (this.getFilters.length) {
      //   return this.products.filter((product) => {
      //     let params = []
      //     if ('PROPERIES_FILTER' in product) {
      //       product.PROPERIES_FILTER.map((prop) => {
      //         if (!params) {
      //           params = {}
      //         }
      //         prop.VALUE.map((item) => {
      //           if (!params.includes(item)) {
      //             params = [...params, item]
      //           }
      //           return item
      //         })
      //         return prop
      //       })
      //     }
      //     // console.log(this.findCommonElements(params, this.getFilters));
      //     // console.log(params);
      //     for (const filterParam in this.getFilters) {
      //       if (params.includes(this.getFilters[filterParam])) {
      //         // console.log('filterParam', this.getFilters[filterParam], params);
      //         return product
      //       }
      //     }
      //     return false
      //     // if (this.findCommonElements(this.getFilters, params)) {
      //     //     // console.log(this.getFilters, params)
      //     //     console.log('product', product);
      //     //     return product;
      //     // } else {
      //     //     return false;
      //     // }
      //   })
      // } else {
      //   return this.products
      // }
    },
  },
  created() {
    this.setLoadedStatus(false)
    if (this.currentCategory[0]) {
      this.addBreadcrumbs([
        {
          name: this.$t('buttons.catalog'),
          link: 'catalog',
          isLink: true,
        },
        {
          name: this.currentCategory[0].NAME,
          isLink: false,
        },
      ])
    }
  },
  beforeDestroy() {
    this.products = []
  },
  async mounted() {
    console.log('mounted', this.$route.params.catalogId)
    this.products = await this.$axios.$get(`catalog/elements.php?code=${this.$route.params.catalogId}&sub=y`)

    setTimeout(() => {
      this.createDinamycHeight()
      this.setLoadedStatus(true)
    }, 0)
  },
  methods: {
    createDinamycHeight() {
      this.maxHeight = 'auto'

      setTimeout(() => {
        const panels = document.querySelectorAll('.products__item_name')
        let maxHeight = 0
        const heights = Array.prototype.slice.call(panels).map(function (panel) {
          return panel.offsetHeight
        })
        heights.forEach((el) => (maxHeight = Math.max(el, maxHeight)))

        this.maxHeight = maxHeight + 'px'
      }, 150)
    },
    findCommonElements(arr1, arr2) {
      // console.log(arr1, arr2);
      return arr1.some((item) => {
        // console.log(item);
        if (arr2.includes(item)) {
          arr2.includes(item)
          return item
        } else {
          return false
        }
      })
    },
    ...mapActions(['addBreadcrumbs', 'setLoadedStatus']),
  },
}
</script>
