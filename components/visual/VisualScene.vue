<template>
  <div class="visual-scene">
    <osm-preloader :dop-class="dinamicClass"/>
    <div ref="canvas" class="visual-scene__canvas">
      <div ref="scene"></div>
    </div>
    <div class="visual-scene__bottom">
      <div class="visual-scene__buttons">
        <button id="decreaseZoomButton" class="visual-scene__button visual-scene__button--plus"></button>
        <button id="increaseZoomButton" class="visual-scene__button visual-scene__button--minus"></button>
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
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import osmPreloader from "~/components/global/OsmPreloader";

export default {
  name: 'OsmScene',
  components: { osmPreloader },
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
    },
    positionProp: {
      type: String || null,
      default: ''
    },
  },
  data() {
    return {
      scale: { x: 1, y: 1, z: 1 },
      dinamicClass: '',
      rotation: {x: 0.14, y: 0.07, z: -0.12},
      scene: null,
      renderer: null,
      camera: null,
      controls: null,
      model: null,
    }
  },
  computed: {
    current3DFormat() {
      return this.src.length ? this.src.split('.').pop() : '';
    }
  },
  created() {
    if (this.positionProp) {
      try {
        const string = `${this.positionProp.replace(/&quot;/gi, '"')}`
        const rotation = JSON.parse(string)
        if (rotation) {
          this.rotation = rotation
        }
      } catch(e) {
        console.error(e)
      }
    }
  },
  mounted() {
    this.$store.dispatch('setLoadingStatus', false)
    this.initThree()
  },
  methods: {
    onLoad() {
      this.dinamicClass = 'preloader--is-hidden'
    },
    initThree() {
      const sceneEl = this.$refs.scene
      const heightless = 120
      const cameraRotation = this.rotation
      const onLoad = this.onLoad
      const src = this.src
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xefebeb)
      const camera = new THREE.PerspectiveCamera(45, sceneEl.clientWidth / (window.innerHeight - heightless), 0.05, 1000);
      camera.position.z = 2;
      const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable anti-aliasing
      renderer.setSize(sceneEl.clientWidth, window.innerHeight - heightless);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true; // Enable shadows
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows for smoother edges
      renderer.toneMapping = THREE.LinearToneMapping;
      renderer.toneMappingExposure = 2;
      // renderer.setClearColor(0xffffff);
      sceneEl.appendChild(renderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);
      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
      const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
      const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1);
      const directionalLight5 = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight1.position.set(3, 1, 3);
      directionalLight2.position.set(-3, 1, 3);
      directionalLight3.position.set(3, 1, -3);
      directionalLight4.position.set(-3, 1, -3);
      directionalLight5.position.set(0, 5, 0);
      scene.add(directionalLight1);
      scene.add(directionalLight2);
      scene.add(directionalLight3);
      scene.add(directionalLight4);
      scene.add(directionalLight5);

      // Orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = true;
      controls.minDistance = 0.1;
      // Load GLB model
      const loader = new GLTFLoader();
      const setModel = (m) => {
        this.model = m
      }
      // const minDistance = 0.1
      loader.load(
        src,
        (gltf) => {
          const model = gltf.scene;
          model.scale.set(1, 1, 1); // Set scale to (1, 1, 1)
          setModel(model)
          scene.add(model);
          camera.position.set(cameraRotation.x, cameraRotation.y, cameraRotation.z); // Adjust camera position to view the model
          centerModel(model);
          controls.minDistance = calculateMinZoomLevel(model);
          onLoad()
        },
        undefined,
        (error) => {
          onLoad()
          console.error('Error loading GLB model:', error);
        }
      );
      
      let zoomLevel = 1.0;
      const zoomIncrement = 0.1;

      function updateCameraZoom() {
          const newFOV = 45 / zoomLevel;
          camera.fov = newFOV;
          camera.updateProjectionMatrix();
      }
      const increaseZoomButton = document.getElementById('increaseZoomButton');
      const decreaseZoomButton = document.getElementById('decreaseZoomButton');

      increaseZoomButton.addEventListener('click', () => {
          zoomLevel -= zoomIncrement;
          if (zoomLevel < 0.1) {
              zoomLevel = 0.1;
          }
          updateCameraZoom();
      });
      
      decreaseZoomButton.addEventListener('click', () => {
          zoomLevel += zoomIncrement;
          updateCameraZoom();
      });
      // Center the Model Function:
      function centerModel(model) {
          const bbox = new THREE.Box3().setFromObject(model);
          const center = bbox.getCenter(new THREE.Vector3());

          // Move the model to align its center with the scene's center
          model.position.sub(center);
      }
      // Example: Define a function to calculate minZoomLevel based on model properties
      function calculateMinZoomLevel(model) {
          // Calculate minZoomLevel based on model properties (e.g., bounding box size)
          const bbox = new THREE.Box3().setFromObject(model);
          const modelSize = bbox.getSize(new THREE.Vector3());
          const minDimension = Math.min(modelSize.x, modelSize.y, modelSize.z);
          return minDimension * 1.1; // Adjust based on the scale of your scene
      }
      // Resize handling
      window.addEventListener('resize', () => {
        camera.aspect = sceneEl.clientWidth / (window.innerHeight - heightless);
        camera.updateProjectionMatrix();
        renderer.setSize(sceneEl.clientWidth, window.innerHeight - heightless);
      });

      // Render loop
      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      animate();
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
    width: 100%;
    height: 100%;
    div {
      width: 100%;
      height: 100%;
    }
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
