<template>
  <div>
    <osm-preloader />
    <osm-header />
    <nuxt />
    <no-ssr>
      <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return }
          }
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})

        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(14002264, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
    </script>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: "defaultLayout",
  components: {
    OsmHeader: () => import('~/components/global/OsmHeader.vue'),
    OsmPreloader: () => import('~/components/global/OsmPreloader.vue'),
  },
  watch: {
    $route(to, from) {
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
