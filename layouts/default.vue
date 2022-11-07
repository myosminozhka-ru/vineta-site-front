<template>
    <div>
        <osm-header />
        <nuxt />
        <div class="yandex-metrika">
          <!-- Yandex.Metrika informer -->

          <!-- Yandex.Metrika counter -->
          <script type="text/javascript">
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js";, "ym");

            ym(13997074, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            });
          </script>
          <noscript
            ><div><img src="https://mc.yandex.ru/watch/13997074" ; style="position: absolute; left: -9999px;" alt="" /></div
          ></noscript>
          <!-- /Yandex.Metrika counter -->
        </div>
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