<template>
  <div class="container-wr">
    <div id="container"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  mounted() {
    this.initThreeJS();
  },
  methods: {
    initThreeJS() {
      const container = document.getElementById('container');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      camera.position.z = 5;

      const loader = new FBXLoader();
      loader.load('/models/model1.fbx', (object) => {
        scene.add(object);
      });

      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the loaded model
        if (scene.children.length > 0) {
          scene.children[0].rotation.x += 0.005;
          scene.children[0].rotation.y += 0.005;
        }

        renderer.render(scene, camera);
      };

      animate();
    },
  },
};
</script>

<style>
.container-wr {
  height: 100vw;
  width: 100%;
  position: relative;
}

#container {
  position: absolute;
}
</style>
