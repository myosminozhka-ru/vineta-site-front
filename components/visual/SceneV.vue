<template>
    <model-fbx
      :src="`/models/Y_Bot.fbx`"
      :background-color="0xdddddd"
      :lights="lights"
      :gl-options="{ antialias: true }"
    />
</template>

<script>
import { ModelFbx } from 'vue-3d-model';
import * as THREE from 'three'
export default {
  name: 'OsmScene',
  components: { ModelFbx },
  data() {
    return {
      lights: [],
    }
  },
  mounted() {
    this.lights.push(new THREE.DirectionalLight(0xffffff, 1.0))
    this.lights.push(new THREE.AmbientLight(0x404040))
    this.lights.push(new THREE.HemisphereLight(0xffffff, 0x444444, 1.0))
    this.$store.dispatch('setLoadingStatus', false)
  }
}
</script>

<style>
.scene canvas {
  pointer-events: none;
}
</style>

<style lang="scss" scoped>
.scene {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background: #000;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  opacity: 1;
  visibility: visible;
  pointer-events: none;
  transition: all 0.5s ease;
  z-index: 1000;

  &--hidden {
    opacity: 0;
    visibility: collapse;
  }

  &__text {
    font-size: rem(20);
  }
}
</style>
