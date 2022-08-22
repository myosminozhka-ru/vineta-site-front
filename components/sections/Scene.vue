<template>
  <div class="scene" ref="scene" @mousewheel.stop>
        <model-obj
            :src="`${link}/models/zavod.obj`"
            :cameraPosition="{ x: 0, y: 0, z: 0 }"
            :rotation="{ x: 0.3, y: 0.7, z: 0 }"
            :scale="{ x: 2.5, y: 2.5, z: 2.5 }"
        />
  </div>
</template>

<script>
import { ModelObj } from 'vue-3d-model';
  export default {
    name: "OsmScene",
    components: { ModelObj },
    data: () => ({
        isMounted: false,
        link: '',
        object: null,
    }),
    mounted() {
        this.link = document.location.origin;
        this.isMounted = true;

        console.log(document.location.origin);
    },
  }

</script>

<style lang="scss" scoped>
  .scene {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
  }

</style>
