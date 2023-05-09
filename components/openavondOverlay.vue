<template>
  <div class="uk-text-center" id="openavond-overlay">
    <div class="uk-container-expand">
      <!--<div class="width:100%;" style="background: white;">
          <img src="img/wapen.png" width="100" height="80" class="uk-preserve" uk-svg>
      </div>-->
      <h2 class="uk-heading-line uk-text-center uk-align-center openavond-title"><span>Open Avond</span></h2>
      <div style="padding-top: 30px">
                <!--padding-->
            </div>
      <img alt="" data-src="img/media/openavond.webp" uk-img>
    </div>

    <!-- Buttons -->
    <!-- <div id="overlay-back-button" class="uk-flex uk-align-center"> -->
    <div id="back-button" class="desktop overlayButtonsSmall uk-align-center uk-width-1-1 uk-width-1-2@m">
      <a
        class="uk-button uk-button-primary uk-button-medium uk-margin-small-bottom uk-border-rounded to-site-btn join-us-btn uk-width-1-2"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdqla3_IyWE3lyR2j3I9nMMoVT660zrjmducT-leB2S_DBIMQ/viewform?usp=sf_link">
        <b> Aanmelden </b>
      </a>
      <button
        class="uk-button uk-button-primary uk-button-medium uk-margin-small-bottom uk-border-rounded to-site-btn uk-width-1-2"
        @click="goToSite()">
        Ga door naar de website
      </button>
      
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: "openavondOverlay",
  props: {
    openavondOverlayActive: true
  },
  data: () => ({
    overlay: true,
  }),
  mounted() {
    this.showopenavond()
  },
  methods: {
    showopenavond() {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
      let openavondBlock = document.getElementById("openavond-overlay")
      openavondBlock.style.display = "block"
      openavondBlock.style.top = window.scrollY + "px"
      if (!this.openavondOverlayActive) {
        document.getElementsByTagName("body")[0].style.overflow = "auto"
        document.getElementById("openavond-overlay").style.display = "none"
      }
    },
    goToSite() {
      document.getElementsByTagName("body")[0].style.overflow = "auto"
      document.getElementById("openavond-overlay").style.display = "none"
    }
  }
}
</script>

<style scoped>
.activity-btn {
  text-transform: none;
}

.openavond-title {
  color: white;
  margin-top: 15px
}

#openavond-overlay {
  display: none;
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100vh;
  background: #0a3758;
  top: 0px !important;
  overflow-y: auto;
}

.hyphenate {
  text-align: justify;
}

.activity-card {
  margin: 5px;
}

.activity-dotnav > * > * {
  border: 1px solid #fbfbfb;
}

.activity-dotnav > .uk-active > * {
  background-color: #fbfbfb;
}

.uk-light .uk-slidenav, .uk-light .uk-slidenav:hover {
  color: #0a3758;
}

.to-site-btn {
  color: white;
  left: 50%;

}

button:hover {
  color: #0a3758;
  background-color: white;
}

.text-large {
  font-size: x-large;
}

.join-us-btn {
  background-color: white;
  color: #0a3758;
}

@media screen and (min-width: 500px) {
  .overlayButtonsSmall {
    display: flex;
  }
}

@media (max-width: 640px) or (min-width: 880px) {
  .hidden-break {
    display: none !important;
  }
}

@media screen and (min-width: 850px) {
  .desktop {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    padding: 0 10px;
    width: 75%;
  }
}

@media screen and (max-width: 850px) {
  .activity-btn {
    padding: 0 15px;
    line-height: 28px;
    font-size: 0.875rem;
  }

  .openavond-title {
    margin-bottom: 15px;
  }

  .to-site-btn {
    width: 80%;
  }
}

@media screen and (max-width: 350px) {
  .uk-card-body {
    padding: 15px 15px;
  }
}

#overlay-back-button {
  position: fixed;
  bottom: 10px;
  justify-content: center;
  width: 100vw;
}


#overlay-back-button > * {
  width: 20rem;
}

#overlay-space-filler {
  display: block;
  height: 40px;
}
</style>
