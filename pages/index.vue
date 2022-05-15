<template>
  <div class="wrapper">
    <osm-header />
    <full-page class="sections">
      <osm-first-section />
      <osm-second-section />
      <osm-third-section />
      <osm-fourth-section />
      <osm-fiveth-section />
    </full-page>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    OsmHeader: () => import('~/components/global/OsmHeader.vue'),
    OsmFirstSection: () => import('~/components/sections/OsmFirst.vue'),
    OsmSecondSection: () => import('~/components/sections/OsmSecond.vue'),
    OsmThirdSection: () => import('~/components/sections/OsmThird.vue'),
    OsmFourthSection: () => import('~/components/sections/OsmFourth.vue'),
    OsmFivethSection: () => import('~/components/sections/OsmFiveth.vue'),
  }
}
</script>
