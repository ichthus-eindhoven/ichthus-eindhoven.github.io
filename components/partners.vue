<template>
  <div id="partners" class="uk-section uk-section-default uk-padding-remove-bottom">
    <div class="uk-container uk-text-center uk-text-middle">
      <h2 class="uk-heading-line uk-text-center">
        <span>Partners</span>
      </h2>
      <div class="uk-grid-match uk-child-width-1-3 uk-flex-middle" uk-grid>
        <div>
          <a
            class="sponsor-item"
            href="https://www.knaek.nl/studentenkorting/Eindhoven"
            target="_blank"
          >
            <img alt="" data-src="/img/partners/knaek.png" uk-img>
          </a>
        </div>
        <div>
          <a
            class="sponsor-item"
            href="https://www.voetbaltafelwinkel.nl/"
            target="_blank"
          >
            <img alt="Voetbaltafels voor verenigingen" src="img/partners/voetbaltafelwinkel.png">
          </a>
        </div>
        <div>
          <a
            class="sponsor-item"
            href="https://www.studentenwegwijzer.nl/"
            target="_blank"
          >
            <img alt="Link naar studentenwegwijzer" data-src="/img/partners/studentenwegwijzer.gif" uk-img>
          </a>
        </div>
      </div>
      <div class="uk-grid-match uk-child-width-1-3 uk-flex-middle uk-margin-remove-top" uk-grid>
        <div>
          <a
            class="sponsor-item"
            href="https://www.stricters.com/nl/"
            target="_blank">
            <img alt="Link naar stricters.com" data-src="/img/partners/stricters.png" uk-img>
          </a>
        </div>
        <div
          class="uk-position-relative"
          uk-slideshow="autoplay: true;autoplay-interval: 3000;"
        >
          <ul class="uk-slideshow-items uk-cover-container">
            <li v-for="partner in sliderFiles" :key="partner.path">
              <span class="helper"></span><a :href="partner.link"><img
              :data-src="partner.path" alt=""
              class="sponsor-item" uk-img></a>
            </li>
          </ul>
        </div>
        <div>
          <a
            class="sponsor-item"
            href="https://www.sponsorkliks.com/winkels.php?club=9374"
            target="_blank"
          >
            <img
              alt="SponsorKliks, gratis Ichthus sponsoren!"
              src="/img/partners/sponsorkliks.png"
              title="SponsorKliks, sponsor Ichthus gratis!"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Partners",
  data() {
    return {
      sliderFiles: [
        {path: "/img/partners/slider/BeBo_Parket.png", link: "https://www.beboparket.nl/"},
        {path: "/img/partners/slider/Budgetgift.png", link: "https://www.budgetgift.nl/"},
        {path: "/img/partners/slider/Comfort_Products.png", link: "https://www.comfort-producten.nl/"},
        {path: "/img/partners/slider/Fleurdirect.png", link: "https://www.fleurdirect.nl/"},
        {path: "/img/partners/slider/Hekwerkonline.png", link: "https://www.hekwerkonline.nl/"},
        {path: "/img/partners/slider/inshared.png", link: "https://www.inshared.nl/"},
        {path: "/img/partners/slider/Mokana.png", link: "https://www.mokana.nl/"},
        {path: "/img/partners/slider/ParcelPro.jpg", link: "https://www.parcelpro.nl/"},
        {path: "/img/partners/slider/Sans_online.png", link: "https://www.sans-online.nl/dameskleding/truien/"},
        {path: "/img/partners/slider/Schattige_Babykleertjes.png", link: "https://www.schattigebabykleertjes.nl/"},
        {path: "/img/partners/slider/Sleiderink.png", link: "https://www.sleiderink.nl/hout-plaat/vurenhout"},
        {
          path: "/img/partners/slider/Sliponline.png",
          link: "https://www.sliponline.nl/kinderen/kinder-nachtkleding/kinder-pyjama/"
        },
        {path: "/img/partners/slider/Stellingstunt.png", link: "https://www.stellingstunt.nl/"},
        {path: "/img/partners/slider/Sweetlivingshop.png", link: "https://www.sweetlivingshop.nl/"},
        {path: "/img/partners/slider/Van_Eyck_shutters.png", link: "https://www.vaneyckshutters.com/"}
      ]
    }
  }
}
</script>

<style scoped>
.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.sponsor-item {
  max-width: 160px;
  margin: auto;
  max-height: 100%;
  vertical-align: middle;

}

#partner-container .uk-card.uk-card-primary {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

#partner-container .uk-card.uk-card-primary .uk-card-body {

  margin-bottom: 0;
  margin-top: auto;
}

</style>
