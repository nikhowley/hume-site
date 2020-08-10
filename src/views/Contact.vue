<template>
  <div id="contact">
    <!-- CONTACT PAGE STARTS -->
    <div class="section">
      <div class="container">

        <div class="content is-medium has-text-centered">
          <h1 class="title is-1">The HUME Team</h1>
          <p>
            Four experienced human beings who believe that reason and passion drive action.<br>
            Who know that standard approaches don’t win.<br>
            Because the demand is for honesty and power. And trust.<br>
            That's why we co-create with audiences.<br>
            Their stories shape your business success.<br>
            Their trust is your bottom line.<br>
            We're inverting the model.<br>
            Validated, recursive insights and intelligence.<br>
            Creating human networks that shape and grow trust.<br>
          </p>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Pamela<br>Divinsky
                </p>
              </div>
              <footer class="card-footer">
                <a href="mailto: pamela@hume.works" class="card-footer-item">Email</a>
                <a @click="copy('416.562.6414')" href="" class="card-footer-item">Phone</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Brendan<br>Howley
                </p>
              </div>
              <footer class="card-footer">
                <a href="mailto: brendan@hume.works" class="card-footer-item">Email</a>
                <a @click="copy('226.880.1449')" href="" class="card-footer-item">Phone</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Rami<br>Lippa
                </p>
              </div>
              <footer class="card-footer">
                <a href="mailto: rami@hume.works" class="card-footer-item">Email</a>
                <a @click="copy('647.528.2417')" href="" class="card-footer-item">Phone</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Nikolai<br>Howley
                </p>
              </div>
              <footer class="card-footer">
                <a href="mailto: nikolai@hume.works" class="card-footer-item">Email</a>
                <a @click="copy('226.880.1479')" href="" class="card-footer-item">Phone</a>
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
  min-height: calc(100%);
  padding-top: 52px;
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

