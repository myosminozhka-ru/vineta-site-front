<template>
  <div>
    <div
      class="loading-overlay"
      :class="[
        {
          'loading-overlay--hidden': !isShowLoader || loadingPercentage === 100,
        },
      ]"
    >
      <span class="loading-overlay__text">
        Загрузка: {{ loadingPercentage }}%
      </span>
    </div>
    <div ref="scene" class="scene" @mousewheel.stop>
      <!-- <model-obj
              :filePath="`${link}/models/zavod.glb`"
              :camera-position="{ x: 0, y: 0, z: 0 }"
              :rotation="{ x: 0.2, y: 0.9, z: 0 }"
              :scale="{ x: 2.5, y: 2.5, z: 2.5 }"
              :show-fps="true"
              @mousemove="tratata"
          /> -->
    </div>
  </div>
</template>

<script>
// import { ModelObj } from 'vue-3d-model';
import * as THREE from 'three'
// import GLTFLoader from 'three-gltf-loader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  name: 'OsmScene',
  // components: { ModelObj },
  props: {
    isStart: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isMounted: false,
    link: '',
    object: null,
    loadingPercentage: 0,
    isShowLoader: true,
    isPauseAnimate: false,

    controls: null,
    camera: null,
    DirectionalLight: null,
    renderer: null,
    scene: null,
  }),
  watch: {
    isStart: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue === true && this.loadingPercentage === 100) {
          this.isPauseAnimate = false
        } else {
          this.isPauseAnimate = true
        }

        this.animate()
      },
    },
  },
  mounted() {
    this.link = document.location.origin
    this.isMounted = true
    const sceneRef = this.$refs.scene

    // const scene = new THREE.Scene()
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      45,
      sceneRef.clientWidth / sceneRef.clientHeight,
      1,
      2000
    )
    // const camera = new THREE.PerspectiveCamera(
    //   45,
    //   sceneRef.clientWidth / sceneRef.clientHeight,
    //   1,
    //   2000
    // )
    // const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    // const controls = new OrbitControls(camera, renderer.domElement)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    this.camera.position.set(
      206.33037545454508,
      84.72297202548734,
      704.3471129107609
    )

    const HemisphereLight = new THREE.HemisphereLight(0xb1e1ff, 0xb97a20, 0.8)
    // const DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.4)
    this.DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    const SpotLight = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25)

    SpotLight.position.set(5, 5, 5)
    SpotLight.target.position.set(0, 0, 0)

    this.DirectionalLight.position.copy(this.camera.position)
    this.DirectionalLight.castShadow = true
    this.DirectionalLight.shadow.radius = 8

    // DirectionalLight.shadow.mapSize.width = 1024;
    // DirectionalLight.shadow.mapSize.height = 1024;
    // DirectionalLight.shadow.camera.near = 1;
    // DirectionalLight.shadow.camera.far = 1000;
    this.scene.add(this.DirectionalLight)
    this.scene.add(SpotLight)

    const mtlLoader = new MTLLoader()
    // controls.update()
    this.controls.update()

    this.scene.add(HemisphereLight)
    this.scene.add(this.camera)

    mtlLoader.load(
      `${this.link}/models/zavod5.mtl`,
      (materials) => {
        materials.preload()
        console.log(materials)
        const objLoader = new OBJLoader()
        materials.receiveShadow = true
        objLoader.setMaterials(materials)
        objLoader.load(
          `${this.link}/models/zavod5.obj`,
          (object) => {
            object.castShadow = true
            object.receiveShadow = true
            this.scene.add(object)
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            if ((xhr.loaded / xhr.total) * 100 > 99) {
              window.addEventListener('resize', onWindowResize, false)
            }
          }
        )
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        this.loadingPercentage = (xhr.loaded / xhr.total) * 100
      }
    )

    this.renderer.setSize(sceneRef.clientWidth, sceneRef.clientHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    sceneRef.appendChild(this.renderer.domElement)

    // function animate() {
    //   requestAnimationFrame(animate)
    //   controls.update()
    //   // let
    //   if (camera.position.z > -700) {
    //     camera.position.z -= 0.6
    //   }
    //   // PointLight.position.copy( camera.position )
    //   DirectionalLight.position.copy(camera.position)
    //   // DirectionalLight.target.position.copy( camera.position );
    //   renderer.render(scene, camera)
    // }
    function onWindowResize() {
      this.camera.aspect = sceneRef.clientWidth / sceneRef.clientHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(sceneRef.clientWidth, sceneRef.clientHeight)
      this.animate()
    }
  },
  methods: {
    animate() {
      if (!this.isPauseAnimate) {
        requestAnimationFrame(this.animate)
        this.controls.update()
        // let

        if (this.camera.position.z > -700) {
          this.camera.position.z -= 0.6
        }

        // PointLight.position.copy( camera.position )
        this.DirectionalLight.position.copy(this.camera.position)
        // DirectionalLight.target.position.copy( camera.position );
        this.renderer.render(this.scene, this.camera)
        this.isShowLoader = false
      }
    },
  },
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
