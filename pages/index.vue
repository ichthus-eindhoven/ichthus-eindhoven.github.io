<template>
  <div style="flex: 1;">
    <intro-overlay :intro-overlay-active="false"/>
    <passion-week-overlay :pw-overlay-active="false"/>
    <openavond-overlay :openavond-overlay-active="false"/>
    <hero :intro-nav-active="false" :pw-nav-active="false" :openavond-nav-active="false"/>
    <blurb/>
    <!-- <activities /> -->
    <media/>
    <about/>
    <bestuur/>
    <contact/>
    <business/>
    <partners/>
    <voeter/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "HomeComponent",
   /* data() {
     if (this.$cookies.get("sawIntro")) {
       return {
         introNavActive: true,
         introOverlayActive: false
       }
     } else {
       return {
         introNavActive: false,
         introOverlayActive: false
       }
     }
   }, */
  //triggerCi
  head: {
    title: "C.S.V. Ichthus Eindhoven",
    htmlAttrs: {
      lang: "nl",
    },
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: "De website van C.S.V. Ichthus Eindhoven"},
      {name: "format-detection", content: "telephone=no"},
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
  },

})
</script>

<style>

</style>
