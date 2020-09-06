<template>
  <div id="home">
    <!-- HERO STARTS -->
    <section class="hero is-primary">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/hero.mp4" type="video/mp4">
      </video>
    </section>
    <!-- HERO ENDS -->
    <!-- UNCERTAINTY BLURB STARTS -->
    <div class="section uncertainty">
      <div class="container">
        <div class="content has-text-centered">
          <h1 class="title is-spaced">Uncertainty?</h1>
          <p><b>Trust Based Design is our solution.</b></p>
          <p>There is untapped insight in the stories your audiences are telling about what matters to them.<br>
          When you plug into their stories with our technology, you unlock the trust they can have in you, and the trust they can create for you.</p>
          <p>Transformed into creators, and sharers, your audiences have the power to create your future.<br>
          Because you have trusted them, and they in turn trust you.</p>
          <p><b>Trust Based Design solutions.<br>The way we conquer the challenges of uncertainty.</b></p>
        </div>
      </div>
    </div>
    <!-- TRUST BLURB ENDS -->
    <section class="tbd">
      <img src="@/assets/Hume_TBD_Image.png" alt="">
    </section>
    <div class="section offering">
      <div class="container">
        <div class="content has-text-centered">
          <h1 class="title is-spaced">How HUME works</h1>
          <p><b>Three easy steps that continue endlessly.</b></p>
          <div class="columns"></div>
          <div class="list-heading">
            <h1 class="list-number">1</h1>
            <h1 class="list-text left">Listen.</h1>
          </div>
          <p>It starts with listening to the human stories of your audiences.
          Their stories hold deep intelligence and insights into the language and values that matter.
          They reveal the trust gaps.
          And trust nodes.
          </p>
          <p>Then we analyze and quantify this intelligence.
          Accurately. In real time. At scale.
          Reliably. Persistently. Predictively.
          This is the analytic engine.</p>
          <div class="list-heading">
            <h1 class="list-number">2</h1>
            <h1 class="list-text">Co-create.</h1>
          </div>
          <p>Share this intelligence with your audiences, and with them, create the stories, scenarios and solutions. You honour their role as authors. As truth tellers. This equity and respect opens up honesty. Honesty unlocks insights that come only when people feel safe to be vulnerable. Learning all you need to for the best solutions to emerge.
          </p>
          <div class="list-heading">
            <h1 class="list-number">3</h1>
            <h1 class="list-text">Network.</h1>
          </div>
          <p>Your audiences share what they have created. Generating ever-expanding networks. They are sharing what they believe to be true. And trusted.</p>
          <p>You scale networks and solutions built on trust.</p>
          <p><b>Trust Based Design.<br>An insights and creation engine that scales trust.</b></p>
        </div>
      </div>
    </div>
    <!-- OFFERING STARTS -->
    <!-- <div class="section offering">
      <h1 class="title is-1 has-text-centered">How HUME.WORKS</h1>
      <div class="container content">
        <h2 class="subtitle ">TOOLS – CREATE STORIES THAT PENETRATE</h2>
        <p class="subtitle is-6">Unearth the language and values to create stories that generate trust networks</p>
        <div class="columns">
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">STORYengine</p>
                <p class="subtitle">Create compelling story outlines.</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">VALUEstock</p>
                <p class="subtitle">Identify the values that are shaping conversations.</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">IMAGEmotives</p>
                <p class="subtitle">Select your most resonant images</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container content">
        <h2 class="subtitle ">ANALYTICS – VALIDATED QUANTIFIED HUMAN INSIGHTS</h2>
        <p class="subtitle is-6">Map the relevance of language and values, identify the trust gaps, and build trust networks.</p>
        <div class="columns">
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">INTENSITYmaps</p>
                <p class="subtitle">Evaluate the salience and incidence of language and values.</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">TRUSTgaps</p>
                <p class="subtitle">See the deltas in trust over time.</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">TRUSTnetworks</p>
                <p class="subtitle">Map which values create trust networks</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="container content">
        <h2 class="subtitle ">IMPACT – MEASURE AND GROW TRUST</h2>
        <p class="subtitle is-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni at laboriosam reiciendis minus optio, expedita dolorum quam aliquid debitis eius aut.</p>
        <div class="columns">
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">SCENARIOspace</p>
                <p class="subtitle">Understand future possibilities.</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">TRUSTequity</p>
                <p class="subtitle">See trust assets and weaknesses.</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">HUMEdash</p>
                <p class="subtitle">Tools and analytics in one place, in real time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- OFFERING ENDS -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data () {
    return {
      show: false
    }
  },
  components: {}
};
</script>

<style lang="scss">
#home {
  display: flex;
  flex-direction: column;
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: black;
    max-height: 100vh;
    padding-top: 64px;
  }
  img{
    max-height: 500px;
    margin: 0 auto;
    display: block;
  }
  .content {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1.title {
      font-weight: bold;
      color: #007191;
      margin-bottom: 1rem;
      font-size: 36px;
      @media only screen and (min-width: 426px) {
        font-size: 48px;
      }
    }
    .list-heading {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      .list-number {
        margin: 0;
        width: 48px;
        line-height: 48px;
        font-size: 24px;
        background: #007191;
        color: white;
        border-radius: 100%;
        font-weight: bold;
        margin-right: 1rem;
      }
      .list-text {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
      }
    }
    p {
      font-size: 18px;
      @media only screen and (min-width: 426px) {
        font-size: 20px;
      }
    }
  }
}


</style>
