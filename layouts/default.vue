<template>
    <div>
        <osm-header />
        <nuxt />
    </div>
</template>

<script>
// import {mapActions} from 'vuex';
export default {
    name: "defaultLayout",
    components: {
        OsmHeader: () => import('~/components/global/OsmHeader.vue'),
    },
    watch: {
        $route(to, from) {
            // console.log('route change to', to)
            // console.log('route change from', from)
            if (window) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        },
    },
}
</script>