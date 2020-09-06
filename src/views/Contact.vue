<template>
  <div id="contact">
    <!-- CONTACT PAGE STARTS -->
    <div class="section">
      <div class="container">

        <div class="content has-text-centered">
          <h1 class="title">The Hume Team</h1>
          <p><b>Leaders in Trust Based Design</b></p>
          <p>
            Experienced individuals who believe that creating with your audiences is the path to success.<br>
            Because today the demand is for honesty, power and trust.<br>
            We are experts in research, media analytics and human intelligence.<br>
          </p>
          <p><b>We are experts in:</b></p>
          <p>
            Research, media analytics, human intelligence.<br>
            Strategy, tactics and solutions.<br>
            Branding, marketing and digital media.<br>
            Design, co-creation, story-telling and network technologies.<br>
            User experience, artificial intelligence and augmented reality.<br>
            Citizenship, community building, social change.<br>
          </p>
          <p><b>Achieving impact.</b></p>
        </div>
        <div class="columns is-multiline">
          <div class="column is-half-tablet is-one-quarter-widescreen">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Pamela<br>Divinsky
                </p>
                <p>
                  Founder, Strategy & Foresight Lead
                </p>
              </div>
              <footer class="card-footer">
                <a href="mailto: pamela@hume.works" class="card-footer-item">Email</a>
                <a href="tel: 4165626414" class="card-footer-item">Phone</a>
              </footer>
            </div>
          </div>
          <div class="column is-half-tablet is-one-quarter-widescreen">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Brendan<br>Howley
                </p>
                <p>Founder, Technology & Innovation Lead</p>
              </div>
              <footer class="card-footer">
                <a href="mailto: brendan@hume.works" class="card-footer-item">Email</a>
                <a href="tel: 2268801449" class="card-footer-item">Phone</a>
              </footer>
            </div>
          </div>
          <div class="column is-half-tablet is-one-quarter-widescreen">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Rami<br>Lippa
                </p>
                <p>Founder, Creative & Design Solutions Lead</p>
              </div>
              <footer class="card-footer">
                <a href="mailto: rami@hume.works" class="card-footer-item">Email</a>
                <a href="tel: 6475282417" class="card-footer-item">Phone</a>
              </footer>
            </div>
          </div>
          <div class="column is-half-tablet is-one-quarter-widescreen">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Nikolai<br>Howley
                </p>
                <p>UX & Software Development Lead</p>
              </div>
              <footer class="card-footer">
                <a href="mailto: nikolai@hume.works" class="card-footer-item">Email</a>
                <a href="tel: 2268801479" class="card-footer-item">Phone</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CONTACT PAGE ENDS -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Contact",
  components: {},
  methods: {
    copy: (number) => {
      navigator.clipboard.writeText(number).then(() => {
        alert('Phone number copied to clipboard!');
      })
    }
  }
};
</script>

<style lang="scss">
#contact {
  min-height: calc(100vh);
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .content {
    h1 {
      color: #007191;
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 1rem;
      @media only screen and (min-width: 426px) {
        font-size: 48px;
      }
    }
    p {
      font-size: 18px;
      @media only screen and (min-width: 426px) {
        font-size: 20px;
      }
    }
  }
  .columns {
    margin-top: 2rem;
  }
}
.card {
  border-radius: .25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-content {
  p.title {
    font-weight: bold;
    font-size: 36px;
  }
  p {
    font-size: 18px;
  }
}
a.card-footer-item {
  color: #007191 !important;
  font-size: 14px;
}
</style>

