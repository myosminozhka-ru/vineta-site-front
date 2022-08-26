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
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        const controls = new OrbitControls( camera, renderer.domElement );
        const HemisphereLight = new THREE.HemisphereLight(0xB1E1FF, 0xB97A20, 0.6);
        const DirectionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.6);
        // let object = null;


        DirectionalLight.position.set(0, 10, 0);
        DirectionalLight.target.position.set(-5, 0, 0);
        scene.add(DirectionalLight);
        scene.add(DirectionalLight.target);

        // const loader = new OBJLoader();
        const mtlLoader = new MTLLoader();

        // camera.position.set( 0, 20, 100 );
        camera.position.set( 206.33037545454508, 84.72297202548734, 704.3471129107609 );
        HemisphereLight.position.set( 206.33037545454508, 84.72297202548734, 704.3471129107609 );
        controls.update();


        scene.add( HemisphereLight );
        scene.add( camera );



        mtlLoader.load(
          `${this.link}/models/zavod5.mtl`,
          (materials) => {
              materials.preload()
              console.log(materials)
              const objLoader = new OBJLoader()
              objLoader.setMaterials(materials)
              objLoader.load(
                  `${this.link}/models/zavod5.obj`,
                  (object) => {
                      scene.add(object)
                  },
                  (xhr) => {
                      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
                  }
              )
          },
          (xhr) => {
              console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
          }
      )
        // loader.load(
        //   // resource URL
        //   `${this.link}/models/zavod5.obj`,
        //   // called when resource is loaded
        //   function ( object ) {

        //     scene.add( object );

        //   },
        //   // called when loading is in progresses
        //   function ( xhr ) {

        //     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        //   },
        // );




        
        renderer.setSize( sceneRef.clientWidth, sceneRef.clientHeight );
        sceneRef.appendChild( renderer.domElement );
        console.log(scene);
        function animate() {
          requestAnimationFrame( animate );
          controls.update();
          if (camera.position.z > -700) {
            camera.position.z -= 0.6;
          }
          // DirectionalLight.position.x = camera.position.x;
          // DirectionalLight.position.y = camera.position.y;
          // DirectionalLight.position.z = camera.position.z;
          // console.log('camera.position', camera.position);
          renderer.render( scene, camera );
        }
        animate();

        window.addEventListener('resize', onWindowResize, false)
        function onWindowResize() {
            camera.aspect = sceneRef.clientWidth / sceneRef.clientHeight
            camera.updateProjectionMatrix();
            renderer.setSize(sceneRef.clientWidth, sceneRef.clientHeight);
            animate();
        }
        // console.log(document.location.origin);
    },
    methods: {
      // tratata(intersects) {
      //   console.log(intersects);
      // }
    }
  }

</script>

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
