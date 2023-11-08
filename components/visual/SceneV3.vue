<template>
  <div>
    <div ref="scene" class="scene"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  name: 'OsmScene',
  // data() {
  //   return {
  //     scene: null,
  //     camera: null,
  //     renderer: null,
  //   }
  // },
  mounted() {
    let scene, camera, renderer;

        function init() {
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xdddddd);

            camera = new THREE.PerspectiveCamera(5, window.innerWidth/window.innerHeight, 1, 5000);
            camera.position.z = 1000;

            let light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
            light.position.set(0, 1, 0);
            scene.add(light);

            light = new THREE.DirectionalLight(0xffffff, 1.0);
            light.position.set(0, 1, 0);
            scene.add(light);

            renderer = new THREE.WebGLRenderer({antialias:true});
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            const controls = new OrbitControls(camera,  renderer.domElement);
            controls.addEventListener('change', renderer);

            const fbxLoader = new FBXLoader();

            fbxLoader.load('/models/model1.fbx', (object) => {
              scene.add(object);
              animate();
            });
        }
        function animate(){
            renderer.render(scene,camera);
            requestAnimationFrame(animate);
        }
        init();
  },
  // methods: {
  //   init() {
  //     const sceneRef = this.$refs.scene
  //     this.scene = new THREE.Scene()
  //     this.scene.background = new THREE.Color(0xdddddd)

  //     this.camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 1, 5000)
  //     this.camera.position.z = 1000

  //     let light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0)
  //     light.position.set(0, 1, 0)
  //     this.scene.add(light)

  //     light = new THREE.DirectionalLight(0xffffff, 1.0)
  //     light.position.set(0, 1, 0)
  //     this.scene.add(light)

  //     this.renderer = new THREE.WebGLRenderer({ antialias: true })
  //     this.renderer.setSize(window.innerWidth, window.innerHeight)
  //     sceneRef.appendChild(this.renderer.domElement)

  //     const controls = new OrbitControls(this.camera, this.renderer.domElement)
  //     controls.addEventListener('change', this.renderer)

  //     const fbxLoader = new FBXLoader()

  //     fbxLoader.load('/models/model1.fbx', (object) => {
  //       this.scene.add(object)
  //       this.animate()
  //     })
  //   },
  //   animate() {
  //     this.renderer.render(this.scene, this.camera)
  //     requestAnimationFrame(this.animate)
  //   },
  // },
}
</script>

<style>
.scene canvas {
  pointer-events: none;
}
</style>

<style lang="scss" scoped>
.scene {
}
</style>
