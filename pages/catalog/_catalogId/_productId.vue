<template>
  <div class="productPage" v-if="product">
    <!-- <pre style="font-size: 15rem;">
      {{ product[0] }}
    </pre> -->
    <div class="productPage__container">
      <osm-breadcrumbs />
      <osm-product-top :data="product[0]" />
    </div>
    <div class="productPage__top">
      <osm-product-slider :data="product[0]" />
      <div class="productPage__info">
        <div class="productPage__description">
          <div class="title">Описание</div>
          <div class="value">Охладитель предназначен для охлаждения масла, жидкостей систем гидравлики, пресной и
            морской воды в системах энергетических установок, охлаждения вспомогательных механизмов.</div>
        </div>
        <div class="productPage__text--title">Основные характеристики</div>
        <div class="productPage__texts">
          <div class="productPage__text" v-for="item in product[0].PROPERIES" :key="item.index">
            <div class="title">{{ item.NAME }}</div>
            <div class="value">{{ item.VALUE }}</div>
          </div>
        </div>
        <div class="productPage__buttons">
          <div @click="openBuy">
            <osm-button class="productPage__buttons--buy">Заказать</osm-button>
          </div>
          <div @click="addFavorites(product[0].ID)" :data-product_id="product[0].ID">
            <osm-button class="productPage__buttons--fav" :outlined="true">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M21 2.33325H7C6.07174 2.33325 5.1815 2.702 4.52513 3.35838C3.86875 4.01476 3.5 4.90499 3.5 5.83325V18.6666C3.5 19.5948 3.86875 20.4851 4.52513 21.1415C5.1815 21.7978 6.07174 22.1666 7 22.1666H10.0217L13.1717 25.3283C13.2807 25.4364 13.41 25.5219 13.5521 25.58C13.6943 25.638 13.8465 25.6675 14 25.6666C14.2781 25.6666 14.547 25.5673 14.7583 25.3866L18.515 22.1666H21C21.9283 22.1666 22.8185 21.7978 23.4749 21.1415C24.1313 20.4851 24.5 19.5948 24.5 18.6666V5.83325C24.5 4.90499 24.1313 4.01476 23.4749 3.35838C22.8185 2.702 21.9283 2.33325 21 2.33325ZM22.1667 18.6666C22.1667 18.976 22.0438 19.2728 21.825 19.4915C21.6062 19.7103 21.3094 19.8333 21 19.8333H18.0833C17.8053 19.8332 17.5363 19.9325 17.325 20.1133L14.0583 22.9133L11.3283 20.1716C11.2193 20.0635 11.09 19.9779 10.9479 19.9199C10.8057 19.8618 10.6535 19.8324 10.5 19.8333H7C6.69058 19.8333 6.39383 19.7103 6.17504 19.4915C5.95625 19.2728 5.83333 18.976 5.83333 18.6666V5.83325C5.83333 5.52383 5.95625 5.22709 6.17504 5.00829C6.39383 4.7895 6.69058 4.66659 7 4.66659H21C21.3094 4.66659 21.6062 4.7895 21.825 5.00829C22.0438 5.22709 22.1667 5.52383 22.1667 5.83325V18.6666Z"
                    fill="#172242" />
                </svg>
              </div>
              <div class="text">В избранное</div>
            </osm-button>
          </div>
          <nuxt-link :to="{name: 'index'}" class="productPage__link">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 25" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.11116 17.2091L9.11117 0H10.963L10.963 17.2091L15.2749 12.8972C15.6365 12.5356 16.2228 12.5356 16.5844 12.8972C16.946 13.2588 16.946 13.845 16.5844 14.2066L10.6918 20.0992C10.3302 20.4608 9.74396 20.4608 9.38236 20.0992L3.48981 14.2066C3.12821 13.845 3.12821 13.2588 3.48981 12.8972C3.8514 12.5356 4.43767 12.5356 4.79926 12.8972L9.11116 17.2091ZM19.2964 24.0741C19.2964 24.5854 18.8818 25 18.3704 25H1.70376C1.19238 25 0.777832 24.5854 0.777832 24.0741C0.777832 23.5627 1.19238 23.1481 1.70376 23.1481H18.3704C18.8818 23.1481 19.2964 23.5627 19.2964 24.0741Z"
                  fill="#FF0040" />
              </svg>
            </div>
            <div class="text">
              Скачать каталог
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="productPage__container">
      <div class="productPage__mods">
        <div class="productPage__mods--tabs hide_on_tablet">
          <div class="titles">
            <div @click.prevent="tabs.selected = 1">
              <osm-button class="productPage__mods--opener" :class="{'isActive': tabs.selected === 1}" :outlined="true">
                Описание</osm-button>
            </div>
            <div @click.prevent="tabs.selected = 2">
              <osm-button class="productPage__mods--opener" :class="{'isActive': tabs.selected === 2}" :outlined="true">
                Характеристики</osm-button>
            </div>
            <div @click.prevent="tabs.selected = 3">
              <osm-button class="productPage__mods--opener" :class="{'isActive': tabs.selected === 3}" :outlined="true">
                Модификации (5)</osm-button>
            </div>
          </div>
          <div class="tabs">
            <div class="productPage__mods--tab productPage__mods--bg" v-if="tabs.selected === 1">
              <div class="title">Описание</div>
              <div class="value">
                <div class="value__in">
                  Безусловно, социально-экономическое развитие требует определения и уточнения системы массового участия. В рамках спецификации современных стандартов, действия представителей оппозиции формируют глобальную экономическую сеть и при этом -  ассоциативно распределены по отраслям. Приятно, граждане, наблюдать, как интерактивные прототипы, превозмогая сложившуюся непростую экономическую ситуацию, преданы социально-демократической анафеме. Повседневная практика показывает, что граница обучения кадров не даёт нам иного выбора, кроме определения укрепления моральных ценностей. Вот вам яркий пример современных тенденций - экономическая повестка сегодняшнего дня требует анализа своевременного выполнения сверхзадачи.
                </div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">Заказать</osm-button>
                </div>
                <osm-button class="productPage__buttons--fav" :outlined="true">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M21 2.33325H7C6.07174 2.33325 5.1815 2.702 4.52513 3.35838C3.86875 4.01476 3.5 4.90499 3.5 5.83325V18.6666C3.5 19.5948 3.86875 20.4851 4.52513 21.1415C5.1815 21.7978 6.07174 22.1666 7 22.1666H10.0217L13.1717 25.3283C13.2807 25.4364 13.41 25.5219 13.5521 25.58C13.6943 25.638 13.8465 25.6675 14 25.6666C14.2781 25.6666 14.547 25.5673 14.7583 25.3866L18.515 22.1666H21C21.9283 22.1666 22.8185 21.7978 23.4749 21.1415C24.1313 20.4851 24.5 19.5948 24.5 18.6666V5.83325C24.5 4.90499 24.1313 4.01476 23.4749 3.35838C22.8185 2.702 21.9283 2.33325 21 2.33325ZM22.1667 18.6666C22.1667 18.976 22.0438 19.2728 21.825 19.4915C21.6062 19.7103 21.3094 19.8333 21 19.8333H18.0833C17.8053 19.8332 17.5363 19.9325 17.325 20.1133L14.0583 22.9133L11.3283 20.1716C11.2193 20.0635 11.09 19.9779 10.9479 19.9199C10.8057 19.8618 10.6535 19.8324 10.5 19.8333H7C6.69058 19.8333 6.39383 19.7103 6.17504 19.4915C5.95625 19.2728 5.83333 18.976 5.83333 18.6666V5.83325C5.83333 5.52383 5.95625 5.22709 6.17504 5.00829C6.39383 4.7895 6.69058 4.66659 7 4.66659H21C21.3094 4.66659 21.6062 4.7895 21.825 5.00829C22.0438 5.22709 22.1667 5.52383 22.1667 5.83325V18.6666Z"
                        fill="#172242" />
                    </svg>
                  </div>
                  <div class="text">В избранное</div>
                </osm-button>

              </div>
            </div>
            <div class="productPage__mods--tab productPage__mods--bg" v-if="tabs.selected === 2">
              <div class="title">Характеристики</div>
              <div class="value">
                <!-- <pre style="font-size: 15rem">{{product[0]}}</pre> -->
                <div class="productPage__mods--chars">
                  <div class="productPage__mods--char" v-for="prop in product[0].PROPERIES" :key="prop.index">
                    <div class="productPage__mods--char_title">{{ prop.NAME }}</div>
                    <div class="productPage__mods--char_value">{{ prop.VALUE }}</div>
                  </div>
                </div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">Заказать</osm-button>
                </div>
                <osm-button class="productPage__buttons--fav" :outlined="true">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M21 2.33325H7C6.07174 2.33325 5.1815 2.702 4.52513 3.35838C3.86875 4.01476 3.5 4.90499 3.5 5.83325V18.6666C3.5 19.5948 3.86875 20.4851 4.52513 21.1415C5.1815 21.7978 6.07174 22.1666 7 22.1666H10.0217L13.1717 25.3283C13.2807 25.4364 13.41 25.5219 13.5521 25.58C13.6943 25.638 13.8465 25.6675 14 25.6666C14.2781 25.6666 14.547 25.5673 14.7583 25.3866L18.515 22.1666H21C21.9283 22.1666 22.8185 21.7978 23.4749 21.1415C24.1313 20.4851 24.5 19.5948 24.5 18.6666V5.83325C24.5 4.90499 24.1313 4.01476 23.4749 3.35838C22.8185 2.702 21.9283 2.33325 21 2.33325ZM22.1667 18.6666C22.1667 18.976 22.0438 19.2728 21.825 19.4915C21.6062 19.7103 21.3094 19.8333 21 19.8333H18.0833C17.8053 19.8332 17.5363 19.9325 17.325 20.1133L14.0583 22.9133L11.3283 20.1716C11.2193 20.0635 11.09 19.9779 10.9479 19.9199C10.8057 19.8618 10.6535 19.8324 10.5 19.8333H7C6.69058 19.8333 6.39383 19.7103 6.17504 19.4915C5.95625 19.2728 5.83333 18.976 5.83333 18.6666V5.83325C5.83333 5.52383 5.95625 5.22709 6.17504 5.00829C6.39383 4.7895 6.69058 4.66659 7 4.66659H21C21.3094 4.66659 21.6062 4.7895 21.825 5.00829C22.0438 5.22709 22.1667 5.52383 22.1667 5.83325V18.6666Z"
                        fill="#172242" />
                    </svg>
                  </div>
                  <div class="text">В избранное</div>
                </osm-button>

              </div>
            </div>
            <div class="productPage__mods--tab" v-if="tabs.selected === 3">
              <div class="title">Модификации (5)</div>
              <div class="value">
                <!-- <pre style="font-size: 15rem">{{product[0] }}</pre> -->
                <div class="productPage__mods--mods">
                  <div class="productPage__mods--mod" v-for="mod in product[0].OFFERS" :key="mod.index">
                    <div class="productPage__mods--mods_titles">
                      <div class="productPage__mods--mods_title" v-for="proper in mod.PROPERTIES" :key="proper.index">
                        {{ proper.NAME }}
                      </div>
                    </div>
                    <div class="productPage__mods--mods_items">
                      <div class="productPage__mods--mods_item">
                        <div class="productPage__mods--mods_val" v-for="proper in mod.PROPERTIES" :key="proper.index">
                          {{ proper.VALUE }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">Заказать</osm-button>
                </div>
                <osm-button class="productPage__buttons--fav" :outlined="true">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M21 2.33325H7C6.07174 2.33325 5.1815 2.702 4.52513 3.35838C3.86875 4.01476 3.5 4.90499 3.5 5.83325V18.6666C3.5 19.5948 3.86875 20.4851 4.52513 21.1415C5.1815 21.7978 6.07174 22.1666 7 22.1666H10.0217L13.1717 25.3283C13.2807 25.4364 13.41 25.5219 13.5521 25.58C13.6943 25.638 13.8465 25.6675 14 25.6666C14.2781 25.6666 14.547 25.5673 14.7583 25.3866L18.515 22.1666H21C21.9283 22.1666 22.8185 21.7978 23.4749 21.1415C24.1313 20.4851 24.5 19.5948 24.5 18.6666V5.83325C24.5 4.90499 24.1313 4.01476 23.4749 3.35838C22.8185 2.702 21.9283 2.33325 21 2.33325ZM22.1667 18.6666C22.1667 18.976 22.0438 19.2728 21.825 19.4915C21.6062 19.7103 21.3094 19.8333 21 19.8333H18.0833C17.8053 19.8332 17.5363 19.9325 17.325 20.1133L14.0583 22.9133L11.3283 20.1716C11.2193 20.0635 11.09 19.9779 10.9479 19.9199C10.8057 19.8618 10.6535 19.8324 10.5 19.8333H7C6.69058 19.8333 6.39383 19.7103 6.17504 19.4915C5.95625 19.2728 5.83333 18.976 5.83333 18.6666V5.83325C5.83333 5.52383 5.95625 5.22709 6.17504 5.00829C6.39383 4.7895 6.69058 4.66659 7 4.66659H21C21.3094 4.66659 21.6062 4.7895 21.825 5.00829C22.0438 5.22709 22.1667 5.52383 22.1667 5.83325V18.6666Z"
                        fill="#172242" />
                    </svg>
                  </div>
                  <div class="text">В избранное</div>
                </osm-button>

              </div>
            </div>
          </div>
        </div>
        <div class="productPage__mods--tabs hide_on_desktop">
          <div class="tabs">
            <div class="tabs__opener" :class="{'isActive': tabs.selected === 1}" @click.prevent="tabs.selected = 1">
              <div class="text">Описание</div>
              <div class="arrow">
                <svg data-v-975c5a0e="" xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none"><path data-v-975c5a0e="" d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"></path></svg>
              </div>
            </div>
            <div class="productPage__mods--tab productPage__mods--bg" v-if="tabs.selected === 1">
              <div class="title">Описание</div>
              <div class="value">
                <div class="value__in">
                  Безусловно, социально-экономическое развитие требует определения и уточнения системы массового участия. В рамках спецификации современных стандартов, действия представителей оппозиции формируют глобальную экономическую сеть и при этом -  ассоциативно распределены по отраслям. Приятно, граждане, наблюдать, как интерактивные прототипы, превозмогая сложившуюся непростую экономическую ситуацию, преданы социально-демократической анафеме. Повседневная практика показывает, что граница обучения кадров не даёт нам иного выбора, кроме определения укрепления моральных ценностей. Вот вам яркий пример современных тенденций - экономическая повестка сегодняшнего дня требует анализа своевременного выполнения сверхзадачи.
                </div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">Заказать</osm-button>
                </div>
                <osm-button class="productPage__buttons--fav" :outlined="true">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M21 2.33325H7C6.07174 2.33325 5.1815 2.702 4.52513 3.35838C3.86875 4.01476 3.5 4.90499 3.5 5.83325V18.6666C3.5 19.5948 3.86875 20.4851 4.52513 21.1415C5.1815 21.7978 6.07174 22.1666 7 22.1666H10.0217L13.1717 25.3283C13.2807 25.4364 13.41 25.5219 13.5521 25.58C13.6943 25.638 13.8465 25.6675 14 25.6666C14.2781 25.6666 14.547 25.5673 14.7583 25.3866L18.515 22.1666H21C21.9283 22.1666 22.8185 21.7978 23.4749 21.1415C24.1313 20.4851 24.5 19.5948 24.5 18.6666V5.83325C24.5 4.90499 24.1313 4.01476 23.4749 3.35838C22.8185 2.702 21.9283 2.33325 21 2.33325ZM22.1667 18.6666C22.1667 18.976 22.0438 19.2728 21.825 19.4915C21.6062 19.7103 21.3094 19.8333 21 19.8333H18.0833C17.8053 19.8332 17.5363 19.9325 17.325 20.1133L14.0583 22.9133L11.3283 20.1716C11.2193 20.0635 11.09 19.9779 10.9479 19.9199C10.8057 19.8618 10.6535 19.8324 10.5 19.8333H7C6.69058 19.8333 6.39383 19.7103 6.17504 19.4915C5.95625 19.2728 5.83333 18.976 5.83333 18.6666V5.83325C5.83333 5.52383 5.95625 5.22709 6.17504 5.00829C6.39383 4.7895 6.69058 4.66659 7 4.66659H21C21.3094 4.66659 21.6062 4.7895 21.825 5.00829C22.0438 5.22709 22.1667 5.52383 22.1667 5.83325V18.6666Z"
                        fill="#172242" />
                    </svg>
                  </div>
                  <div class="text">В избранное</div>
                </osm-button>

              </div>
            </div>
            <div class="tabs__opener" :class="{'isActive': tabs.selected === 2}" @click.prevent="tabs.selected = 2">
              <div class="text">Характеристики</div>
              <div class="arrow">
                <svg data-v-975c5a0e="" xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none"><path data-v-975c5a0e="" d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"></path></svg>
              </div>
            </div>
            <div class="productPage__mods--tab productPage__mods--bg" v-if="tabs.selected === 2">
              <div class="title">Характеристики</div>
              <div class="value">
                <div class="productPage__mods--chars">
                  <div class="productPage__mods--char" v-for="prop in product[0].PROPERIES" :key="prop.index">
                    <div class="productPage__mods--char_title">{{ prop.NAME }}</div>
                    <div class="productPage__mods--char_value">{{ prop.VALUE }}</div>
                  </div>
                </div>
              </div>
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">Заказать</osm-button>
                </div>
                <osm-button class="productPage__buttons--fav" :outlined="true">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M21 2.33325H7C6.07174 2.33325 5.1815 2.702 4.52513 3.35838C3.86875 4.01476 3.5 4.90499 3.5 5.83325V18.6666C3.5 19.5948 3.86875 20.4851 4.52513 21.1415C5.1815 21.7978 6.07174 22.1666 7 22.1666H10.0217L13.1717 25.3283C13.2807 25.4364 13.41 25.5219 13.5521 25.58C13.6943 25.638 13.8465 25.6675 14 25.6666C14.2781 25.6666 14.547 25.5673 14.7583 25.3866L18.515 22.1666H21C21.9283 22.1666 22.8185 21.7978 23.4749 21.1415C24.1313 20.4851 24.5 19.5948 24.5 18.6666V5.83325C24.5 4.90499 24.1313 4.01476 23.4749 3.35838C22.8185 2.702 21.9283 2.33325 21 2.33325ZM22.1667 18.6666C22.1667 18.976 22.0438 19.2728 21.825 19.4915C21.6062 19.7103 21.3094 19.8333 21 19.8333H18.0833C17.8053 19.8332 17.5363 19.9325 17.325 20.1133L14.0583 22.9133L11.3283 20.1716C11.2193 20.0635 11.09 19.9779 10.9479 19.9199C10.8057 19.8618 10.6535 19.8324 10.5 19.8333H7C6.69058 19.8333 6.39383 19.7103 6.17504 19.4915C5.95625 19.2728 5.83333 18.976 5.83333 18.6666V5.83325C5.83333 5.52383 5.95625 5.22709 6.17504 5.00829C6.39383 4.7895 6.69058 4.66659 7 4.66659H21C21.3094 4.66659 21.6062 4.7895 21.825 5.00829C22.0438 5.22709 22.1667 5.52383 22.1667 5.83325V18.6666Z"
                        fill="#172242" />
                    </svg>
                  </div>
                  <div class="text">В избранное</div>
                </osm-button>

              </div>
            </div>
            <div class="tabs__opener" :class="{'isActive': tabs.selected === 3}" @click.prevent="tabs.selected = 3">
              <div class="text">Модификации (13)</div>
              <div class="arrow">
                <svg data-v-975c5a0e="" xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none"><path data-v-975c5a0e="" d="M17.5 1.5L9.5 8.5L1.5 1.5" stroke="#555F76" stroke-width="2"></path></svg>
              </div>
            </div>
            <div class="productPage__mods--tab productPage__mods--bg" v-if="tabs.selected === 3">
              <div class="title">Модификации (5)</div>
              <div class="value">
                <div class="value__in">
                  <div class="productPage__mods--mods">
                    <div class="productPage__mods--mod" v-for="mod in product[0].OFFERS" :key="mod.index">
                      <div class="productPage__mods--mods_items">
                        <div class="productPage__mods--mods_item">
                          <div class="productPage__mods--mods_val" v-for="proper in mod.PROPERTIES" :key="proper.index">
                            <div class="productPage__mods--mods_val_title">
                              {{ proper.NAME }}
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
              <div class="productPage__buttons">
                <div @click="openBuy">
                  <osm-button class="productPage__buttons--buy">Заказать</osm-button>
                </div>
                <div @click="addFavorites(product[0].ID)" :data-product_id="product[0].ID">
                  <osm-button class="productPage__buttons--fav" :outlined="true">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none">
                        <path
                          d="M21 2.33325H7C6.07174 2.33325 5.1815 2.702 4.52513 3.35838C3.86875 4.01476 3.5 4.90499 3.5 5.83325V18.6666C3.5 19.5948 3.86875 20.4851 4.52513 21.1415C5.1815 21.7978 6.07174 22.1666 7 22.1666H10.0217L13.1717 25.3283C13.2807 25.4364 13.41 25.5219 13.5521 25.58C13.6943 25.638 13.8465 25.6675 14 25.6666C14.2781 25.6666 14.547 25.5673 14.7583 25.3866L18.515 22.1666H21C21.9283 22.1666 22.8185 21.7978 23.4749 21.1415C24.1313 20.4851 24.5 19.5948 24.5 18.6666V5.83325C24.5 4.90499 24.1313 4.01476 23.4749 3.35838C22.8185 2.702 21.9283 2.33325 21 2.33325ZM22.1667 18.6666C22.1667 18.976 22.0438 19.2728 21.825 19.4915C21.6062 19.7103 21.3094 19.8333 21 19.8333H18.0833C17.8053 19.8332 17.5363 19.9325 17.325 20.1133L14.0583 22.9133L11.3283 20.1716C11.2193 20.0635 11.09 19.9779 10.9479 19.9199C10.8057 19.8618 10.6535 19.8324 10.5 19.8333H7C6.69058 19.8333 6.39383 19.7103 6.17504 19.4915C5.95625 19.2728 5.83333 18.976 5.83333 18.6666V5.83325C5.83333 5.52383 5.95625 5.22709 6.17504 5.00829C6.39383 4.7895 6.69058 4.66659 7 4.66659H21C21.3094 4.66659 21.6062 4.7895 21.825 5.00829C22.0438 5.22709 22.1667 5.52383 22.1667 5.83325V18.6666Z"
                          fill="#172242" />
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
      <div class="productPage__analogs">
        <div class="productPage__analogs_top">
          <div class="title">Аналоги</div>
          <div class="productPage__analogs_top_arrows hide_on_desktop">
            <button class="productPage__arrow productPage__arrow--left" @click="prevSlide" data-glide-dir="<">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" fill="#FF004D"/>
                    <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                </svg>
            </button>
            <button class="productPage__arrow productPage__arrow--right" @click="nextSlide">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" fill="#FF004D"/>
                    <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                </svg>
            </button>
          </div>
        </div>
        <div class="values glide">
          <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">
              <div class="products__item" v-for="prod in getProducts.slice(0, 4)" :key="prod.index">
                <!-- <pre style="font-size: 15rem">{{ prod.CODE }}</pre> -->
                <div class="products__item_image">
                  <div class="image_container">
                    <img :src="$vareibles.remote + prod.PREVIEW_PICTURE" alt="">
                  </div>
                </div>
                <div class="products__item_data">
                  <nuxt-link class="products__item_name" :to="{name: 'catalog-catalogId-productId', props: {catalogId: prod.SECTION.CODE, productId: prod.CODE}}">{{ prod.NAME }}
                  </nuxt-link>
                  <div class="products__item_sku">ТУ 3683-005-54116265-2011</div>
                  <div class="products__item_properties">
                    <div class="products__item_property" v-for="property in prod.PROPERIES" :key="property.index">
                      <div class="name">{{ property.NAME }}</div>
                      <div class="value">{{ property.VALUE }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <osm-modals-buy />
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import Glide from '@glidejs/glide';
  export default {
    name: 'CatalogPage',
    components: {
      OsmBreadcrumbs: () => import('~/components/global/OsmBreadcrumbs.vue'),
      OsmProductTop: () => import('~/components/product/OsmProductTop.vue'),
      OsmProductSlider: () => import('~/components/product/OsmProductSlider.vue'),
      OsmButton: () => import('~/components/global/OsmButton.vue'),
      OsmModalsBuy: () => import('~/components/modals/buy.vue'),
    },
    computed: {
      ...mapGetters(['getProducts']), 
    },
    data: () => ({
      tabs: {
        selected: 1,
      },
      product: null,
      prodsSlider: null
    }),
    async fetch() {
      this.product = await this.$axios.$get(`catalog/detail.php?code=${this.$route.params.productId}`);
        console.log(this.product);
    },
    mounted() {
      if (window.innerWidth <= 1280) {
        setTimeout(() => {
          this.prodsSlider = new Glide('.productPage__analogs .values.glide', {
            perView: 3,
            type: 'carousel',
            breakpoints: {
              860: {
                perView: 1,
              }
            }
          }).mount();
          console.log(this.prodsSlider)
        }, 500)
      }
    },
    methods: {
      ...mapActions(['toggleModal']),
      ...mapActions('localStorage', ['addFavorites']),
      openBuy() {
        this.toggleModal({
          isOpened: true,
          type: 'buy'
        })
      },
      prevSlide() {
        if (!this.prodsSlider) return;
        this.prodsSlider.go('<');
      },
      nextSlide() {
        if (!this.prodsSlider) return;
        this.prodsSlider.go('>');
      }
    }
  }

</script>

<style lang="scss" scoped>
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

    &__analogs {
      margin-top: rem(118);
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

        &:not(:nth-child(4n+4)) {
          margin-right: rem(20);
        }
        @media all and (max-width: 1280px) {
          width: calc(100% / 3 - #{rem(40)} / 3);
          margin-top: 0;

          &:not(:nth-child(4n+4)) {
            margin-right: 0;
          }
          &:not(:nth-child(3n+3)) {
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
    }

    &__mods {
      padding-top: rem(60);
    }

    &__mods--tabs {
      .titles {
        display: flex;
        align-items: center;
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
          background: #FFFFFF;
          border: 1px solid #D7DCE1;
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
            background: #FF0040;
            border-color: #FF0040;
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
        }
      }
    }

    &__mods--tab {
      .title {
        font-style: normal;
        font-weight: 600;
        font-size: rem(24);
        margin-bottom: rem(30);
        line-height: 140%;
        color: #172242;
      }
      .value {
        &__in {
          padding: rem(40);
          font-style: normal;
          font-weight: 400;
          font-size: rem(20);
          line-height: 140%;
          color: #555F76;
          @media all and (max-width: 1280px) {
            padding: 30px;
          }
          @media all and (max-width: 860px) {
            font-size: 16px;
            padding: 20px;
          }
        }
      }
    }
    &__mods--bg {
      padding: rem(50) rem(40) rem(40);
      background: #F2F2F2;
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
      margin-left: rem(20);
      @media all and (max-width: 1440px) {
        display: none;
      }
      @media all and (max-width: 1280px) {
        display: flex;
      }
      @media all and (max-width: 840px) {
        width: 100%;
        margin-left: 0;
        justify-content: center;
      }

      .text {
        font-style: normal;
        font-weight: 400;
        font-size: rem(18);
        line-height: 140%;
        color: #FF0040;
        position: relative;
        @media all and (max-width: 1280px) {
          font-size: 16px;
        }
        &:after  {
            content: "";
            position: absolute;
            left: 0;
            right: 100%;
            bottom: rem(-5);
            height: rem(2);
            background: #FF0040;
            transition: all .3s ease;
        }
      }
      &:hover .text:after {
          right: 0;
      }

      .icon {
        width: rem(18);
        margin-right: rem(10) !important;
        font-size: 0;

        @media all and (max-width: 1280px) {
          width: 25px;
          margin-right: 10px !important;
        }
      }
    }

    &__buttons {
      margin-top: rem(40);
      display: flex;
      align-items: center;
      @media all and (max-width: 840px) {
        flex-direction: column;
        align-items: stretch;
      }
      .icon {
        width: rem(28);
        height: rem(28);
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
        color: #555F76;
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
        color: #555F76;
      }
    }
    &__mods--chars {
      padding: rem(40);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: rem(30);
      @media all and (max-width: 1440px) {
        grid-template-columns: repeat(2, 1fr);
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
      @media all and (max-width: 840px) {
        display: flex;
        align-self: start;
        padding-bottom: 15px;
        border-bottom: 2px solid #D7DCE1;
      }
    }
    &__mods--char_title {
      font-style: normal;
      font-weight: 600;
      font-size: rem(18);
      margin-bottom: rem(10);
      line-height: 110%;
      color: #172242;
      @media all and (max-width: 860px) {
        width: 50%;
        margin-right: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        color: #172242;
      }
    }
    &__mods--char_value {
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 140%;
      color: #555F76;
      @media all and (max-width: 860px) {
        width: calc(50% - 10px);
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        text-align: right;
        color: #555F76;
      }
    }
    &__mods--mods_title {
      font-style: normal;
      font-weight: 400;
      font-size: rem(14);
      line-height: 140%;
      color: #172242;
      width: rem(223);
      @media all and (max-width: 1440px) {
        width: 173px;
      }
      @media all and (max-width: 1280px) {
        width: 100%;
      }
    }
    &__mods--mods_titles {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: rem(22);
    }
    &__mods--mods_item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: rem(15) 0;
      border-top: 1px solid #D7DCE1;
      &:last-child {
        border-bottom: 1px solid #D7DCE1;
      }
      @media all and (max-width: 1280px) {
        flex-direction: column;
        border: none !important;
      }
    }
    &__mods--mods_val {
      width: rem(223);
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 140%;
      color: #555F76;
      @media all and (max-width: 1440px) {
        width: 173px;
      }
      @media all and (max-width: 1280px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #D7DCE1;
        padding-top: 15px;
        margin-bottom: 15px;
        &:last-child {
          border-bottom: 1px solid #D7DCE1;
          padding-bottom: 15px;
          margin-bottom: 0;
        }
      }
    }
    &__analogs_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
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

</style>
