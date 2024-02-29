<template>
  <div class="visual-scene">
    <osm-preloader :dop-class="dinamicClass"/>
    <div class="visual-scene__canvas">
      <no-ssr>
        <model-obj
          v-if="current3DFormat === 'obj'"
          :src="src"
          :mtl="mtl"
          :lights="lights"
          :scale="scale"
          :background-color="0xdddddd"
          :gl-options="{ antialias: true }"
          @on-load="onLoad"
        />
        <model-gltf
          v-else-if="current3DFormat === 'glb' || current3DFormat === 'gltf'"
          :src="src"
          :lights="lightsGLTF"
          :background-color="0xdddddd"
          :gl-options="{ antialias: true }"
          @on-load="onLoad"
        />
        <model-fbx
          v-else-if="current3DFormat === fbx"
          :src="src"
          :background-color="0xdddddd"
          :gl-options="{ antialias: true }"
          @on-load="onLoad"
        />
      </no-ssr>
    </div>
    <div class="visual-scene__bottom">
      <div class="visual-scene__buttons">
        <button class="visual-scene__button visual-scene__button--plus" @click="increaseHandler()"></button>
        <button class="visual-scene__button visual-scene__button--minus" @click="decreaseHandler()"></button>
      </div>
      <div class="visual-scene__actions">
        <div class="visual-scene__actions-item visual-scene__actions-item--mouse-left">
          <span>Вращать модель</span>
        </div>
        <div class="visual-scene__actions-item visual-scene__actions-item--mouse-right">
          <span>Передвинуть камеру</span>
        </div>
        <div class="visual-scene__actions-item visual-scene__actions-item--mouse-center">
          <span>Изменение масштаба</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ModelFbx, ModelObj, ModelGltf } from 'vue-3d-model';
import osmPreloader from "~/components/global/OsmPreloader";
export default {
  name: 'OsmScene',
  components: { ModelFbx, ModelObj, ModelGltf, osmPreloader },
  props: {
    format: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    mtl: {
      type: String,
      default: `/models/model.mtl`,
    }
  },
  data() {
    return {
      dinamicClass: '',
      scale: { x: 1, y: 1, z: 1 },
      lights: [
        {
            type: 'HemisphereLight',
            position: { x: 0, y: 1, z: 0 },
            skyColor: 0xaaaaff,
            groundColor: 0x806060,
            intensity: 0.7,
          },
          {
            type: 'DirectionalLight',
            position: { x: 1, y: 1, z: 1 },
            color: 0xffffff,
            intensity: 0.9,
          },
      ],
      lightsGLTF: [
          {
            type: 'HemisphereLight',
            position: { x: 1, y: 1, z: 1 },
            skyColor: 0xaaaaff,
            groundColor: 0x806060,
            intensity: 0.7,
          },
          {
            type: 'DirectionalLight',
            position: { x: 0, y: 1, z: 1 },
            color: 0xffffff,
            intensity: 0.3,
          },
          {
            type: 'DirectionalLight',
            position: { x: 1, y: 0, z: 1 },
            color: 0xffffff,
            intensity: 0.4,
          },
          {
            type: 'DirectionalLight',
            position: { x: 1, y: 1, z: 0 },
            color: 0xffffff,
            intensity: 0.3,
          },
          {
            type: 'DirectionalLight',
            position: { x: 1, y: 1, z: 1 },
            color: 0xffffff,
            intensity: 0.4,
          },
          {
            type: 'AmbientLight',
            position: { x: 2.11, y: 2.115, z: 4.135 },
            color: 0xffffff,
            intensity: 0.3,
          },
          {
            type: 'SpotLight',
            position: { x: 0, y: 0.42, z: 0 },
            color: 0xffffff,
            intensity: 0.25,
            distance: 0.84,
            angle: 1,
          },
        ]
    }
  },
  computed: {
    current3DFormat() {
      return this.src.length ? this.src.split('.').pop() : '';
    }
  },
  mounted() {
    this.$store.dispatch('setLoadingStatus', false)
  },
  methods: {
    onLoad() {
      this.dinamicClass = 'preloader--is-hidden'
    },
    increaseHandler() {
      this.scale.x += .1;
      this.scale.y += .1;
      this.scale.z += .1;
    },
    decreaseHandler() {
      this.scale.x -= .1;
      this.scale.y -= .1;
      this.scale.z -= .1;
    }
  }
}
</script>

<style lang="scss" scoped>
.visual-scene {
  position: relative;
  background-color: #dcdcdc;
  canvas {
    max-width: 100%;
  }
  &__canvas {
    cursor: url("~assets/img/cursor.svg") -4 -4, pointer;
  }
  &__bottom {
    padding-bottom: 77px;
    @media (max-width: 767px) {
      padding: 15px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    @media (max-width: 575px) {
      flex-wrap: wrap;
    }
  }
  &__actions {
    display: flex;
    justify-content: center;
    gap: 8px;
    @media (min-width: 576px) {
      gap: 15px;
    }
    @media (min-width: 768px) {
      position: absolute;
      bottom: 15px;
      left: 15px;
      gap: 24px;
    }
    @media (min-width: 992px) {
      bottom: 32px;
      left: 32px;
    }
    @media (min-width: 1200px) {
      left: 50%;
      transform: translateX(-50%);
    }
    @media (max-width: 575px) {
      min-width: 100%;
      max-width: 100%;
      flex-wrap: wrap;
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 12px;
      padding: 8px 10px;
      color: #555F76;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.5);
      flex: 0 0 auto;
      max-width: 100%;
      @media (min-width: 768px) {
        padding: 8px 14px;
      }
      &::before {
        content: '';
        display: block;
        width: 10px;
        aspect-ratio: 1/1.44;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        @media (min-width: 768px) {
          width: 16px;
        }
      }
      &--mouse-left::before {
        background-image: url('~assets/img/mouse-left.svg');
      }
      &--mouse-right::before {
        background-image: url('~assets/img/mouse-right.svg');
      }
      &--mouse-center::before {
        background-image: url('~assets/img/mouse-center.svg');
      }
      @media (min-width: 768px) {
        font-size: 14px;
      }
      @media (min-width: 992px) {
        font-size: 16px;
        padding: 8px 16px;
      }
    }
  }
  &__buttons {
    display: inline-flex;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    padding: 4px 0;
    width: auto;
    @media (min-width: 768px) {
      position: absolute;
      bottom: 15px;
      right: 15px;
      padding: 8px 0;
    }
    @media (min-width: 992px) {
      bottom: 32px;
      right: 32px;
    }
    @media (max-width: 767px) and (min-width: 576px){
      order: 2;
    }
  }
  &__button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    padding: 4px 12px;
    cursor: pointer;
    &:first-child {
      border-right: 1px solid rgba(85, 95, 118, 0.5);
    }
    &::before {
      content: '';
      display: block;
      width: 15px;
      aspect-ratio: 1/1;
      mask-repeat: no-repeat;
      mask-position: center;
      mask-size: contain;
      background-color: #555F76;
    }

    &:hover::before {
      background-color: #fd0140;
    }
    &--plus {
      &::before {
        mask-image: url("~assets/img/loupe-plus.svg");
      }
    }
    &--minus {
      &::before {
        mask-image: url("~assets/img/loupe-minus.svg");
      }
    }

    @media (min-width: 768px) {
      padding: 4px 19px;
    }
  }
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
