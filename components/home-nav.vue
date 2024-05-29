<template>
  <div
    class="homenav"
    uk-sticky="top: 500; start: 100%; animation:uk-animation-slide-top;sel-target: .uk-navbar-container;
        cls-active:uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark "
  >
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left uk-visible@m">
        <ul
          class="uk-navbar-nav"
          uk-scrollspy-nav="closest: li; scroll: true;offset:80"
        >
          <li><a href="#hero">Home</a></li>
          <!-- <li><a href="#media">Media</a></li> -->
          <li><a href="#about">Vereniging</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdFRc4-lUmXzHNCyset09Ggo2r5UO2n3LAL9o_MhFU_cxpJ4g/viewform" 
                  target="_blank">
                  Word lid
          </a></li>
          <li v-if="this.introNavActive"><a href="#hero" @click="showIntro">Intro</a></li>
          <li v-if="this.pwNavActive"><a href="#hero" @click="showPw">Passion Week</a></li>
        </ul>
      </div>
      <div class="uk-navbar-left uk-hidden@m">
        <ul
          class="uk-navbar-nav"
          uk-scrollspy-nav="closest: li; scroll: true;offset:80"
        >
          <li class="uk-active">
            <a class="uk-navbar-toggle" href="#" uk-navbar-toggle-icon/>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li><a href="#hero">Home</a></li>
                <li><a href="#media">Media</a></li>
                <li><a href="#about">Vereniging</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#partners">Partners</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdFRc4-lUmXzHNCyset09Ggo2r5UO2n3LAL9o_MhFU_cxpJ4g/viewform" target="_blank">Word lid</a></li>
                <li v-if="this.introNavActive"><a @click="showIntro">Intro</a></li>
                <li v-if="this.pwNavActive"><a @click="showPw">Passion Week</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-center">
        <a class="uk-navbar-item uk-logo" href="#hero" uk-scroll>
          <img
            class="uk-preserve"
            height="70"
            src="/img/wapen.png"
            width="48"
          >
        </a>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li><a
            href="https://crashplace.nl/?p=search&q=Ichthus&type=no&gender=no&places=no" target="_blank">Crashplace</a>
          </li>
          <li><a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfyL0-7Pl-GNi9kRwfmsERrJvCHx455shmJQHYF3vzz46np8A/viewform">Reserveren</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "home-nav",
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"])
  },
  props: {
    introNavActive: true,
    pwNavActive: true
  },
  methods: {
    showIntro() {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
      let introBlock = document.getElementById("intro-overlay")
      introBlock.style.display = "block"
      introBlock.style.top = window.scrollY + "px"
    },
    showPw() {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
      let pwBlock = document.getElementById("pw-overlay")
      pwBlock.style.display = "block"
      pwBlock.style.top = window.scrollY + "px"
    }
  }
}
</script>

<style scoped>

</style>
