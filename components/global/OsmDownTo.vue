<template>
  <div class="totop" :class="{ isVisible: isShow }" @click.prevent="scrollToTop">
    <div class="text">{{ text || $t('buttons.down') }}</div>
  </div>
</template>

<script>
export default {
  props: {
    elementTo: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isShow: true,
  }),
  mounted() {
    window.addEventListener('scroll', () => {
      if (this.elementTo) {
        const elementPosition = document.getElementById(this.elementTo).getBoundingClientRect().top
        this.isShow = window.scrollY < elementPosition
      }
    })
  },
  methods: {
    scrollToTop() {
      if (this.elementTo) {
        const headerHeight = document.querySelector('.header').clientHeight
        const modificationsTabs = document.getElementById(this.elementTo)
        const elementPosition = modificationsTabs.getBoundingClientRect().top
        const offsetPosition = elementPosition - headerHeight

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.totop {
  position: fixed;
  right: rem(50);
  bottom: rem(165);
  width: rem(80);
  height: rem(80);
  border-radius: 50%;
  background: #ff004d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  @media all and (max-width: 1280px) {
    width: 67px;
    height: 67px;
    right: 15px;
    bottom: 104px;
  }
  &.isVisible {
    opacity: 1;
    visibility: visible;
  }
  cursor: pointer;
  .icon {
    width: rem(10);
    height: rem(21);
    margin-bottom: rem(5);
    font-size: 0;
    pointer-events: none;
    @media all and (max-width: 1280px) {
      width: 8px;
      height: 18px;
      margin-bottom: 5px;
    }
  }
  .text {
    font-style: normal;
    font-weight: 400;
    font-size: rem(14);
    line-height: rem(17);
    color: #ffffff;
    @media all and (max-width: 1280px) {
      font-size: 12px;
      line-height: 14px;
    }
  }
  &:hover {
    background: #df0043;
  }
  &:active {
    background: #a70032;
  }
}
</style>
