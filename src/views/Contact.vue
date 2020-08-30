<template>
  <div id="contact">
    <!-- CONTACT PAGE STARTS -->
    <div class="section">
      <div class="container">

        <div class="content is-medium has-text-centered">
          <h1 class="title is-1">The Hume Team
<br>Experts in Trust Based Design</h1>
          <p>
            Experienced individuals who believe that creating with your audiences is the path to success.<br>
Because today the demand is for honesty, power and trust.<br>
We are experts in research, media analytics and human intelligence.<br>
          </p>
          <p>
Strategy, tactics and solutions.<br>
Branding, marketing and digital media.<br>
Design, co-creation, story-telling and network technologies.<br>
User experience, artificial intelligence and augmented reality.<br>
Citizenship, community building, social change.<br>
          </p>
          <p>
            Achieving impact.
          </p>
        </div>
        <div class="columns">
          <div class="column">
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
          <div class="column">
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
          <div class="column">
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
          <div class="column">
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
  min-height: calc(100% - 48px);
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1.title {
    color: #007191;
    font-weight: bold;
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
  .subtitle {
    padding: .5rem;
    margin: 0;
  }
}
a.card-footer-item {
  color: #007191 !important;
}
</style>

