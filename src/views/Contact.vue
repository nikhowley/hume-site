<template>
  <div id="contact">
    <!-- HOMEPAGE STARTS -->
    <div class="section">
      <div class="container">

        <div class="content is-medium has-text-centered">
          <h1 class="title is-1">THE HUME TEAM</h1>
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
                <p class="subtitle">
                  pamela@hume.works
                </p>
                <p class="subtitle">
                  416.562.6414
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Brendan<br>Howley
                </p>
                <p class="subtitle">
                  brendan@hume.works
                </p>
                <p class="subtitle">
                  226.880.1479
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Rami<br>Lippa
                </p>
                <p class="subtitle">
                  rami@hume.works
                </p>
                <p class="subtitle">
                  647.528.2417
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Nikolai<br>Howley
                </p>
                <p class="subtitle">
                  nikolai@hume.works
                </p>
                <p class="subtitle">
                  226.880.1479
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- HOMEPAGE ENDS -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Contact",
  components: {},
};
</script>

<style lang="scss">
#contact {
  min-height: calc(100% - 52px);
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 52px;
}
.card-content {
  .title { 
    margin-bottom: 2rem;
  }
  .subtitle {
    padding: .5rem;
    margin: 0;
  }
}
</style>

