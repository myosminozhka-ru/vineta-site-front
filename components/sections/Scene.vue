<template>
  <div class="scene" ref="scene" @mousewheel.stop>
        <!-- <model-obj
            :filePath="`${link}/models/zavod.glb`"
            :camera-position="{ x: 0, y: 0, z: 0 }"
            :rotation="{ x: 0.2, y: 0.9, z: 0 }"
            :scale="{ x: 2.5, y: 2.5, z: 2.5 }"
            :show-fps="true"
            @mousemove="tratata"
        /> -->
  </div>
</template>

<script>
// import { ModelObj } from 'vue-3d-model';
import * as THREE from 'three';
// import GLTFLoader from 'three-gltf-loader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  export default {
    name: "OsmScene",
    // components: { ModelObj },
    data: () => ({
        isMounted: false,
        link: '',
        object: null,
    }),
    mounted() {
        this.link = document.location.origin;
        this.isMounted = true;
        const sceneRef = this.$refs.scene;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 45, sceneRef.clientWidth / sceneRef.clientHeight, 1, 2000 );
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        const controls = new OrbitControls( camera, renderer.domElement );



        camera.position.set( 206.33037545454508, 84.72297202548734, 704.3471129107609 );

        const HemisphereLight = new THREE.HemisphereLight(0xB1E1FF, 0xB97A20, 0.8);
        const DirectionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.4);

        DirectionalLight.position.copy( camera.position );
        DirectionalLight.castShadow = true;
        DirectionalLight.shadow.radius = 8;

        // DirectionalLight.shadow.mapSize.width = 1024;
        // DirectionalLight.shadow.mapSize.height = 1024;
        // DirectionalLight.shadow.camera.near = 1;
        // DirectionalLight.shadow.camera.far = 1000;
        scene.add(DirectionalLight);

        const mtlLoader = new MTLLoader();
        controls.update();


        scene.add( HemisphereLight );
        scene.add( camera );



        mtlLoader.load(
          `${this.link}/models/zavod5.mtl`,
          (materials) => {
              materials.preload()
              console.log(materials)
              const objLoader = new OBJLoader()
              materials.receiveShadow = true;
              objLoader.setMaterials(materials)
              objLoader.load(
                  `${this.link}/models/zavod5.obj`,
                  (object) => {
                    object.castShadow = true;
                    object.receiveShadow = true;
                    scene.add(object);
                  },
                  (xhr) => {
                      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
                      if ((xhr.loaded / xhr.total) * 100 > 99) {
                        animate();
                        window.addEventListener('resize', onWindowResize, false)
                      }
                  }
              )
          },
          (xhr) => {
              console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
          }
      )
        
      renderer.setSize( sceneRef.clientWidth, sceneRef.clientHeight );
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      sceneRef.appendChild( renderer.domElement );

      function animate() {
        requestAnimationFrame( animate );
        controls.update();
        // let 
        if (camera.position.z > -700) {
          camera.position.z -= 0.6;
        }
        // PointLight.position.copy( camera.position )
        DirectionalLight.position.copy( camera.position );
        // DirectionalLight.target.position.copy( camera.position );
        renderer.render( scene, camera );
      }
      function onWindowResize() {
          camera.aspect = sceneRef.clientWidth / sceneRef.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(sceneRef.clientWidth, sceneRef.clientHeight);
          animate();
      }
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

</style>
