<template>
    <div class="product__header_wrap">
        <div class="product__header">
            <div class="product__header_row">
                <h1 class="product__header_left" v-if="'NAME' in data">{{ data.NAME }}</h1>
            </div>
            <div class="product__header_right">
                
                <span class="product__header_btn hide_on_mobile" @click="printSection">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 22 20" fill="none">
                            <path d="M6.47917 0.666748H15.5208C16.0051 0.666716 16.471 0.851988 16.823 1.18456C17.175 1.51712 17.3863 1.97178 17.4137 2.45525L17.4167 2.56258V4.16616L18.4375 4.16675C20.1292 4.16675 21.5 5.53758 21.5 7.22925V15.1042C21.5 15.6071 21.3003 16.0893 20.9447 16.4448C20.5892 16.8003 20.107 17.0001 19.6042 17.0001L17.4167 16.9995V18.0209C17.4167 18.5237 17.2169 19.0059 16.8614 19.3615C16.5059 19.717 16.0236 19.9167 15.5208 19.9167H6.47917C5.97636 19.9167 5.49415 19.717 5.13861 19.3615C4.78307 19.0059 4.58333 18.5237 4.58333 18.0209V16.9995L2.39583 17.0001C1.89303 17.0001 1.41081 16.8003 1.05528 16.4448C0.699739 16.0893 0.5 15.6071 0.5 15.1042V7.22925C0.5 5.53758 1.87083 4.16675 3.5625 4.16675L4.58333 4.16616V2.56258C4.5833 2.07833 4.76857 1.61243 5.10114 1.26045C5.43371 0.908462 5.88836 0.697081 6.37183 0.669665L6.47917 0.666748ZM15.5208 12.6251H6.47917C6.36313 12.6251 6.25185 12.6712 6.16981 12.7532C6.08776 12.8353 6.04167 12.9465 6.04167 13.0626V18.0209C6.04167 18.2624 6.23767 18.4584 6.47917 18.4584H15.5208C15.6369 18.4584 15.7481 18.4123 15.8302 18.3303C15.9122 18.2482 15.9583 18.1369 15.9583 18.0209V13.0626C15.9583 12.9465 15.9122 12.8353 15.8302 12.7532C15.7481 12.6712 15.6369 12.6251 15.5208 12.6251ZM18.4375 5.62508H3.5625C3.13705 5.62508 2.72902 5.79409 2.42818 6.09493C2.12734 6.39577 1.95833 6.8038 1.95833 7.22925V15.1042C1.95833 15.3457 2.15433 15.5417 2.39583 15.5417L4.58333 15.5412V13.0626C4.58333 12.5598 4.78307 12.0776 5.13861 11.722C5.49415 11.3665 5.97636 11.1667 6.47917 11.1667H15.5208C16.0236 11.1667 16.5059 11.3665 16.8614 11.722C17.2169 12.0776 17.4167 12.5598 17.4167 13.0626V15.5412L19.6042 15.5417C19.7202 15.5417 19.8315 15.4957 19.9135 15.4136C19.9956 15.3316 20.0417 15.2203 20.0417 15.1042V7.22925C20.0417 6.8038 19.8727 6.39577 19.5718 6.09493C19.271 5.79409 18.863 5.62508 18.4375 5.62508ZM15.5208 2.12508H6.47917C6.37344 2.12509 6.2713 2.16337 6.19162 2.23286C6.11195 2.30235 6.06013 2.39834 6.04575 2.50308L6.04167 2.56258V4.16616H15.9583V2.56258C15.9583 2.45686 15.92 2.35472 15.8506 2.27504C15.7811 2.19536 15.6851 2.14354 15.5803 2.12916L15.5208 2.12508Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="text">Распечатать</div>
                </span>
            </div>
        </div>
        <div class="product__header_buttons hide_on_mobile">
            <div class="product__header_mods" v-if="offersCount.length">Модификаций ({{ offersCount.length }})</div>
            <template v-if="getDownloads['katalog-produktsii']">
            <a v-if="'PROPERIES' in getDownloads['katalog-produktsii']"
              :href="$vareibles.remote + getDownloads['katalog-produktsii'].PROPERIES[0].VALUE.SRC" target="_blank"
              class="product__link">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 15 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.33396 17.2091L6.33396 0H8.18582L8.18581 17.2091L12.4977 12.8972C12.8593 12.5356 13.4456 12.5356 13.8072 12.8972C14.1688 13.2588 14.1688 13.845 13.8072 14.2066L7.91462 20.0992C7.55302 20.4608 6.96676 20.4608 6.60516 20.0992L0.712604 14.2066C0.351007 13.845 0.351007 13.2588 0.712604 12.8972C1.0742 12.5356 1.66046 12.5356 2.02206 12.8972L6.33396 17.2091Z"
                    fill="#FF0040" />
                </svg>
              </div>
              <div class="text">
                {{$t('buttons.download_catalog')}}
              </div>
            </a>
          </template>
        </div>
    </div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
export default {
    name: 'OsmProductTop',
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    computed: {
        ...mapGetters(['getDownloads']),
        offersCount() {
            if ('OFFERS' in this.data) {
                return Object.values(this.data.OFFERS);
            } else {
                return [];
            }
        }
    },
    methods: {
      printSection() {
        window.print();
        // this.$htmlToPaper("wrapper");
      }
    },
}
</script>

<style lang="scss" scoped>
.product {
    &__header_wrap {
        margin-bottom: rem(30);
        @media all and (max-width: 1280px) {
            margin-bottom: 30px;
        }
    }
    &__header_buttons {
        display: flex;
        align-items: center;
        
    }
    &__link {
      display: flex;
      align-items: center;
      text-decoration: none;
      margin-left: rem(30);

      @media all and (max-width: 1280px) {
        margin-left: 30px;
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
        color: #FF0040;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          left: 0;
          right: 100%;
          bottom: rem(-5);
          height: rem(2);
          border-radius: rem(2);
          background: #FF0040;
          transition: all .3s ease;
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
        border-bottom: 2px solid #DF0043;
        box-sizing: border-box;
        overflow: hidden;
        transition: all .3s ease;
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
        animation: flow .3s ease forwards;
      }
    }
    &__header_row {
        display: flex;
        align-items: center;
        @media all and (min-width: 861px) {
            padding-right: rem(20);
        }
    }
    &__header_mods {
        padding: rem(10) rem(17);
        // margin-right: rem(40);
        border: 1px solid #D7DCE1;
        font-style: normal;
        font-weight: 400;
        font-size: rem(14);
        line-height: 140%;
        color: #555F76;
        white-space: nowrap;
    }
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: rem(10);
        @media all and (max-width: 1280px) {
            margin-bottom: 10px ;
        }
    }
    &__header_left {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        line-height: 110%;
        color: #172242;
        margin: 0;
        flex: 1 1 auto;
        @media all and (max-width: 1280px) {
            font-size: 30px;
        }

        @media print {
          font-size: rem(20);
        }
    }
    &__header_right {
        display: flex;
        align-items: center;
    }
    &__header_btn {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: rem(20) rem(40);
        background: #FF0040;
        transition: all .3s ease;
        @media all and (max-width: 1280px) {
            padding: 20px 40px;
        }
        @media all and (max-width: 840px) {
            width: 100%;
        }
        &:hover {
            background: #DF0043;
        }
        &:active {
            background: #A70032;
        }
        .text {
            font-style: normal;
            font-weight: 600;
            font-size: rem(20);
            line-height: 140%;
            color: #FFFFFF;
            @media all and (max-width: 1280px) {
                font-size: 20px;
            }
        }
        .icon {
            width: rem(22);
            height: rem(22);
            margin-right: rem(22);
            font-size: 0;
            @media all and (max-width: 1280px) {
                width: 28px;
                height: 28px;
                margin-right: 20px;
            }
        }
    }
}
</style>