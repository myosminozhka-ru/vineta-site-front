<template>
    <section class="section section__item section__item--first">
        <div class="section__left">
            <img :src="require('~/assets/img/sections/first.png')" alt="first">
        </div>
        <div class="section__right">
            <div class="section__content">
                <osm-h1 class="section__title">Проектируем, изготавливаем и предоставляем<br /> оборудование<br /> для судостроения</osm-h1>
                <div class="section__text">
                    А также для военного и гражданского судоремонта, транспорта, предприятий ТЭК, атомной промышленности и других.
                </div>
                <osm-button link="index">Каталог</osm-button>
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