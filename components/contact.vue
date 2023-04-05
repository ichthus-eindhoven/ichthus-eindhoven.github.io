<template>
  <div id="contact">
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <h2 class="uk-heading-line uk-text-left">
          <span>Contact</span>
        </h2>

        <div class="uk-grid-match uk-child-width-1-2@s" uk-grid>
          <div>
            <div class="uk-card uk-card-muted uk-card-small">
              <div class="uk-card-body">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-auto">
                    <span uk-icon="icon:mail; ratio:2"/>
                  </div>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">
                      E-mail
                    </h3>
                    <a
                      href="mailto:abactis@ichthuseindhoven.nl"
                      style="text-decoration: none;"
                    >abactis@ichthuseindhoven.nl
                    </a>
                  </div>
                </div>
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-auto">
                    <span uk-icon="icon:receiver; ratio:2"/>
                  </div>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">
                      Telefoon
                    </h3>
                    +31 6 51 69 15 22
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="uk-card uk-card-muted uk-flex-middle">
              <div class="uk-card-body">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-auto">
                    <span uk-icon="icon:home; ratio:2"/>
                  </div>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">
                      Adres
                    </h3>
                    Dommelstraat 6<br>
                    5611 CK, Eindhoven<br>
                    Nederland
                  </div>
                </div>
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-auto">
                    <span uk-icon="icon:credit-card; ratio:2"/>
                  </div>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">
                      Bankgegevens
                    </h3>
                    NL74 INGB 0000 575256 <br>
                    t.n.v. CSV Ichthus Eindhoven
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--
        <hr id="contactHR">
        <form
          id="contactForm"
          accept-charset="UTF-8"
        >
          <input
            name="_token"
            type="hidden"
            value="lQy20NPULyfb1L2F94a50Z3V8SwfKb5fvoegh43d"
          >

          <div class="uk-grid uk-grid-match">
            <input
              name="_token"
              type="hidden"
              value="lQy20NPULyfb1L2F94a50Z3V8SwfKb5fvoegh43d"
            >
            <div class="uk-margin uk-width-1-2@s">
              <label
                class="uk-form-label uk-form-large"
                for="name"
              >Naam</label>

              <div class="uk-form-controls" uk-grid>
                <div class="uk-width-expand">
                  <div class="uk-position-relative">
                    <span class="uk-form-icon" uk-icon="icon: user"/>
                    <input
                      id="name"
                      class="uk-input uk-form-controls"
                      data-vv-as="Naam"
                      name="name"
                      placeholder="Naam"
                      type="text"
                      v-model="name"
                      value=""
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="uk-margin uk-width-1-2@s">
              <label
                class="uk-form-label uk-form-large"
                for="email"
              >E-mailadres</label>

              <div class="uk-form-controls" uk-grid>
                <div class="uk-width-expand">
                  <div class="uk-position-relative">
                    <span class="uk-form-icon" uk-icon="icon: mail"/>
                    <input
                      id="email"
                      class="uk-input"
                      data-vv-as="E-mailadres"
                      name="email"
                      placeholder="E-mailadres"
                      type="text"
                      v-model="email"
                      value=""
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="uk-margin uk-width-1-1@s">
              <label
                class="uk-form-label uk-form-large"
              >Bericht</label>
              <div class="uk-form-controls">
                <textarea
                  id="message"
                  class="uk-form-controls uk-textarea"
                  cols="50"
                  data-vv-as="Bericht"
                  name="message"
                  placeholder="Bericht"
                  rows="10"
                  v-model="message"
                />
              </div>
            </div>

            <div class="uk-margin uk-width-4-5@m uk-width-2-3@s">
              <div class="uk-form-controls" uk-grid>
                <div class="uk-width-auto">
                  <input
                    id="accepted"
                    class="uk-form-controls uk-checkbox"
                    data-vv-as="Het accepteren van de privacy voorwaarden"
                    name="accepted"
                    type="checkbox"
                    value="accepted"
                  >
                </div>
                <div class="uk-width-expand">
                  <label
                    class="uk-form-label"
                    for="accepted"
                  >Ik ga akkoord met het verwerken van mijn gegevens.
                    <!--                    <a-->
                    <!--                      href="https://ichthuseindhoven.nl/privacy-avg"-->
                    <!--                      target="_blank"-->
                    <!--                    >Privacy Voorwaarden</a>.-->
                    <!--</label>
                </div>
              </div>
            </div>

            <div class="uk-margin uk-width-1-5@m uk-width-1-3@s">
              <button
                class="uk-button uk-button-primary uk-width-1-1"
              >
                Verzenden
              </button>
            </div>
          </div>
          <!--recaptcha--><!--
        </form>
        -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "",
      name: "",
      message: "",
    }
  }
}
</script>

<style scoped>

</style>
