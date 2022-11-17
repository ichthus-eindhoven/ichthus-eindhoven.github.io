<template>
  <div id="media" class="uk-section uk-section-muted">
    <div id="vue-media" class="uk-container">
      <h2 class="uk-heading-line uk-text-center">
        <span>Media</span>
      </h2>
      <!--<video-component url="/videos/promo.mp4"/>
        <hr class="uk-divider-icon">-->

      <div
        class="uk-position-relative"
        uk-slideshow="autoplay: true;autoplay-interval: 3000"
      >
        <ul class="uk-slideshow-items uk-cover-container">
          <li>
            <img alt="" data-src="/img/media/01.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/02.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/03.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/04.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/05.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/06.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/07.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/08.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/09.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/10.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/11.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/12.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/13.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/14.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/15.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/16.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/17.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/18.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/19.webp" uk-cover uk-img>
          </li>
          <li>
            <img alt="" data-src="/img/media/20.webp" uk-cover uk-img>
          </li>
        </ul>
        <a
          class="
              uk-slidenav-large
              uk-position-center-left
              uk-position-small
              uk-hidden-hover
            "
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        />
        <a
          class="
              uk-slidenav-large
              uk-position-center-right
              uk-position-small
              uk-hidden-hover
            "
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        />
        <div class="uk-position-bottom-center uk-position-small">
          <ul class="uk-slideshow-nav uk-dotnav uk-light"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Media"
}
</script>

<style scoped>

</style>
