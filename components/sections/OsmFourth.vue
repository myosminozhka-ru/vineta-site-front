<template>
    <section class="section section__item section__item--fourth">
        <div class="section__left">
            <img :src="require('~/assets/img/sections/fourth.png')" alt="first">
        </div>
        <div class="section__right">
            <div class="section__content">
                <osm-h1 class="section__title">Технологии производства</osm-h1>
                <div class="section__text">
                    Безусловно, постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно фиксирует необходимость соответствующих условий активизации. А ещё реплицированные с зарубежных источников, современные исследования будут своевременно верифицированы! А также активно развивающиеся страны третьего мира могут быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
                </div>
                <osm-button link="index">Подробнее</osm-button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'OsmFirstSection',
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  }
}
</script>