<template>
  <div class="uk-text-center" id="pw-overlay">
    <div class="uk-container-expand">
      <!--<div class="width:100%;" style="background: white;">
          <img src="img/wapen.png" width="100" height="80" class="uk-preserve" uk-svg>
      </div>-->
      <h2 class="uk-heading-line uk-text-center uk-align-center pw-title"><span>Passion Week activiteiten</span></h2>
      <div class="desktop" uk-switcher="animation: uk-animation-fade; toggle: > *">
        <button class="uk-button uk-button-primary uk-button-large activity-btn uk-border-rounded" type="button">
          Passion Week
        </button>
        <button class="uk-button uk-button-primary uk-button-large activity-btn uk-border-rounded" type="button">
          Student Alpha
        </button>
      </div><!--Switcher-->

      <!-- order of <li> elements decides which switcher tab is used -->
      <ul class="uk-switcher uk-align-center uk-margin uk-container" style="list-style: none">
        <!--Passion Week-->
        <li style="color:white">
          <div uk-slider>
            <div class="uk-position-relative uk-visible-toggle uk-light">
              <ul class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@ uk-grid uk-grid-match">
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img alt="" data-src="img/media/pw-1.webp" uk-img>
                    </div>                 
                  </div>
                </li>
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img alt="" data-src="img/media/pw-2.webp" uk-img>
                    </div>               
                  </div>
                </li>
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img alt="" data-src="img/media/pw-3.webp" uk-img>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div style="padding-top: 25px">
                <!--padding-->
            </div>
            <div>
              <p class="text-large" style="text-align: justify">
                De Passion Week is een serie lunchtalks en activiteiten die op de campus van de TU/e
                worden georganiseerd, onder andere door C.S.V. Ichthus Eindhoven. Tijdens deze week
                wordt een centraal, maatschappelijk thema vanuit een christelijk perspectief behandeld.
                Dit jaar gaat het thema over de last die het voldoen aan de maatstaven van de maatschappij
                met zich meebrengt en hoe geloof ons hiervan kan bevrijden.   </p>
            </div>
            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin activity-dotnav"></ul>
          </div>
                    <div id="back-button" class="desktop overlayButtonsSmall uk-align-center uk-width-1-1 uk-width-1-2@m">
      <button
        class="uk-button uk-button-primary uk-button-medium uk-margin-small-bottom uk-border-rounded to-site-btn uk-width-1-2"
        @click="goToSite()">
        Ga door naar de website
      </button>
      <a
        class="uk-button uk-button-primary uk-button-medium uk-margin-small-bottom uk-border-rounded to-site-btn join-us-btn uk-width-1-2"
        href="https://www.instagram.com/passionweek_eindhoven/">
        <b>Kijk op Instagram voor meer informatie!</b>
      </a>
    </div>
        </li>     
        <!--Alpha-->
        <li style="color:white; margin-bottom: 0px; padding-bottom: 0px">
                      <div uk-slider style="margin-bottom: 0px">
            <div class="uk-position-relative uk-visible-toggle uk-light">
              <ul class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@ uk-grid uk-grid-match">
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img alt="" data-src="img/media/alpha-1.webp" uk-img>
                    </div>                 
                  </div>
                </li>
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img alt="" data-src="img/media/alpha-2.webp" uk-img>
                    </div>               
                  </div>
                </li>
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img alt="" data-src="img/media/alpha-3.webp" uk-img>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div style="padding-top: 25px">
                <!--padding-->
            </div>
            <div>
              <p class="text-medium" style="text-align: justify">
                Als Ichthus willen we graag mensen laten kennismaken met het geloof! Daarom organiseren
wij Student Alpha. Dit is een cursus waarin nieuwe gelovigen en geïnteresseerden in het
geloof kennis kunnen maken met de basisbeginselen van geloof. Het is een plek waar je
samen eet en daarna samen in gesprek gaat over geloofsonderwerpen. De liefde van Jezus
staat centraal en daarnaast is gezelligheid en groepsbinding een belangrijk onderdeel. Als je
geïnteresseerd bent, of er gewoon een keer over wilt praten. Stuur ons gerust een mailtje op <a style="text-decoration: underline" href="mailto:
studentalpha.eindhoven@gmail.com">studentalpha.eindhoven@gmail.com</a>!</p>
            </div>
          </div>
                    <div id="back-button" class="desktop overlayButtonsSmall uk-align-center uk-width-1-1 uk-width-1-2@m" style="padding-top: 0px; margin-top: 0px; margin-bottom: 0px; padding-bottom: 0px">
      <button
        class="uk-button uk-button-primary uk-button-medium uk-margin-small-bottom uk-border-rounded to-site-btn uk-width-1-2"
        @click="goToSite()">
        Ga door naar de website
      </button>
      <a
        class="uk-button uk-button-primary uk-button-medium uk-margin-small-bottom uk-border-rounded to-site-btn join-us-btn uk-width-1-2"
        href="https://www.instagram.com/alphaeindhoven/">
        <b>Kijk op Instagram voor meer informatie!</b>
      </a>
    </div>
        </li>
      </ul> <!-- Data -->
    </div><!--Switcher-->
    </div>

</template>

<script>
export default {
  scrollToTop: true,
  name: "pwOverlay",
  props: {
    pwOverlayActive: true
  },
  data: () => ({
    overlay: true,
  }),
  mounted() {
    this.showPw()
  },
  methods: {
    showPw() {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
      let pwBlock = document.getElementById("pw-overlay")
      pwBlock.style.display = "block"
      pwBlock.style.top = window.scrollY + "px"
      if (!this.pwOverlayActive) {
        document.getElementsByTagName("body")[0].style.overflow = "auto"
        document.getElementById("pw-overlay").style.display = "none"
      }
    },
    goToSite() {
      document.getElementsByTagName("body")[0].style.overflow = "auto"
      document.getElementById("pw-overlay").style.display = "none"
    }
  }
}
</script>

<style scoped>
.activity-btn {
  text-transform: none;
}

.pw-title {
  color: white;
  margin-top: 15px
}

#pw-overlay {
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

  .pw-title {
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
