<template>
  <div v-if="product" class="productPage">
    <!-- <pre style="font-size: 15rem;">
      {{ product[0] }}
    </pre> -->
    <div class="productPage__print-up">
      <img src="@/assets/img/logo.svg" alt="" class="img" />
      <p class="title" v-html="printUpText"></p>
    </div>
    <div class="productPage__container">
      <osm-breadcrumbs />
      <osm-product-top :data="product[0]" />
    </div>
    <div class="productPage__top">
      <osm-product-slider :data="product[0]" />
      <div class="productPage__info">
        <!-- <pre style="font-size: 15rem">{{ product[0] }}</pre> -->
        <!-- <div class="productPage__description" v-if="product[0].DETAIL_TEXT"> -->
        <div v-if="false" class="productPage__description">
          <div class="title">Описание</div>
          <div class="value">{{ product[0].DETAIL_TEXT }}</div>
        </div>
        <div class="productPage__text--title">Основные характеристики</div>
        <div v-if="offersCount.length === 1">
          <div v-for="prop in Object.values(product[0].OFFERS)[0].PROPERTIES" :key="prop.index" class="productPage__print--stat">
            <div>
              <div class="productPage__mods--char_title">
                {{ prop.NAME }}
              </div>
              <div class="productPage__mods--char_value">
                {{ prop.VALUE }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="'PROPERIES' in product[0]" class="productPage__texts">
          <div v-for="item in product[0].PROPERIES" :key="item.index" class="productPage__text">
            <template v-if="'NAME' in item && item.NAME">
              <div class="title">{{ item.NAME }}</div>
              <div class="value">{{ item.VALUE }}</div>
            </template>
          </div>
        </div>
        <div class="productPage__buttons">
          <div @click="openBuy">
            <osm-button class="productPage__buttons--buy">{{ $t('buttons.checkout') }}</osm-button>
          </div>
          <div :data-product_id="product[0].ID" @click="addFavorites(product[0].ID)">
            <osm-button class="productPage__buttons--fav" :outlined="true">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none" stroke="#172242">
                  <rect width="28" height="28" rx="15" x="1" y="1" fill="none" stroke-width="1.5"></rect>
                  <path d="M22.9788 12.7966C22.9243 12.6295 22.7767 12.5102 22.602 12.4916L17.4819 11.972L15.4058 7.26423C15.3348 7.10463 15.1757 7 15.0001 7C14.8245 7 14.6654 7.10374 14.5945 7.26512L12.5179 11.9725L7.39867 12.4916C7.22399 12.5093 7.07592 12.6299 7.02183 12.7966C6.9673 12.9638 7.01695 13.1473 7.14818 13.2643L10.9839 16.6949L9.89642 21.7236C9.85962 21.8952 9.92701 22.0725 10.0693 22.1758C10.1469 22.2321 10.2382 22.2605 10.33 22.2605C10.4067 22.2605 10.4838 22.2406 10.553 22.1998L15.0005 19.6107L19.4472 22.1998C19.5988 22.2871 19.7886 22.2787 19.9309 22.1736C20.0728 22.0721 20.141 21.893 20.1042 21.7214L19.0167 16.6922L22.8529 13.2621C22.9833 13.1469 23.0334 12.9633 22.9788 12.7966ZM18.2325 16.2054C18.1137 16.3118 18.0609 16.4737 18.0946 16.6297L19.0243 20.9278L15.2231 18.7156C15.0852 18.6349 14.915 18.6349 14.7771 18.7156L10.9751 20.9278L11.9047 16.6297C11.9384 16.4737 11.8857 16.3118 11.7669 16.2054L8.48794 13.2736L12.8637 12.8294C13.0224 12.8139 13.1598 12.7124 13.2245 12.567L14.9997 8.54281L16.7743 12.567C16.8391 12.7124 16.9765 12.8139 17.1352 12.8294L21.5109 13.2736L18.2325 16.2054Z" fill="#172242" stroke="#172242" stroke-width="0.6"></path>
                </svg>
              </div>
              <div class="text">{{ $t('buttons.to_favorites') }}</div>
            </osm-button>
          </div>
          <template v-if="getDownloads['katalog-produktsii']">
            <a v-if="'PROPERIES' in getDownloads['katalog-produktsii']" :href="getDownloads['katalog-produktsii'].PROPERIES[0].VALUE.SRC" download="catalogue_Vineta" target="_blank" class="productPage__link hide_off_mobile">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 15 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33396 17.2091L6.33396 0H8.18582L8.18581 17.2091L12.4977 12.8972C12.8593 12.5356 13.4456 12.5356 13.8072 12.8972C14.1688 13.2588 14.1688 13.845 13.8072 14.2066L7.91462 20.0992C7.55302 20.4608 6.96676 20.4608 6.60516 20.0992L0.712604 14.2066C0.351007 13.845 0.351007 13.2588 0.712604 12.8972C1.0742 12.5356 1.66046 12.5356 2.02206 12.8972L6.33396 17.2091Z" fill="#FF0040" />
                </svg>
              </div>
              <div class="text">
                {{ $t('buttons.download_catalog') }}
              </div>
            </a>
          </template>
        </div>
      </div>
    </div>
    <div class="productPage__container">
      <div id="modifications" class="productPage__mods">
        <div class="productPage__mods--tabs hide_on_tablet">
          <div class="titles">
            <div v-if="'DETAIL_TEXT' in product[0] && product[0].DETAIL_TEXT" @click.prevent="tabsSelect(1)" :class="{ isActive: tabs.selected === 1 || tabs.selected === null }">
              <osm-button class="productPage__mods--opener" :large="true" :class="{ isActive: tabs.selected === 1 || tabs.selected === null }" :outlined="true"> Описание</osm-button>
            </div>
            <div v-if="hasChar" @click.prevent="tabsSelect(2)" :class="{ isActive: tabs.selected === 2 }">
              <osm-button class="productPage__mods--opener" :large="true" :class="{ isActive: tabs.selected === 2 }" :outlined="true"> Характеристики </osm-button>
            </div>
            <div v-if="hasMod" @click.prevent="tabsSelect(3)" :class="{ isActive: tabs.selected === 3 }">
              <osm-button class="productPage__mods--opener" :large="true" :class="{ isActive: tabs.selected === 3 }" :outlined="true"> Модификации ({{ offersCount.length }})</osm-button>
            </div>
          </div>
          <div class="tabs">
            <div v-show="(tabs.selected === 1 || tabs.selected === null) && 'DETAIL_TEXT' in product[0] && product[0].DETAIL_TEXT" class="productPage__mods--tab productPage__mods--bg">
              <div class="title">Описание</div>
              <div class="value">
                <div class="value__in" v-html="product[0].DETAIL_TEXT"></div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">{{ $t('buttons.checkout') }}</osm-button>
                </div>
                <div :data-product_id="product[0].ID" @click="addFavorites(product[0].ID)">
                  <osm-button class="productPage__buttons--fav" :outlined="true">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none" stroke="#172242">
                        <rect width="28" height="28" rx="15" x="1" y="1" fill="none" stroke-width="1.5"></rect>
                        <path d="M22.9788 12.7966C22.9243 12.6295 22.7767 12.5102 22.602 12.4916L17.4819 11.972L15.4058 7.26423C15.3348 7.10463 15.1757 7 15.0001 7C14.8245 7 14.6654 7.10374 14.5945 7.26512L12.5179 11.9725L7.39867 12.4916C7.22399 12.5093 7.07592 12.6299 7.02183 12.7966C6.9673 12.9638 7.01695 13.1473 7.14818 13.2643L10.9839 16.6949L9.89642 21.7236C9.85962 21.8952 9.92701 22.0725 10.0693 22.1758C10.1469 22.2321 10.2382 22.2605 10.33 22.2605C10.4067 22.2605 10.4838 22.2406 10.553 22.1998L15.0005 19.6107L19.4472 22.1998C19.5988 22.2871 19.7886 22.2787 19.9309 22.1736C20.0728 22.0721 20.141 21.893 20.1042 21.7214L19.0167 16.6922L22.8529 13.2621C22.9833 13.1469 23.0334 12.9633 22.9788 12.7966ZM18.2325 16.2054C18.1137 16.3118 18.0609 16.4737 18.0946 16.6297L19.0243 20.9278L15.2231 18.7156C15.0852 18.6349 14.915 18.6349 14.7771 18.7156L10.9751 20.9278L11.9047 16.6297C11.9384 16.4737 11.8857 16.3118 11.7669 16.2054L8.48794 13.2736L12.8637 12.8294C13.0224 12.8139 13.1598 12.7124 13.2245 12.567L14.9997 8.54281L16.7743 12.567C16.8391 12.7124 16.9765 12.8139 17.1352 12.8294L21.5109 13.2736L18.2325 16.2054Z" fill="#172242" stroke="#172242" stroke-width="0.6"></path>
                      </svg>
                    </div>
                    <div class="text">{{ $t('buttons.to_favorites') }}</div>
                  </osm-button>
                </div>
              </div>
            </div>
            <div v-if="hasChar" v-show="tabs.selected === 2" class="productPage__mods--tab productPage__mods--bg">
              <div class="title">Характеристики</div>
              <div class="value">
                <!-- <pre style="font-size: 15rem">{{product[0]}}</pre> -->
                <div class="productPage__mods--chars">
                  <div v-for="prop in product[0].PROPERIES" :key="prop.index" class="productPage__mods--char">
                    <template v-if="'NAME' in prop && prop.NAME">
                      <div class="productPage__mods--char_title">
                        {{ prop.NAME }}
                      </div>
                      <div class="productPage__mods--char_value">
                        {{ prop.VALUE }}
                      </div>
                    </template>
                  </div>
                  <template v-if="offersCount.length === 1">
                    <div v-for="prop in Object.values(product[0].OFFERS)[0].PROPERTIES" :key="prop.index" class="productPage__mods--char">
                      <template>
                        <div class="productPage__mods--char_title">
                          {{ prop.NAME }}
                        </div>
                        <div class="productPage__mods--char_value">
                          {{ prop.VALUE }}
                        </div>
                      </template>
                    </div>
                  </template>
                </div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">{{ $t('buttons.checkout') }}</osm-button>
                </div>
                <div :data-product_id="product[0].ID" @click="addFavorites(product[0].ID)">
                  <osm-button class="productPage__buttons--fav" :outlined="true">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none" stroke="#172242">
                        <rect width="28" height="28" rx="15" x="1" y="1" fill="none" stroke-width="1.5"></rect>
                        <path d="M22.9788 12.7966C22.9243 12.6295 22.7767 12.5102 22.602 12.4916L17.4819 11.972L15.4058 7.26423C15.3348 7.10463 15.1757 7 15.0001 7C14.8245 7 14.6654 7.10374 14.5945 7.26512L12.5179 11.9725L7.39867 12.4916C7.22399 12.5093 7.07592 12.6299 7.02183 12.7966C6.9673 12.9638 7.01695 13.1473 7.14818 13.2643L10.9839 16.6949L9.89642 21.7236C9.85962 21.8952 9.92701 22.0725 10.0693 22.1758C10.1469 22.2321 10.2382 22.2605 10.33 22.2605C10.4067 22.2605 10.4838 22.2406 10.553 22.1998L15.0005 19.6107L19.4472 22.1998C19.5988 22.2871 19.7886 22.2787 19.9309 22.1736C20.0728 22.0721 20.141 21.893 20.1042 21.7214L19.0167 16.6922L22.8529 13.2621C22.9833 13.1469 23.0334 12.9633 22.9788 12.7966ZM18.2325 16.2054C18.1137 16.3118 18.0609 16.4737 18.0946 16.6297L19.0243 20.9278L15.2231 18.7156C15.0852 18.6349 14.915 18.6349 14.7771 18.7156L10.9751 20.9278L11.9047 16.6297C11.9384 16.4737 11.8857 16.3118 11.7669 16.2054L8.48794 13.2736L12.8637 12.8294C13.0224 12.8139 13.1598 12.7124 13.2245 12.567L14.9997 8.54281L16.7743 12.567C16.8391 12.7124 16.9765 12.8139 17.1352 12.8294L21.5109 13.2736L18.2325 16.2054Z" fill="#172242" stroke="#172242" stroke-width="0.6"></path>
                      </svg>
                    </div>
                    <div class="text">{{ $t('buttons.to_favorites') }}</div>
                  </osm-button>
                </div>
              </div>
            </div>
            <div v-if="hasMod && tabs.selected === 3" class="productPage__mods--tab">
              <div class="title">Модификации ({{ offersCount.length }})</div>
              <div class="value">
                <!-- <pre style="font-size: 15rem">{{product[0] }}</pre> -->
                <div class="productPage__mods--mods">
                  <!-- <pre>
                    {{ product[0].OFFERS.length }}
                  </pre> -->
                  <table class="productPage__mods--mods_table">
                    <thead>
                      <tr>
                        <td v-for="(proper, index) in Object.values(product[0].OFFERS)[0].PROPERTIES" :key="index" class="productPage__mods--mods_title-table">
                          {{ proper.NAME }}
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="mod in product[0].OFFERS" :key="mod.index" class="productPage__mods--mod-table">
                        <td v-for="proper in mod.PROPERTIES" :key="proper.index" class="productPage__mods--mods_val-table">
                          {{ proper.VALUE }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">{{ $t('buttons.checkout') }}</osm-button>
                </div>
                <div :data-product_id="product[0].ID" @click="addFavorites(product[0].ID)">
                  <osm-button class="productPage__buttons--fav" :outlined="true">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none" stroke="#172242">
                        <rect width="28" height="28" rx="15" x="1" y="1" fill="none" stroke-width="1.5"></rect>
                        <path d="M22.9788 12.7966C22.9243 12.6295 22.7767 12.5102 22.602 12.4916L17.4819 11.972L15.4058 7.26423C15.3348 7.10463 15.1757 7 15.0001 7C14.8245 7 14.6654 7.10374 14.5945 7.26512L12.5179 11.9725L7.39867 12.4916C7.22399 12.5093 7.07592 12.6299 7.02183 12.7966C6.9673 12.9638 7.01695 13.1473 7.14818 13.2643L10.9839 16.6949L9.89642 21.7236C9.85962 21.8952 9.92701 22.0725 10.0693 22.1758C10.1469 22.2321 10.2382 22.2605 10.33 22.2605C10.4067 22.2605 10.4838 22.2406 10.553 22.1998L15.0005 19.6107L19.4472 22.1998C19.5988 22.2871 19.7886 22.2787 19.9309 22.1736C20.0728 22.0721 20.141 21.893 20.1042 21.7214L19.0167 16.6922L22.8529 13.2621C22.9833 13.1469 23.0334 12.9633 22.9788 12.7966ZM18.2325 16.2054C18.1137 16.3118 18.0609 16.4737 18.0946 16.6297L19.0243 20.9278L15.2231 18.7156C15.0852 18.6349 14.915 18.6349 14.7771 18.7156L10.9751 20.9278L11.9047 16.6297C11.9384 16.4737 11.8857 16.3118 11.7669 16.2054L8.48794 13.2736L12.8637 12.8294C13.0224 12.8139 13.1598 12.7124 13.2245 12.567L14.9997 8.54281L16.7743 12.567C16.8391 12.7124 16.9765 12.8139 17.1352 12.8294L21.5109 13.2736L18.2325 16.2054Z" fill="#172242" stroke="#172242" stroke-width="0.6"></path>
                      </svg>
                    </div>
                    <div class="text">{{ $t('buttons.to_favorites') }}</div>
                  </osm-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="productPage__mods--tabs hide_on_desktop">
          <div class="tabs">
            <div v-if="'DETAIL_TEXT' in product[0] && product[0].DETAIL_TEXT" class="tabs__opener" :class="{ isActive: tabs.selected === 1 }" @click.prevent="tabsSelect(1)">
              <div class="text">Описание</div>
              <div class="arrow">
                <svg data-v-975c5a0e="" xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                  <path data-v-975c5a0e="" d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"></path>
                </svg>
              </div>
            </div>
            <div v-show="tabs.selected === 1 && 'DETAIL_TEXT' in product[0] && product[0].DETAIL_TEXT" class="productPage__mods--tab productPage__mods--bg">
              <div class="title">Описание</div>
              <div class="value">
                <div class="value__in" v-html="product[0].DETAIL_TEXT"></div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">{{ $t('buttons.checkout') }}</osm-button>
                </div>
                <div :data-product_id="product[0].ID" @click="addFavorites(product[0].ID)">
                  <osm-button class="productPage__buttons--fav" :outlined="true">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none" stroke="#172242">
                        <rect width="28" height="28" rx="15" x="1" y="1" fill="none" stroke-width="1.5"></rect>
                        <path d="M22.9788 12.7966C22.9243 12.6295 22.7767 12.5102 22.602 12.4916L17.4819 11.972L15.4058 7.26423C15.3348 7.10463 15.1757 7 15.0001 7C14.8245 7 14.6654 7.10374 14.5945 7.26512L12.5179 11.9725L7.39867 12.4916C7.22399 12.5093 7.07592 12.6299 7.02183 12.7966C6.9673 12.9638 7.01695 13.1473 7.14818 13.2643L10.9839 16.6949L9.89642 21.7236C9.85962 21.8952 9.92701 22.0725 10.0693 22.1758C10.1469 22.2321 10.2382 22.2605 10.33 22.2605C10.4067 22.2605 10.4838 22.2406 10.553 22.1998L15.0005 19.6107L19.4472 22.1998C19.5988 22.2871 19.7886 22.2787 19.9309 22.1736C20.0728 22.0721 20.141 21.893 20.1042 21.7214L19.0167 16.6922L22.8529 13.2621C22.9833 13.1469 23.0334 12.9633 22.9788 12.7966ZM18.2325 16.2054C18.1137 16.3118 18.0609 16.4737 18.0946 16.6297L19.0243 20.9278L15.2231 18.7156C15.0852 18.6349 14.915 18.6349 14.7771 18.7156L10.9751 20.9278L11.9047 16.6297C11.9384 16.4737 11.8857 16.3118 11.7669 16.2054L8.48794 13.2736L12.8637 12.8294C13.0224 12.8139 13.1598 12.7124 13.2245 12.567L14.9997 8.54281L16.7743 12.567C16.8391 12.7124 16.9765 12.8139 17.1352 12.8294L21.5109 13.2736L18.2325 16.2054Z" fill="#172242" stroke="#172242" stroke-width="0.6"></path>
                      </svg>
                    </div>
                    <div class="text">В избранное</div>
                  </osm-button>
                </div>
              </div>
            </div>
            <div v-if="hasChar" class="tabs__opener" :class="{ isActive: tabs.selected === 2 }" @click.prevent="tabsSelect(2)">
              <div class="text">Характеристики</div>
              <div class="arrow">
                <svg data-v-975c5a0e="" xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                  <path data-v-975c5a0e="" d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"></path>
                </svg>
              </div>
            </div>
            <div v-if="hasChar" v-show="tabs.selected === 2" class="productPage__mods--tab productPage__mods--bg">
              <div class="title">Характеристики</div>
              <div class="value">
                <div class="productPage__mods--chars">
                  <div v-for="prop in product[0].PROPERIES" :key="prop.index" class="productPage__mods--char">
                    <template v-if="'NAME' in prop && prop.NAME">
                      <div class="productPage__mods--char_title">
                        {{ prop.NAME }}
                      </div>
                      <div class="productPage__mods--char_value">
                        {{ prop.VALUE }}
                      </div>
                    </template>
                  </div>
                  <template v-if="offersCount.length === 1">
                    <div v-for="prop in Object.values(product[0].OFFERS)[0].PROPERTIES" :key="prop.index" class="productPage__mods--char">
                      <template>
                        <div class="productPage__mods--char_title">
                          {{ prop.NAME }}
                        </div>
                        <div class="productPage__mods--char_value">
                          {{ prop.VALUE }}
                        </div>
                      </template>
                    </div>
                  </template>
                </div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">{{ $t('buttons.checkout') }}</osm-button>
                </div>
                <div :data-product_id="product[0].ID" @click="addFavorites(product[0].ID)">
                  <osm-button class="productPage__buttons--fav" :outlined="true">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none" stroke="#172242">
                        <rect width="28" height="28" rx="15" x="1" y="1" fill="none" stroke-width="1.5"></rect>
                        <path d="M22.9788 12.7966C22.9243 12.6295 22.7767 12.5102 22.602 12.4916L17.4819 11.972L15.4058 7.26423C15.3348 7.10463 15.1757 7 15.0001 7C14.8245 7 14.6654 7.10374 14.5945 7.26512L12.5179 11.9725L7.39867 12.4916C7.22399 12.5093 7.07592 12.6299 7.02183 12.7966C6.9673 12.9638 7.01695 13.1473 7.14818 13.2643L10.9839 16.6949L9.89642 21.7236C9.85962 21.8952 9.92701 22.0725 10.0693 22.1758C10.1469 22.2321 10.2382 22.2605 10.33 22.2605C10.4067 22.2605 10.4838 22.2406 10.553 22.1998L15.0005 19.6107L19.4472 22.1998C19.5988 22.2871 19.7886 22.2787 19.9309 22.1736C20.0728 22.0721 20.141 21.893 20.1042 21.7214L19.0167 16.6922L22.8529 13.2621C22.9833 13.1469 23.0334 12.9633 22.9788 12.7966ZM18.2325 16.2054C18.1137 16.3118 18.0609 16.4737 18.0946 16.6297L19.0243 20.9278L15.2231 18.7156C15.0852 18.6349 14.915 18.6349 14.7771 18.7156L10.9751 20.9278L11.9047 16.6297C11.9384 16.4737 11.8857 16.3118 11.7669 16.2054L8.48794 13.2736L12.8637 12.8294C13.0224 12.8139 13.1598 12.7124 13.2245 12.567L14.9997 8.54281L16.7743 12.567C16.8391 12.7124 16.9765 12.8139 17.1352 12.8294L21.5109 13.2736L18.2325 16.2054Z" fill="#172242" stroke="#172242" stroke-width="0.6"></path>
                      </svg>
                    </div>
                    <div class="text">В избранное</div>
                  </osm-button>
                </div>
              </div>
            </div>
            <div v-if="hasMod" class="tabs__opener" :class="{ isActive: tabs.selected === 3 }" @click.prevent="tabsSelect(3)">
              <div class="text">Модификации ({{ offersCount.length }})</div>
              <div class="arrow">
                <svg data-v-975c5a0e="" xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                  <path data-v-975c5a0e="" d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"></path>
                </svg>
              </div>
            </div>
            <div v-if="hasMod && tabs.selected === 3">
              <div v-for="(mod, key, index) in product[0].OFFERS" :key="key" class="productPage__mods--tab productPage__mods--bg" @click="modsSelect(index)">
                <div class="title title__opener">
                  <span>Модификация {{ index + 1 }}</span>
                  <div class="arrow">
                    <svg data-v-975c5a0e="" xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                      <path data-v-975c5a0e="" d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"></path>
                    </svg>
                  </div>
                </div>
                <div v-if="tabs.openedMod === index" class="value" @click.stop>
                  <div class="value__in">
                    <div class="productPage__mods--mods">
                      <div class="productPage__mods--mod">
                        <div class="productPage__mods--mods_items">
                          <div class="productPage__mods--mods_item">
                            <div v-for="proper in mod.PROPERTIES" :key="proper.index" class="productPage__mods--mods_val">
                              <div class="productPage__mods--mods_val_title">
                                <b>{{ proper.NAME }}</b>
                              </div>
                              <div class="productPage__mods--mods_val_value">
                                {{ proper.VALUE }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="tabs.openedMod === index" class="productPage__buttons" @click.stop>
                  <div @click="openBuy">
                    <osm-button class="productPage__buttons--buy">{{ $t('buttons.checkout') }}</osm-button>
                  </div>
                  <div :data-product_id="product[0].ID" @click="addFavorites(product[0].ID)">
                    <osm-button class="productPage__buttons--fav" :outlined="true">
                      <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none" stroke="#172242">
                          <rect width="28" height="28" rx="15" x="1" y="1" fill="none" stroke-width="1.5"></rect>
                          <path d="M22.9788 12.7966C22.9243 12.6295 22.7767 12.5102 22.602 12.4916L17.4819 11.972L15.4058 7.26423C15.3348 7.10463 15.1757 7 15.0001 7C14.8245 7 14.6654 7.10374 14.5945 7.26512L12.5179 11.9725L7.39867 12.4916C7.22399 12.5093 7.07592 12.6299 7.02183 12.7966C6.9673 12.9638 7.01695 13.1473 7.14818 13.2643L10.9839 16.6949L9.89642 21.7236C9.85962 21.8952 9.92701 22.0725 10.0693 22.1758C10.1469 22.2321 10.2382 22.2605 10.33 22.2605C10.4067 22.2605 10.4838 22.2406 10.553 22.1998L15.0005 19.6107L19.4472 22.1998C19.5988 22.2871 19.7886 22.2787 19.9309 22.1736C20.0728 22.0721 20.141 21.893 20.1042 21.7214L19.0167 16.6922L22.8529 13.2621C22.9833 13.1469 23.0334 12.9633 22.9788 12.7966ZM18.2325 16.2054C18.1137 16.3118 18.0609 16.4737 18.0946 16.6297L19.0243 20.9278L15.2231 18.7156C15.0852 18.6349 14.915 18.6349 14.7771 18.7156L10.9751 20.9278L11.9047 16.6297C11.9384 16.4737 11.8857 16.3118 11.7669 16.2054L8.48794 13.2736L12.8637 12.8294C13.0224 12.8139 13.1598 12.7124 13.2245 12.567L14.9997 8.54281L16.7743 12.567C16.8391 12.7124 16.9765 12.8139 17.1352 12.8294L21.5109 13.2736L18.2325 16.2054Z" fill="#172242" stroke="#172242" stroke-width="0.6"></path>
                        </svg>
                      </div>
                      <div class="text">В избранное</div>
                    </osm-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="productPage__analogs">
        <div class="productPage__analogs_top">
          <div class="title">Аналоги</div>
          <div class="productPage__analogs_top_arrows hide_on_desktop">
            <button class="productPage__arrow productPage__arrow--left" data-glide-dir="<" @click="prevSlide">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" fill="#FF004D" />
                <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2" />
              </svg>
            </button>
            <button class="productPage__arrow productPage__arrow--right" @click="nextSlide">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" fill="#FF004D" />
                <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2" />
              </svg>
            </button>
          </div>
        </div>
        <div class="values glide">
          <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">
              <nuxt-link 
                v-for="prod in analogsItems.slice(0, 4)" 
                :key="prod.index"
                class="products__item"
                :to="
                  localePath({
                    name: 'catalog-catalogId-productId',
                    params: { productId: prod.CODE },
                  })
                "
              >
                <!-- <pre style="font-size: 15rem">{{ prod.CODE }}</pre> -->
                <div class="products__item_image">
                  <div class="image_container">
                    <img :src="$vareibles.remote + prod.PREVIEW_PICTURE" alt="" />
                  </div>
                </div>
                <div class="products__item_data">
                  <span class="products__item_name">
                    {{ prod.NAME }}
                  </span>
                  <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
                  <div class="products__item_properties">
                    <div v-for="property in prod.PROPERIES.slice(0, 3)" :key="property.index" class="products__item_property">
                      <template v-if="'NAME' in property && property.NAME">
                        <div class="name">{{ property.NAME }}</div>
                        <div class="value">{{ property.VALUE }}</div>
                      </template>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="product[0] && 'OFFERS' in product[0]" class="mods_for_print">
      <h3>Модификации ({{ offersCount.length }})</h3>
      <!-- <div>
        <table class="titles" v-for="mod in product[0].OFFERS" :key="mod.index">
          
        </table>
      </div> -->
      <table>
        <thead v-for="mod in product[0].OFFERS" :key="mod.index">
          <tr>
            <td v-for="proper in mod.PROPERTIES.slice(0, 7)" :key="proper.index">
              {{ proper.NAME }}
            </td>
          </tr>
        </thead>
        <tbody v-for="mod in product[0].OFFERS" :key="mod.index">
          <tr>
            <td v-for="proper in mod.PROPERTIES.slice(0, 7)" :key="proper.index">
              {{ proper.VALUE }}
            </td>
          </tr>
        </tbody>
        <tbody></tbody>
      </table>
      <!-- <div class="value">
        <div class="productPage__mods--mods">
          <div
            class="productPage__mods--mod"
            v-for="mod in product[0].OFFERS"
            :key="mod.index"
          >
            <div class="productPage__mods--mods_titles">
              <div
                class="productPage__mods--mods_title"
                v-for="proper in mod.PROPERTIES"
                :key="proper.index"
              >
                {{ proper.NAME }}
              </div>
            </div>
            <div class="productPage__mods--mods_items">
              <div class="productPage__mods--mods_item">
                <div
                  class="productPage__mods--mods_val"
                  v-for="proper in mod.PROPERTIES"
                  :key="proper.index"
                >
                  {{ proper.VALUE }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <osm-modals-buy />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Glide from '@glidejs/glide'
export default {
  name: 'CatalogPage',
  components: {
    OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
    OsmProductTop: () => import('~/components/product/OsmProductTop.vue'),
    OsmProductSlider: () => import('~/components/product/OsmProductSlider.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
    OsmModalsBuy: () => import('~/components/modals/buy.vue'),
  },
  data() {
    return {
      tabs: {
        selected: 1,
        openedMod: 0,
      },
      product: null,
      products: [],
      prodsSlider: null,
      offersCount: [],
      printUpText: '187026, Санкт-Петербург, Ленинградская обл., Тосненский район, <br>г. Никольское, Ульяновское шоссе, 5Г <br>тел./факс: +7(812) 493-50-48 info@vineta.ru',
    }
  },
  async fetch() {
    await this.setLoadedStatus(false)
    this.product = await this.$axios.$get(`catalog/detail.php?code=${this.$route.params.productId}`)
    this.products = await this.$axios.$get(`catalog/elements.php?code=${this.$route.params.catalogId}&sub=y`)
    await this.setLoadedStatus(true)
  },
  head() {
    return {
      title: this.product && 'SEO' in this.product[0] ? this.product[0].SEO.META.TITLE : '',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.product && 'SEO' in this.product[0] ? this.product[0].SEO.META.DESCRIPTION : 'DESCRIPTION',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.product && 'SEO' in this.product[0] ? this.product[0].SEO.META.KEYWORDS : '',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://vineta.fvds.ru/',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.product && 'SEO' in this.product[0] ? this.product[0].SEO.META.TITLE : '',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.product && 'SEO' in this.product[0] ? this.product[0].SEO.META.DESCRIPTION : '',
        },
        {
          hid: 'twitter:imag',
          name: 'twitter:imag',
          content: this.product && 'PREVIEW_PICTURE' in this.product[0] ? this.$vareibles.remote + this.product[0].PREVIEW_PICTURE : require('~/assets/img/product.noimage.png'),
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getDownloads']),
    analogsItems() {
      return this.products.slice(1, 5)
    },
    hasChar() {
      const first = !!(this.product[0].PROPERIES && this.product[0].PROPERIES.find(i => i.NAME !== null))
      const second = !!(this.offersCount && this.offersCount.length === 1)
      return !(first === false && second === false)
    },
    hasMod() {
      return !!(this.offersCount && this.offersCount.length > 1)
    }
  },
  watch: {
    '$route.params.productId': {
      handler() {
        this.$fetch()
      },
    },
  },
  created() {
    //  this.setLoadedStatus(false)
  },
  async mounted() {
    await this.$fetch()
    this.addBreadcrumbs([
      {
        name: 'Главная',
        link: 'index',
        isLink: true,
      },
      {
        name: 'Каталог',
        link: 'catalog',
        isLink: true,
      },
      {
        name: this.product[0].SECTION_ARRAY.NAME,
        link: 'catalog-catalogId',
        params: {
          catalogId: this.product[0].SECTION,
        },
        isLink: true,
      },
      {
        name: this.product[0].NAME,
        isLink: false,
      },
    ])
    if ('DETAIL_TEXT' in this.product[0] && !this.product[0].DETAIL_TEXT) {
      this.tabs.selected = 2
    }
    if ('OFFERS' in this.product[0]) {
      this.offersCount = Object.values(this.product[0].OFFERS)
    }
    if (window.innerWidth <= 1280) {
      setTimeout(() => {
        this.prodsSlider = new Glide('.productPage__analogs .values.glide', {
          perView: 3,
          type: 'carousel',

          breakpoints: {
            860: {
              perView: 1,
              gap: 0,
            },
          },
        }).mount()
      }, 500)
    }
  },
  methods: {
    ...mapActions(['toggleModal']),
    ...mapActions('localStorage', ['addFavorites']),
    ...mapActions(['addBreadcrumbs', 'setLoadedStatus']),
    openBuy() {
      this.toggleModal({
        isOpened: true,
        type: 'buy',
      })
    },
    prevSlide() {
      if (!this.prodsSlider) return
      this.prodsSlider.go('<')
    },
    nextSlide() {
      if (!this.prodsSlider) return
      this.prodsSlider.go('>')
    },
    tabsSelect(index) {
      if (this.tabs.selected === index) {
        this.tabs.selected = null
      } else {
        this.tabs.selected = index
      }
    },
    modsSelect(index) {
      if (this.tabs.openedMod === index) {
        this.tabs.openedMod = null
      } else {
        this.tabs.openedMod = index
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@media print {
  @page {
    size: auto;
    margin: 0.7cm 1.2cm;
  }
}

.productPage__print--stat {
  display: none;

  @media print {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100vw;

    & > div {
      display: flex;
    }

    .productPage__mods--char_title {
      margin-right: 10px;
    }
  }
}

.mods_for_print {
  // display: none;
  color: #172242;
  font-size: 10px;
  display: none;

  table {
    width: 100%;
    thead:not(:first-of-type) {
      display: none;
    }
    thead {
      tr {
        font-weight: bold;
        vertical-align: top;
      }
    }
  }

  @media print {
    display: block;
    margin-top: -60px;
  }
}

.productPage {
  padding: rem(150) 0 rem(150);
  max-width: 100%;
  background: #fff;

  @media all and (max-width: 1440px) {
    padding: 130px 0 120px;
  }

  @media all and (max-width: 1280px) {
    padding: 30px 20px;
  }

  &__print-up {
    display: none;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;

    .title {
      text-align: right;
      font-size: 15px;
    }

    @media print {
      display: flex;
    }
  }

  &__analogs {
    margin-top: rem(118);

    @media print {
      display: none;
    }

    .glide__track {
      min-width: 100%;
    }

    * {
      white-space: normal;
    }

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: rem(40);
      margin-bottom: rem(30);
      line-height: 110%;
      color: #172242;
    }

    .values {
      display: flex;
      align-items: flex-start;

      @media all and (max-width: 1280px) {
        flex-wrap: wrap;
      }
    }

    .products__item {
      width: calc(100% / 4 - #{rem(60)} / 4);
      margin-top: 0;

      &:not(:nth-child(4n + 4)) {
        margin-right: rem(20);
      }

      @media all and (max-width: 1280px) {
        width: calc(100% / 3 - #{rem(40)} / 3);
        margin-top: 0;

        &:not(:nth-child(4n + 4)) {
          margin-right: 0;
        }

        &:not(:nth-child(3n + 3)) {
          margin-right: 20px;
        }

        // &:nth-child(n+4){
        //   display: none;
        // }
      }

      @media all and (max-width: 840px) {
        width: 100%;
        margin-top: 0;
        margin-right: 0;
      }
    }
    .products__item_name {
      height: rem(81);
      overflow: hidden;
    }
  }

  &__mods {
    padding-top: rem(60);
  }

  &__mods--tabs {
    @media print {
      display: none;
    }
    &.hide_on_tablet .titles .isActive {
      pointer-events: none;
    }
    .titles {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: rem(22);
      width: calc(828rem + 98rem + 24rem - 240rem);

      div {
        flex: 1 1 auto;

        &:last-child .productPage__mods--opener {
          margin-right: 0;
        }
      }
    }

    .value {
      background: #fff;
    }

    .tabs {
      margin-top: rem(60);

      @media all and (max-width: 1280px) {
        margin-top: 0;
      }

      &__opener {
        background: #ffffff;
        border: 1px solid #d7dce1;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        margin-top: 20px;

        .text {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 140%;
          color: #172242;
        }

        .arrow {
          width: 16px;
        }

        &.isActive {
          background: #ff0040;
          border-color: #ff0040;

          .text {
            color: #fff;
          }

          .arrow {
            transform: rotate(180deg);

            svg path {
              stroke: #fff;
            }
          }
        }

        @media print {
          display: none;
        }
      }
    }
  }

  &__mods--tab {
    @media print {
      padding-top: 0;
      display: block !important;
    }

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: rem(24);
      margin-bottom: rem(30);
      line-height: 140%;
      color: #172242;

      @media all and (max-width: 860px) {
        font-size: 18px;
      }

      @media print {
        font-size: rem(13);
        margin-bottom: rem(5);
      }
    }

    .value {
      &__in {
        padding: rem(40);
        font-style: normal;
        font-weight: 400;
        font-size: rem(20);
        line-height: 140%;
        color: #555f76;

        @media all and (max-width: 1280px) {
          padding: 30px;
        }

        @media all and (max-width: 860px) {
          font-size: 16px;
          padding: 20px;
        }

        @media print {
          font-size: rem(11);
        }
      }
    }
  }

  &__mods--bg {
    padding: rem(50) rem(40) rem(40);
    background: #f2f2f2;

    @media all and (max-width: 1280px) {
      padding: 20px;
    }
  }

  &__mods--opener {
    margin-right: rem(20);

    &:not(.isActive) {
      filter: grayscale(1);
      opacity: 0.3;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: rem(42);

    @media all and (max-width: 1280px) {
      margin-left: 40px;
    }

    @media all and (max-width: 840px) {
      margin-left: 0;
      margin-top: 0;
      justify-content: center;
    }

    .text {
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 1;
      color: #ff0040;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 100%;
        bottom: rem(-5);
        height: rem(2);
        border-radius: rem(2);
        background: #ff0040;
        transition: all 0.3s ease;
      }

      @media all and (max-width: 1280px) {
        font-size: 16px;
      }
    }

    &:hover .text:after {
      right: 0;
    }

    .icon {
      width: rem(18);
      height: rem(20);
      margin-right: rem(13);
      font-size: 0;
      padding-bottom: rem(4);
      border-bottom: 2px solid #df0043;
      box-sizing: border-box;
      overflow: hidden;
      transition: all 0.3s ease;
      display: flex;
      justify-content: center;

      // svg {
      //   transform: translateY(100%);
      // }
      @media all and (max-width: 1280px) {
        width: 25px;
        margin-right: 10px;
      }
    }

    &:hover .icon svg {
      animation: flow 0.3s ease forwards;
    }
  }

  &__buttons {
    margin-top: rem(40);
    display: flex;
    align-items: center;

    @media print {
      display: none;
    }

    @media all and (max-width: 840px) {
      flex-direction: column;
      align-items: stretch;
    }

    .icon {
      width: rem(32);
      height: rem(32);
      margin-right: rem(20);
      font-size: 0;
    }

    &--buy {
      margin-right: rem(20);

      @media all and (max-width: 840px) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }

    &--fav {
      @media all and (max-width: 840px) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }

  &__container {
    padding: 0 rem(240) 0;

    @media all and (max-width: 1440px) {
      padding: 0 150px 0;
    }

    @media all and (max-width: 1280px) {
      padding: 0;
    }
  }

  &__top {
    display: flex;
    align-items: flex-start;

    @media all and (max-width: 1280px) {
      flex-direction: column;
    }

    @media print {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      // display: block;
    }
  }

  &__in {
    @media print {
      width: 60%;
    }
  }

  &__info {
    width: calc(100% - #{rem(828)} - #{rem(24)} - #{rem(98)} - #{rem(20)});
    margin-left: rem(20);

    @media all and (max-width: 1440px) {
      width: calc(100% - 807px - 20px);
    }

    @media all and (max-width: 1280px) {
      width: 100%;
      margin-left: 0;
    }

    @media print {
      // width: 40%;
      width: 100%;
    }
  }

  &__texts {
    padding: 0 rem(336) 0 rem(40);

    @media all and (max-width: 1440px) {
      padding: 0 150px 0 60px;
    }

    @media all and (max-width: 1280px) {
      padding: 0;
    }
  }

  &__description {
    padding: 0 rem(336) 0 rem(40);

    @media all and (max-width: 1440px) {
      padding: 0 150px 0 60px;
    }

    @media all and (max-width: 1280px) {
      padding: 60px 0;
    }

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: rem(25);
      margin-bottom: rem(20);
      line-height: 140%;
      color: #172242;
    }

    .value {
      font-style: normal;
      font-weight: 400;
      font-size: rem(18);
      line-height: 140%;
      color: #555f76;
    }
  }

  &__text--title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(25);
    padding-top: rem(40);
    padding-left: rem(40);
    margin-bottom: rem(20);
    line-height: 140%;
    color: #172242;

    @media all and (max-width: 1440px) {
      padding-left: 60px;
    }

    @media all and (max-width: 1280px) {
      padding-left: 0;
    }

    @media print {
      font-size: rem(15);
    }
  }

  &__text {
    &:not(:last-child) {
      margin-bottom: rem(20);
    }

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: rem(18);
      margin-bottom: rem(5);
      line-height: 140%;
      color: #172242;
    }

    .value {
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 140%;
      color: #555f76;
    }
  }

  &__mods--chars {
    padding: rem(40);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: rem(20);

    @media all and (max-width: 1440px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 30px;
    }

    @media all and (max-width: 1280px) {
      padding: 20px;
    }

    @media all and (max-width: 860px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__mods--char {
    padding: rem(10) 0;

    &:empty {
      display: none;
    }

    // &:not(:last-child) {
    //   border-bottom: 1px solid #f2f2f2;
    // }

    @media all and (max-width: 840px) {
      // display: flex;
      // align-self: start;
      // padding-bottom: 15px;
      border-bottom: 2px solid #d7dce1;
    }
  }

  &__mods--mods {
    overflow: auto;
  }

  &__mods--mod:not(:first-child) &__mods--mods_titles {
    display: none;
  }

  &__mods--char_title {
    font-style: normal;
    font-weight: 600;
    font-size: rem(18);
    margin-bottom: rem(10);
    line-height: 110%;
    color: #172242;

    @media print {
      font-size: rem(13);
    }

    // @media all and (max-width: 860px) {
    //   width: 50%;
    //   margin-right: 10px;
    //   font-style: normal;
    //   font-weight: 400;
    //   font-size: 12px;
    //   line-height: 140%;
    //   color: #172242;
    // }
  }

  &__mods--char_value {
    font-style: normal;
    font-weight: 400;
    font-size: rem(16);
    line-height: 140%;
    color: #555f76;

    @media print {
      font-size: rem(11);
    }

    // @media all and (max-width: 860px) {
    //   width: calc(50% - 10px);
    //   font-style: normal;
    //   font-weight: 400;
    //   font-size: 12px;
    //   line-height: 140%;
    //   text-align: right;
    //   color: #555F76;
    // }
  }

  &__mods--mod-table {
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #d7dce1;
    }
  }

  &__mods--mods_title,
  &__mods--mods_title-table {
    font-style: normal;
    font-weight: 400;
    font-size: rem(16);
    line-height: 140%;
    color: #172242;
    min-width: 0;
    // min-width: rem(223);
    // max-width: rem(223);

    @media all and (max-width: 1440px) {
      min-width: 173px;
      max-width: 173px;
    }

    @media all and (max-width: 1280px) {
      min-width: 100%;
      max-width: 100%;
    }
  }

  &__mods--mods_titles,
  &__mods--mods_item {
    // display: flex;
    // justify-content: space-between;
    // align-items: flex-start;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
  }

  &__mods--mods_item {
    // display: flex;
    // justify-content: space-between;
    // align-items: flex-start;
    padding: rem(15) 0;
    border-top: 1px solid #d7dce1;
    // width: fit-content;

    @media all and (max-width: 1280px) {
      width: 100%;
    }

    &:last-child {
      border-bottom: 1px solid #d7dce1;
    }

    @media all and (max-width: 1280px) {
      display: block;
      border: none !important;
    }
  }

  &__mods--mods_val,
  &__mods--mods_val-table {
    min-width: rem(223);
    max-width: rem(223);
    font-style: normal;
    font-weight: 400;
    font-size: rem(19);
    line-height: 140%;
    color: #555f76;

    @media all and (max-width: 1440px) {
      min-width: 173px;
      max-width: 173px;
    }

    @media all and (max-width: 1280px) {
      min-width: auto;
      max-width: 100%;
      padding: rem(10) 0;
      margin-bottom: 20px;
      font-size: rem(18);
      margin-bottom: rem(10);
      line-height: 110%;
      border-bottom: 2px solid #d7dce1;

      &:first-child {
        border-top: none;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__mods--mods_val_title {
      font-size: rem(18);
      margin-bottom: rem(10);
      line-height: 110%;
      font-weight: 600;
      color: #172242;
  }

  &__mods--mods_val_value {
      font-size: rem(16);
      line-height: 140%;
      font-weight: 400;
      color: #555f76;
  }

  &__analogs_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30rem;

    .title {
      margin-bottom: 0;
    }
  }

  &__analogs_top_arrows {
    display: flex;
    align-items: center;
  }

  &__arrow {
    width: rem(40);
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-size: 0;

    @media all and (max-width: 1280px) {
      width: 40px;
    }

    @media all and (max-width: 840px) {
      position: static;
      transform: translateY(0);
    }

    &--left {
      margin-right: 20px;
    }

    &--right {
      transform: rotate(180deg);

      @media all and (max-width: 1280px) {
        right: -20px;
      }

      @media all and (max-width: 840px) {
        transform: rotate(180deg);
      }
    }
  }
}

.title__opener {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0 !important;
}

.title__opener + .value {
  margin-top: 20px;
}
</style>
