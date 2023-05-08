<template>
  <div class="uk-text-center" id="intro-overlay">
    <div class="uk-container-expand">
      <!--<div class="width:100%;" style="background: white;">
          <img src="img/wapen.png" width="100" height="80" class="uk-preserve" uk-svg>
      </div>-->
      <h2 class="uk-heading-line uk-text-center uk-align-center intro-title"><span>Introweek activiteiten</span></h2>
      <div class="desktop" uk-switcher="animation: uk-animation-fade; toggle: > *">
        <!--<button class="uk-button uk-button-primary uk-button-large activity-btn uk-border-rounded" type="button">TU
          Intro
        </button>
        <button class="uk-button uk-button-primary uk-button-large activity-btn uk-border-rounded" type="button">Fontys
          Intro
        </button>-->
        <!--<button class="uk-button uk-button-primary uk-button-large activity-btn uk-border-rounded" type="button">
          Startweken
        </button>-->
        <button class="uk-button uk-button-primary uk-button-large activity-btn uk-border-rounded" type="button">
          Open Avond
        </button>
        
      </div><!--Switcher-->


      <!-- order of <li> elements decides which switcher tab is used -->
      <ul class="uk-switcher uk-align-center uk-margin uk-container">
        <!--Startweken-->
        <!--<li style="color:white">
          <p>
            De eerste weken van het jaar organiseren we op dinsdag de Ichthus startweken. Kom gezellig een keer
            langs om verenigingsavond bij ons te ervaren!
          </p>
          <div uk-slider>
            <div class="uk-position-relative uk-visible-toggle uk-light">
              <ul class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@ uk-grid uk-grid-match">
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img alt="" data-src="img/media/intro_tourdehap.webp" uk-img>
                    </div>
                    <div class="uk-card-body">
                      <h3 class="uk-card-title">Dinsdag 6 September</h3>
                      <p>Startavond 1: Tour de Hap</p>
                      <p>Een actieve avond om elkaar, ‘de huizen’ en Eindhoven beter te leren kennen
                        op een gezellige manier.
                      </p>
                      <p>
                        We verzamelen om 17:45 bij Amnis, Dommelstraat 6!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img alt="" data-src="img/media/intro_ga.webp" uk-img>
                    </div>
                    <div class="uk-card-body">
                      <h3 class="uk-card-title">Dinsdag 13 september</h3>
                      <p>Startavond 2: GA</p>
                      <p>
                        Een GA (Gemeenschappelijke Avond) die een indruk geeft van hoe een avond met
                        de vereniging en een gastspreker eruit ziet.
                      </p>
                      <p>
                        We verzamelen om 17:45 bij Amnis, Dommelstraat 6!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img alt="" data-src="img/media/intro_kring.webp" uk-img>
                    </div>
                    <div class="uk-card-body">
                      <h3 class="uk-card-title">Dinsdag 20 September</h3>
                      <p>Startavond 3: Kring</p>
                      <p>Een kringavond waarbij we eten en bijbelstudie doen met een kleinere
                        groep.</p>
                      <p>We verzamelen om 17:45 bij Amnis, Dommelstraat 6!</p>

                    </div>
                  </div>
                </li>
              </ul>
              <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                 uk-slidenav-previous uk-slider-item="previous"></a>
              <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                 uk-slider-item="next"></a>
            </div>
            <p class="text-large">
              Neem elke avond ook je fiets en studentenkaart mee!
            </p>
            <div>
              <p class="text-large">
                Dinsdag 13 september, de dag van de tweede startavond van Ichthus, rijden de treinen niet vanwege een
                staking van NS. Om ervoor te kunnen zorgen dat mensen die niet in Eindhoven wonen gewoon aanwezig kunnen
                zijn bieden wij slaapplekken aan van maandag op dinsdag en van dinsdag op woensdag.
              </p>
            </div>
            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin activity-dotnav"></ul>

          </div>
        </li>-->
        <!--Open Avond-->
        <li>
          <div uk-slider="center: true">
            <div class="uk-position-relative uk-visible-toggle uk-light">
              <ul class="uk-slider-items uk-child-width-1-3@s uk-grid">
                <li>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img data-src="img/media/openavond.webp" alt="" uk-img>
                    </div>
                  </div>
                </li>

              </ul>
              <a class="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous
                 uk-slider-item="previous"></a>
              <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next
                 uk-slider-item="next"></a>
            </div>

            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin activity-dotnav"></ul>

          </div>
        </li>
      </ul> <!-- Data -->
    </div>
    <!-- Buttons -->
    <!-- <div id="overlay-back-button" class="uk-flex uk-align-center"> -->
    <div id="back-button" class="desktop overlayButtonsSmall uk-align-center uk-width-1-1 uk-width-1-2@m">
      <button
        class="uk-button uk-button-primary uk-button-medium uk-margin-small-bottom uk-border-rounded to-site-btn uk-width-1-2"
        @click="goToSite()">
        Ga door naar de website
      </button>
      <a
        class="uk-button uk-button-primary uk-button-medium uk-margin-small-bottom uk-border-rounded to-site-btn join-us-btn uk-width-1-2"
        href="https://ichthuseindhoven.nl/interesse">
        <!-- fallback:  https://docs.google.com/forms/d/1t_rCueQVHV_F6c-pccNthq5HCBgZSC9y45VfqobwJY8 -->
        <b> Word lid!</b>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: "introOverlay",
  props: {
    introOverlayActive: true
  },
  data: () => ({
    overlay: true,
  }),
  mounted() {
    this.showIntro()
  },
  methods: {
    showIntro() {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
      let introBlock = document.getElementById("intro-overlay")
      introBlock.style.display = "block"
      introBlock.style.top = window.scrollY + "px"
      if (!this.introOverlayActive) {
        document.getElementsByTagName("body")[0].style.overflow = "auto"
        document.getElementById("intro-overlay").style.display = "none"
      }
    },
    goToSite() {
      this.$cookies.set("sawIntro", true, {
        path: "/",
        maxAge: 60 * 60 * 24
      })
      document.getElementsByTagName("body")[0].style.overflow = "auto"
      document.getElementById("intro-overlay").style.display = "none"
    }
  }
}
</script>

<style scoped>
.activity-btn {
  text-transform: none;
}

.intro-title {
  color: white;
  margin-top: 15px
}

#intro-overlay {
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

  .intro-title {
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
