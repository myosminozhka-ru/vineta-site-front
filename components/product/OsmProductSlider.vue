<template>
  <div v-if="isMounted" class="productPage__in">
    <LightGallery :images="popupPhotos" :index="elementOpened" :disable-scroll="true" @close="elementOpened = null" />
    <div v-if="data" class="productPage__slider">
      <hooper ref="carousel" :items-to-show="1" :settings="{ wheelControl: false }" group="product_items" class="productPage__slider-left">
        <slide v-for="(picture, idx) in data.GALLERY" :key="`picture_${idx}`" class="productPage__slider-item">
          <div class="productPage__slider-item__in" @click="elementOpened = idx">
            <div class="productPage__slider-item__imege">
              <nuxt-img :src="$config.vareibles.remote + picture" :alt="`picture_${idx}`" loading="lazy" />
            </div>
          </div>
        </slide>
        <hooper-navigation v-if="data.GALLERY.length > 1" slot="hooper-addons"></hooper-navigation>
      </hooper>
      <div class="productPage__slider-right">
        <hooper :settings="hooperSettings" group="product_items" class="productPage__slider-previews">
          <slide v-for="(picture, idx) in data.GALLERY" :key="`picture_${idx}`" class="productPage__slider-preview">
            <span @click="slideTo(idx)">
              <nuxt-img :src="$config.vareibles.remote + picture" :alt="`picture_${idx}`" loading="lazy" />
            </span>
          </slide>
        </hooper>
        <div class="productPage__slider-buttons">
          <!-- <div class="productPage__slider-button productPage__slider-button--more" v-if="'MORE_PHOTO' in data"> -->
          <div v-if="data.GALLERY.length > 2" class="productPage__slider-button productPage__slider-button--more" @click="elementOpened = 2">
            <div class="text">Еще {{ data.GALLERY.length - 2 }}</div>
          </div>
          <div v-if="is3DModel" class="productPage__slider-button productPage__slider-button--3d" @click="treeDView.isOpened = true">999
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 29" fill="none">
                <path d="M13.0465 28.309L13.0726 28.7236C13.0787 28.82 13.1318 28.9074 13.2147 28.9571C13.2611 28.9848 13.3135 28.999 13.3659 28.999C13.4074 28.999 13.4488 28.9902 13.4876 28.9726L15.5988 28.012C15.714 27.9596 15.7828 27.8393 15.7694 27.7135C15.7561 27.5877 15.6637 27.4846 15.5401 27.4574L13.3379 26.9744C13.2479 26.9553 13.1537 26.9783 13.0836 27.0385C13.0136 27.0985 12.9759 27.188 12.9817 27.28L13.0095 27.7224C12.4352 27.7667 11.8524 27.7898 11.2649 27.7898C8.82379 27.7898 6.52254 27.4122 4.61004 26.6979C4.27697 26.5734 3.95678 26.4386 3.65819 26.2971C3.511 26.2273 3.33627 26.2901 3.26669 26.4367C3.19712 26.5834 3.25973 26.7587 3.40633 26.8281C3.71995 26.9768 4.05577 27.1183 4.4043 27.2484C6.38206 27.9871 8.75436 28.3775 11.2649 28.3775C11.8646 28.3775 12.4598 28.3542 13.0465 28.309Z" fill="#172242" />
                <path d="M13.0465 28.309L13.0726 28.7236C13.0787 28.82 13.1318 28.9074 13.2147 28.9571C13.2611 28.9848 13.3135 28.999 13.3659 28.999C13.4074 28.999 13.4488 28.9902 13.4876 28.9726L15.5988 28.012C15.714 27.9596 15.7828 27.8393 15.7694 27.7135C15.7561 27.5877 15.6637 27.4846 15.5401 27.4574L13.3379 26.9744C13.2479 26.9553 13.1537 26.9783 13.0836 27.0385C13.0136 27.0985 12.9759 27.188 12.9817 27.28L13.0095 27.7224C12.4352 27.7667 11.8524 27.7898 11.2649 27.7898C8.82379 27.7898 6.52254 27.4122 4.61004 26.6979C4.27697 26.5734 3.95678 26.4386 3.65819 26.2971C3.511 26.2273 3.33627 26.2901 3.26669 26.4367C3.19712 26.5834 3.25973 26.7587 3.40633 26.8281C3.71995 26.9768 4.05577 27.1183 4.4043 27.2484C6.38206 27.9871 8.75436 28.3775 11.2649 28.3775C11.8646 28.3775 12.4598 28.3542 13.0465 28.309Z" stroke="#172242" />
                <path d="M0.587803 22.849C0.587803 21.5802 1.65419 20.3692 3.58985 19.4348L11.1148 23.9463C11.1161 23.9471 11.1176 23.9473 11.1189 23.9481C11.1347 23.9572 11.1516 23.9633 11.1687 23.9693C11.1762 23.972 11.1833 23.9761 11.1908 23.9781C11.2121 23.9837 11.234 23.9861 11.2561 23.9868C11.2593 23.987 11.2625 23.9881 11.2656 23.9881L11.2659 23.9881L11.2661 23.9881C11.2693 23.9881 11.2725 23.987 11.2757 23.9868C11.2977 23.9861 11.3196 23.9838 11.3408 23.9782C11.3486 23.9761 11.3559 23.9718 11.3636 23.9691C11.3804 23.9631 11.3971 23.9571 11.4127 23.9481C11.414 23.9474 11.4156 23.9472 11.4169 23.9463L12.3243 23.4023C12.4636 23.3188 12.5088 23.1383 12.4254 22.9991L12.4253 22.999C12.3418 22.8598 12.1613 22.8148 12.0222 22.8981L11.2658 23.3516L2.07982 17.8441L11.2659 12.3367L20.4518 17.8441L16.2867 20.3412C16.1475 20.4246 16.1022 20.6053 16.1857 20.7444L16.1857 20.7444C16.2692 20.8836 16.4497 20.9289 16.5889 20.8454L18.9418 19.4348C20.8775 20.3691 21.9438 21.5801 21.9438 22.849C21.9438 24.4896 20.1571 26.0248 17.1644 26.9561C17.0094 27.0043 16.923 27.1691 16.9712 27.3241C17.0103 27.4499 17.1264 27.5307 17.2516 27.5307C17.2806 27.5307 17.3099 27.5263 17.3391 27.5173C20.5905 26.5056 22.5316 24.7605 22.5316 22.849C22.5316 21.4238 21.4729 20.0948 19.5389 19.0768L21.1744 18.0962C21.1763 18.0951 21.1775 18.0935 21.1793 18.0923C21.1987 18.0801 21.2168 18.0663 21.2327 18.05C21.2351 18.0477 21.2368 18.0449 21.239 18.0425C21.2522 18.0282 21.2637 18.0127 21.2738 17.996C21.2774 17.9902 21.2804 17.9842 21.2835 17.9781C21.2912 17.9632 21.2975 17.9478 21.3026 17.9315C21.3045 17.9253 21.3067 17.9194 21.3083 17.9131C21.3137 17.8909 21.3173 17.868 21.3173 17.8441V6.14399C21.3173 6.12009 21.3137 6.09718 21.3083 6.07495C21.3067 6.0687 21.3045 6.06282 21.3026 6.05671C21.2975 6.04039 21.2912 6.02482 21.2835 6.00987C21.2804 6.00384 21.2774 5.99796 21.2739 5.99222C21.2637 5.9754 21.252 5.95971 21.2387 5.9453C21.2366 5.94302 21.235 5.94041 21.2329 5.93816C21.2168 5.92182 21.1986 5.90787 21.1791 5.89565C21.1774 5.89457 21.1762 5.893 21.1744 5.89195L11.4169 0.0418641C11.3239 -0.0139547 11.2078 -0.0139547 11.1148 0.0418641L1.3571 5.89192C1.35503 5.89317 1.35341 5.89491 1.35136 5.89619C1.3475 5.89863 1.3436 5.90093 1.33985 5.90358C1.33337 5.90812 1.32746 5.9135 1.32135 5.91858C1.31589 5.92313 1.31021 5.92739 1.30512 5.93222C1.30225 5.93498 1.29944 5.93779 1.29662 5.94066C1.29142 5.94612 1.28682 5.95223 1.28198 5.95814C1.27721 5.96389 1.27218 5.9694 1.26795 5.97548C1.26536 5.97915 1.26306 5.98296 1.26064 5.98676C1.25925 5.98892 1.2574 5.99063 1.25607 5.99287C1.25351 5.99714 1.25214 6.00177 1.24981 6.00612C1.24654 6.01226 1.24296 6.01814 1.24018 6.02445C1.2381 6.02903 1.23645 6.03374 1.23461 6.03843C1.23179 6.04574 1.22958 6.05304 1.22739 6.06043C1.22557 6.06648 1.22358 6.07242 1.22216 6.07859C1.22102 6.08345 1.22023 6.08834 1.21937 6.09329C1.21804 6.1009 1.21721 6.10843 1.21647 6.11605C1.21585 6.12299 1.21517 6.12984 1.215 6.13683C1.21494 6.13924 1.21426 6.14154 1.21426 6.14396V17.844C1.21426 17.868 1.21787 17.8909 1.22327 17.9131C1.22477 17.9194 1.22705 17.9253 1.22898 17.9315C1.23407 17.9477 1.24032 17.9632 1.24802 17.9781C1.25115 17.9841 1.25416 17.9901 1.25771 17.996C1.26786 18.0126 1.27937 18.0281 1.29253 18.0424C1.29477 18.0448 1.29648 18.0476 1.29881 18.05C1.31478 18.0662 1.33286 18.0801 1.35221 18.0923C1.354 18.0934 1.35525 18.095 1.3571 18.0961L2.99273 19.0767C1.05871 20.0948 0 21.4238 0 22.8489C0 23.0112 0.131561 23.1428 0.293901 23.1428C0.456242 23.1428 0.587803 23.0113 0.587803 22.849ZM1.80209 6.66284L2.2645 6.94009C2.31182 6.96848 2.36394 6.98198 2.41536 6.98198C2.51514 6.98198 2.6126 6.93108 2.66771 6.83917L2.66773 6.83911C2.75118 6.69993 2.70593 6.51943 2.5667 6.43596L2.0797 6.14396L11.2659 0.636573L20.4518 6.14396L11.2659 11.6513L7.35981 9.30954C7.35964 9.30943 7.35953 9.30929 7.35933 9.30917L7.10411 9.15613C6.96476 9.07285 6.78428 9.11773 6.70084 9.25705L6.70078 9.25711C6.61734 9.39629 6.66259 9.57679 6.80174 9.66026L7.05696 9.81328C7.05707 9.81336 7.05721 9.81339 7.05721 9.81339L10.6944 11.994L1.80209 17.3252V6.66284ZM20.7295 17.3252L11.8374 11.994L20.7295 6.66284V17.3252Z" fill="#172242" />
                <path d="M0.74462 23.6826C0.686897 23.5307 0.517195 23.4547 0.365541 23.512C0.213773 23.5696 0.137435 23.7393 0.19493 23.8911C0.323308 24.2293 0.516059 24.5622 0.767897 24.8805C0.825876 24.9537 0.911764 24.9919 0.998562 24.9919C1.06237 24.9919 1.12665 24.9713 1.18074 24.9284C1.30795 24.8278 1.32952 24.6429 1.22874 24.5156C1.01442 24.2448 0.85154 23.9644 0.74462 23.6826Z" fill="#172242" />
                <path d="M0.74462 23.6826C0.686897 23.5307 0.517195 23.4547 0.365541 23.512C0.213773 23.5696 0.137435 23.7393 0.19493 23.8911C0.323308 24.2293 0.516059 24.5622 0.767897 24.8805C0.825876 24.9537 0.911764 24.9919 0.998562 24.9919C1.06237 24.9919 1.12665 24.9713 1.18074 24.9284C1.30795 24.8278 1.32952 24.6429 1.22874 24.5156C1.01442 24.2448 0.85154 23.9644 0.74462 23.6826Z" stroke="#172242" />
                <path d="M2.75628 25.8109C2.45183 25.6243 2.17354 25.4264 1.92923 25.223C1.80443 25.1193 1.61924 25.1361 1.51522 25.2609C1.41146 25.3857 1.42842 25.571 1.55313 25.6749C1.81924 25.8962 2.12062 26.1105 2.44905 26.3119C2.49694 26.3413 2.54997 26.3553 2.60244 26.3553C2.70128 26.3553 2.79772 26.3055 2.85317 26.215C2.93803 26.0767 2.8946 25.8958 2.75628 25.8109Z" fill="#172242" />
                <path d="M2.75628 25.8109C2.45183 25.6243 2.17354 25.4264 1.92923 25.223C1.80443 25.1193 1.61924 25.1361 1.51522 25.2609C1.41146 25.3857 1.42842 25.571 1.55313 25.6749C1.81924 25.8962 2.12062 26.1105 2.44905 26.3119C2.49694 26.3413 2.54997 26.3553 2.60244 26.3553C2.70128 26.3553 2.79772 26.3055 2.85317 26.215C2.93803 26.0767 2.8946 25.8958 2.75628 25.8109Z" stroke="#172242" />
                <path d="M6.19622 8.61232L5.2888 8.06826C5.14979 7.98479 4.9692 8.02995 4.88562 8.16915V8.16918C4.80214 8.30836 4.84739 8.48892 4.98665 8.57236L5.89405 9.11642C5.94137 9.14485 5.99349 9.15832 6.04491 9.15832C6.14467 9.15832 6.24215 9.10741 6.29726 9.0155L6.29729 9.01547C6.3807 8.87627 6.33548 8.69577 6.19622 8.61232Z" fill="#172242" />
                <path d="M6.19622 8.61232L5.2888 8.06826C5.14979 7.98479 4.9692 8.02995 4.88562 8.16915V8.16918C4.80214 8.30836 4.84739 8.48892 4.98665 8.57236L5.89405 9.11642C5.94137 9.14485 5.99349 9.15832 6.04491 9.15832C6.14467 9.15832 6.24215 9.10741 6.29726 9.0155L6.29729 9.01547C6.3807 8.87627 6.33548 8.69577 6.19622 8.61232Z" stroke="#172242" />
                <path d="M4.38173 7.524L3.47433 6.97997C3.33529 6.89633 3.15459 6.9416 3.07115 7.08086V7.08089C2.98771 7.22007 3.03292 7.4006 3.17219 7.48404L4.07958 8.02811C4.1269 8.0565 4.179 8.07 4.23044 8.07C4.33023 8.07 4.42763 8.01907 4.48276 7.92718C4.56624 7.78801 4.52102 7.60747 4.38173 7.524Z" fill="#172242" />
                <path d="M4.38173 7.524L3.47433 6.97997C3.33529 6.89633 3.15459 6.9416 3.07115 7.08086V7.08089C2.98771 7.22007 3.03292 7.4006 3.17219 7.48404L4.07958 8.02811C4.1269 8.0565 4.179 8.07 4.23044 8.07C4.33023 8.07 4.42763 8.01907 4.48276 7.92718C4.56624 7.78801 4.52102 7.60747 4.38173 7.524Z" stroke="#172242" />
                <path d="M15.6519 20.7218L14.7444 21.2658C14.6052 21.3493 14.56 21.5299 14.6434 21.669L14.6435 21.6691C14.6985 21.761 14.7959 21.8119 14.8958 21.8119C14.9472 21.8119 14.9993 21.7984 15.0466 21.7701L15.954 21.2261C16.0932 21.1426 16.1385 20.962 16.0551 20.8229L16.055 20.8228C15.9716 20.6835 15.791 20.6383 15.6519 20.7218Z" fill="#172242" />
                <path d="M15.6519 20.7218L14.7444 21.2658C14.6052 21.3493 14.56 21.5299 14.6434 21.669L14.6435 21.6691C14.6985 21.761 14.7959 21.8119 14.8958 21.8119C14.9472 21.8119 14.9993 21.7984 15.0466 21.7701L15.954 21.2261C16.0932 21.1426 16.1385 20.962 16.0551 20.8229L16.055 20.8228C15.9716 20.6835 15.791 20.6383 15.6519 20.7218Z" stroke="#172242" />
                <path d="M13.8376 21.8099L12.93 22.354C12.7907 22.4374 12.7455 22.618 12.829 22.7572L12.829 22.7572C12.8841 22.8491 12.9815 22.9 13.0813 22.9C13.1328 22.9 13.1849 22.8866 13.2322 22.8582L14.1397 22.3141C14.279 22.2307 14.3242 22.0501 14.2407 21.911L14.2407 21.9109C14.1572 21.7717 13.9766 21.7265 13.8376 21.8099Z" fill="#172242" />
                <path d="M13.8376 21.8099L12.93 22.354C12.7907 22.4374 12.7455 22.618 12.829 22.7572L12.829 22.7572C12.8841 22.8491 12.9815 22.9 13.0813 22.9C13.1328 22.9 13.1849 22.8866 13.2322 22.8582L14.1397 22.3141C14.279 22.2307 14.3242 22.0501 14.2407 21.911L14.2407 21.9109C14.1572 21.7717 13.9766 21.7265 13.8376 21.8099Z" stroke="#172242" />
              </svg>
            </div>
            <div class="text">3D</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="treeDView.isOpened" class="modal" @click="treeDView.isOpened = false">
      <div class="modal__in" @click.stop>
        <button  class="modal__close" type="button" @click="treeDView.isOpened = false"></button>
        <VisualScene :format="data.MODEL_3D.format" :src="data.MODEL_3D.src" :mtl="data.MODEL_3D.mtl" :position-prop="position"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'
import VisualScene from "~/components/visual/VisualScene";
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    VisualScene
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    treeDView: {
      isOpened: false,
    },
    elementOpened: null,
    isMounted: false,
    hooperSettings: {
      itemsToShow: 3,
      centerMode: true,
      vertical: false,
      wheelControl: false,
      breakpoints: {
        1281: {
          vertical: true,
        },
      },
    },
  }),
  computed: {
    is3DModel() {
      return this.data.MODEL_3D.format
    },
    popupPhotos() {
      return this.data.GALLERY.map((gallery) => ({ url: this.$config.vareibles.remote + gallery, title: '' }))
    },
    position() {
      const item = this.data?.PROPERIES.find(i => i.CODE === "ROTATION")
      if (item) {
        return item.VALUE
      }
      return null
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    slideTo(index) {
      this.$refs.carousel.slideTo(index)
    },
  },
}
</script>

<style lang="scss">
.hooper-track {
  padding: 0 !important;
}
.hooper-navigation {
  background: red;
  .hooper-prev,
  .hooper-next {
    width: 40px;
    height: 40px;
    background: #ff0040;
    svg {
      fill: #fff;
    }
  }
  .hooper-prev {
    left: 50px;
  }
  .hooper-next {
    right: 50px;
  }
}
</style>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 16px;
  &__in {
    position: relative;
    max-width: rem(1440);
    width: 100%;
  }
  &__close {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 30px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: #ececec;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 0;
    z-index: 9;
    cursor: pointer;
    &::before {
      content: '';
      display: block;
      width: 12px;
      aspect-ratio: 1/1;
      mask: url("~assets/img/closer.svg") 0 0 no-repeat;
      mask-size: contain;
      background-color: #555F76;
    }
  }
}
.productPage {
  &__arrows {
    font-size: 0;
  }
  &__arrow {
    position: absolute;
    width: rem(40);
    top: 50%;
    border: none;
    background: none;
    padding: 0;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 0;
    @media all and (max-width: 1280px) {
      width: 40px;
    }
    &--left {
      left: rem(50);
      @media all and (max-width: 1280px) {
        left: 30px;
      }
      @media all and (max-width: 840px) {
        left: 15px;
      }
    }
    &--right {
      right: rem(50);
      @media all and (max-width: 1280px) {
        right: 30px;
      }
      @media all and (max-width: 840px) {
        right: 15px;
      }
      transform: translateY(-50%) rotate(180deg);
    }
    svg rect {
      fill: #ff004d;
      transition: all 0.3s ease;
    }
    &:hover {
      svg rect {
        fill: #df0043;
      }
    }
    &:active {
      svg rect {
        fill: #a70032;
      }
    }
  }
  &__in {
    @media all and (max-width: 1280px) {
      width: 100%;
    }
  }
  &__slider {
    display: flex;
    align-items: flex-start;
    @media all and (max-width: 1280px) {
      flex-direction: column;
    }
  }
  &__slider-left {
    width: rem(828);
    height: auto;
    @media all and (max-width: 1440px) {
      width: 710px;
    }
    @media all and (max-width: 1280px) {
      width: calc(100% + 40px);
      margin-left: -20px;
      margin-right: -20px;
    }
    @media print {
      width: 400px;
      .productPage__slider-item__in,
      .productPage__slider-item__imege,
      img {
        position: static !important;
        padding: 0 !important;
        margin: 0 !important;
        display: block !important;
        width: auto !important;
        height: auto !important;
        transform: translate(0px, 0px) !important;
      }
      img {
        width: 100% !important;
      }

      :v-deep(.hooper-track) {
        transform: translate(0px, 0px) !important;
      }
    }
  }
  &__slider-item {
    background: #d7dce1;
    @media print {
      width: 400px !important;
    }
  }
  &__slider-item__in {
    position: relative;
    padding-top: 50%;
    @media all and (max-width: 1280px) {
      padding-top: 45%;
      width: 100%;
    }
    @media all and (max-width: 840px) {
      padding-top: 70%;
      width: 100%;
    }
  }
  &__slider-item__imege {
    position: absolute;
    top: rem(50);
    left: rem(50);
    right: rem(50);
    bottom: rem(50);
    display: flex;
    align-items: center;
    justify-content: center;
    @media all and (max-width: 840px) {
      top: 38px;
      bottom: 38px;
      right: 78px;
      left: 78px;
    }
    img {
      height: 100%;
    }
  }
  &__slider-right {
    width: rem(98);
    display: flex;
    flex-direction: column;
    margin-left: rem(24);
    @media print {
      display: none;
    }
    @media all and (max-width: 1440px) {
      margin-left: 20px;
    }
    @media all and (max-width: 1280px) {
      width: 100%;
      margin-left: 0;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
  &__slider-previews {
    cursor: pointer;
    height: calc(#{rem(98)} * 3);
    overflow: hidden;
    @media all and (max-width: 1280px) {
      display: flex;
      align-items: center;
      height: rem(98);
      width: calc(#{rem(98)} * 3);
    }
    img {
      max-width: 100%;
    }
  }
  &__slider-preview {
    font-size: 0;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    width: rem(98) !important;
    height: rem(98) !important;
    &:hover,
    &.is-current {
      border-color: #d7dce1;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
  &__slider-buttons {
    margin-top: rem(20);
    @media all and (max-width: 1280px) {
      margin-top: 0;
      display: flex;
      align-items: center;
    }
  }
  &__slider-button {
    width: 100%;
    height: rem(98);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media all and (max-width: 1280px) {
      width: 77px;
      height: 77px;
    }
    @media all and (max-width: 840px) {
      width: 65px;
      height: 65px;
    }
    .text {
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 140%;
    }
    .icon {
      width: rem(22);
      font-size: 0;
      margin-right: rem(11);
    }
    &--more {
      background: #ff0040;
      color: #fff;
      transition: all 0.3s ease;
      &:hover {
        background: #df0043;
      }
      &:active {
        background: #a70032;
      }
    }
    &--3d {
      background: #d7dce1;
      color: #172242;
      margin-top: rem(20);
      transition: all 0.3s ease;
      @media all and (max-width: 1280px) {
        margin-top: 0;
        margin-left: 20px;
      }
      .text {
        transition: all 0.3s ease;
      }
      svg path {
        transition: all 0.3s ease;
      }
      &:hover {
        background: #df0043;
        svg path {
          fill: #fff;
          stroke: #fff;
        }
        .text {
          color: #fff;
        }
      }
      &:active {
        background: #a70032;
        svg path {
          fill: #fff;
          stroke: #fff;
        }
        .text {
          color: #fff;
        }
      }
    }
  }
}
</style>
