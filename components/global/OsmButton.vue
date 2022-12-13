<template>
  <div>
    <a v-if="type === 'native-link'" :href="link" class="button" :class="{ isOutlined: outlined, isLarge: large }" target="_blank"><slot /></a>
    <nuxt-link v-else-if="link" :to="localePath({ name: link, hash })" class="button" :class="{ isOutlined: outlined, isLarge: large }"><slot /></nuxt-link>
    <button v-else class="button" :class="{ isOutlined: outlined, isLarge: large }" :type="type"><slot /></button>
  </div>
</template>

<script>
export default {
  name: 'OsmButton',
  props: {
    link: {
      type: String,
      default: null,
    },
    hash: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: rem(20) rem(60);
  background: #ff0040;
  font-style: normal;
  font-weight: 600;
  font-size: rem(20);
  line-height: 140%;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-align: center;
  @media all and (max-width: 1280px) {
    font-size: 20px;
    padding: 20px 40px;
  }
  @media all and (max-width: 1280px) {
    width: 100%;
  }
  &.isOutlined {
    padding: rem(18) rem(30);
    background: transparent;
    color: #172242;
    border: rem(2) solid #ff004d;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      bottom: rem(-2);
      left: 0;
      height: rem(3);
      background: #fff;
      width: 0;
      transition: all 0.3s ease;
    }
    &:after {
      content: '';
      position: absolute;
      top: rem(-2);
      right: 0;
      height: rem(3);
      background: #fff;
      width: 0;
      transition: all 0.3s ease;
    }
    @media all and (max-width: 1280px) {
      border-width: 2px;
      padding: 18px 30px;
    }
    svg {
      path {
        transition: all 0.3s ease;
      }
    }
    &:hover {
      background: #fff;
      &:before,
      &:after {
        width: 70%;
      }
    }
    &:active {
      border-color: #a70032;
      &:before,
      &:after {
        width: 0;
      }
    }
  }
  &.isLarge {
    width: 100%;
  }
  &:hover {
    background: #df0043;
  }
  &:active {
    background: #a70032;
  }
}
</style>
