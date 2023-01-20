<template>
    <div class="osmMap">
        <div class="osmMap__in" id="osmMap"></div>
    </div>
</template>



<script>
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-unminified';
import { mapGetters } from 'vuex';
export default {
    head: {
        link: [
            {rel: 'stylesheet', type: 'text/css', href: 'https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css'},
        ],
    },
    computed: {
        ...mapGetters(['getContacts']),
    },
    data: () => ({
        accessToken: 'pk.eyJ1IjoiZGVubnk3NDMiLCJhIjoiY2w2ZW9pcjk3MjhrcDNqcnozZmVweThkYiJ9.WY4UqSfHsmv4noUwv5pePQ', // your access token. Needed if you using Mapbox maps
        map: null
    }),

    mounted() {
            mapboxgl.accessToken = this.accessToken;
            this.map = new mapboxgl.Map({
                container: 'osmMap', // container ID
                style: 'mapbox://styles/denny743/cl6kl37wt001014o322cb10ah', // style URL
                center: '0' in this.getContacts && 'GEO' in this.getContacts['0'] ? [30.8100757441552, 59.69096635] : [30.8100757441552, 59.69096635], // starting position [lng, lat]
                zoom: 16, // starting zoom
                projection: 'globe' // display the map as a 3D globe
            });
    }
}
</script>

<style lang="scss" scoped>
.osmMap {
    width: 100%;
    height: 100%;
    &__in {
        width: 100%;
        height: 100%;
    }
}
</style>