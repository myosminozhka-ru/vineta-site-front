<template>
  <no-ssr>
    <model-obj
      v-if="format === 'obj'"
      :src="`/models/model.obj`"
      :mtl="`/models/model.mtl`"
      :background-color="0xdddddd"
      :gl-options="{ antialias: true }"
    />
    <model-fbx
      v-else
      :src="`/models/model.fbx`"
      :background-color="0xdddddd"
      :gl-options="{ antialias: true }"
    />
  </no-ssr>
</template>

<script>
import { ModelFbx, ModelObj } from 'vue-3d-model';
export default {
  name: 'OsmScene',
  props: {
    format: {
      type: String,
      default: '',
    }
  },
  components: { ModelFbx, ModelObj },
  data() {
    return {
      lights: [],
    }
  },
  mounted() {
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
