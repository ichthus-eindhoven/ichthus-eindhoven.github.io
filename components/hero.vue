<template>
  <div
    id="hero"
    class="uk-background-cover uk-height-viewport"
    style="background-image: url(/img/hero.webp);"
    uk-parallax="bgy: -200;"
  >
    <home-nav :intro-nav-active="introNavActive" :pw-nav-active="pwNavActive"/>
    <div class="uk-section">
      <div class="uk-position-center homepage-title uk-text-center uk-light">
        <h1 class="uk-margin-remove uk-heading-hero">
          C.S.V. Ichthus Eindhoven
        </h1>
        <p class="uk-margin-remove uk-text-lead">
          Geloof, diepgang, vriendschap en gezelligheid
        </p>
      </div>
      <a
        class="uk-position-bottom-center scroll-button"
        href="#blurb"
        offset="80"
        uk-icon="icon:  chevron-down; ratio:3"
        uk-scroll
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    introNavActive: true,
    pwNavActive: true
  }
}
</script>

<style scoped>

</style>
