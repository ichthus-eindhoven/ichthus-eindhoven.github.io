<template>
  <div id="partners" class="uk-section uk-section-default">
    <div class="uk-container uk-text-center uk-text-middle">
      <h2 class="uk-heading-line uk-text-center">
        <span>Partners</span>
      </h2>
      <div class="uk-grid-match uk-child-width-1-3 uk-flex-middle" uk-grid>
        <div style="max-height: 100px;">
          <a
            class="sponsor-item"
            href="https://www.knaek.nl/studentenkorting/Eindhoven"
            target="_blank"
          >
            <img style="max-height: 100px; max-width: 160px" alt="" data-src="/img/partners/knaek.png" uk-img>
          </a>
        </div>
        <div style="max-height: 100px;">
          <a
            class="sponsor-item"
            href="https://www.stricters.com/nl/"
            target="_blank">
            <img style="max-height: 100px; max-width: 160px" alt="Link naar stricters.com" data-src="/img/partners/stricters.png" uk-img>
          </a>
        </div>
        <div style="max-height: 100px;">
          <a
            class="sponsor-item"
            href="https://www.sponsorkliks.com/winkels.php?club=9374"
            target="_blank"
          >
            <img style="max-height: 100px; max-width: 160px" 
              alt="SponsorKliks, gratis Ichthus sponsoren!"
              src="/img/partners/sponsorkliks.png"
              title="SponsorKliks, sponsor Ichthus gratis!"
            >
          </a>
        </div>
      </div>
      <div class="uk-grid-match uk-child-width-1-3 uk-flex-middle" uk-grid>
        <div style="max-height: 100px;">
          <a
            class="sponsor-item"
            href="http://www.ventilatieland.nl/"
            target="_blank"
          >
            <img style="max-height: 100px; max-width: 160px" 
              alt="Ventilatieland"
              src="/img/partners/ventilatieland.jpg"
              title="Ventilatieland"
            >
          </a>
        </div>
        <div style="max-height: 100px;"
          class="uk-position-relative"
          uk-slideshow="autoplay: true;autoplay-interval: 3000;"
        >
          <ul class="uk-slideshow-items uk-cover-container"  style="min-height: 80px; max-height: 100px;">
            <li v-for="partner in sliderFiles" :key="partner.path">
              <span class="helper"></span><a :href="partner.link"><img
              :data-src="partner.path" alt=""
              class="sponsor-item" uk-img></a>
            </li>
          </ul>
        </div>
        <div style="max-height: 100px;">
          <a
            class="sponsor-item"
            href="https://www.budget-tie.nl/"
            target="_blank"
          >
            <img style="max-height: 100px; max-width: 160px" 
              alt="Ties and more"
              src="/img/partners/budget_tie.png"
              title="Budget Tie"
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
        {path: "/img/partners/slider/Bouwhuis-logo.png", link: "https://www.bouwhuis.com/"},
        {path: "/img/partners/slider/Comfort_Products.png", link: "https://www.comfort-producten.nl/"},
        {path: "/img/partners/slider/ParcelPro.jpg", link: "https://www.parcelpro.nl/"},
        {path: "/img/partners/slider/Shops-united.png", link: "https://shops-united.nl/"},
        {path: "/img/partners/slider/Stellingstunt.png", link: "https://www.stellingstunt.nl/"},
        {path: "/img/partners/slider/inshared.png", link: "https://www.inshared.nl/"},
        {path: "/img/partners/slider/TrafficToday.jpg", link: "https://www.traffictoday.nl/"},
        {path: "/img/partners/slider/Vd_Garde_logo.png", link: "https://www.vdgarde.nl/"},
        {path: "/img/partners/slider/VerzekeringNL_Logo.png", link: "https://www.verzekering.nl/autoverzekering/"}
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
  max-height: 100px;
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