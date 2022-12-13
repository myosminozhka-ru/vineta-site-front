<template>
  <div class="preloader">
    <span class="circle circle-1"></span>
    <span class="circle circle-2"></span>
    <span class="circle circle-3"></span>
    <span class="circle circle-4"></span>
    <span class="circle circle-5"></span>
    <span class="circle circle-6"></span>
    <span class="circle circle-7"></span>
    <span class="circle circle-8"></span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    isMounted: false,
    isAnimated: false,
  }),
  computed: {
    ...mapGetters(['getLoadedStatus']),
  },
  beforeDestroy() {
    this.isMounted = false
    this.isAnimated = false
  },
  mounted() {
    this.isMounted = true

    setTimeout(() => {
      this.isAnimated = true
    }, 1000)
  },
}
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  transition: all 1s ease;
  opacity: 1;
  visibility: visible;

  &--is-hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  &.isMounted {
    opacity: 0;
  }

  &.isAnimated {
    visibility: hidden;
    pointer-events: none;
  }
}
.circle {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #f2f2f2;
  border-radius: 50%;
  animation: loading 1.5s cubic-bezier(0.8, 0.5, 0.2, 1.4) infinite;
  transform-origin: bottom center;
  position: relative;
}
@keyframes loading {
  0% {
    transform: translateY(0px);
    background-color: #f2f2f2;
  }
  50% {
    transform: translateY(50px);
    background-color: #ff0040;
  }
  100% {
    transform: translateY(0px);
    background-color: #f2f2f2;
  }
}
.circle-1 {
  animation-delay: 0.1s;
}
.circle-2 {
  animation-delay: 0.2s;
}
.circle-3 {
  animation-delay: 0.3s;
}
.circle-4 {
  animation-delay: 0.4s;
}
.circle-5 {
  animation-delay: 0.5s;
}
.circle-6 {
  animation-delay: 0.6s;
}
.circle-7 {
  animation-delay: 0.7s;
}
.circle-8 {
  animation-delay: 0.8s;
}
</style>
