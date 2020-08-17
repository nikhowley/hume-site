<template>
  <div id="home">
    <!-- HERO STARTS -->
    <section class="hero is-primary is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">
            Networking Trust.
          </h1>
        </div>
      </div>
    </section>
    <!-- HERO ENDS -->
    <!-- TRUST BLURB STARTS -->
    <div class="section trust">
      <div class="container">
        <div class="content has-text-centered">
          <h1 class="title is-1">Trust changes everything.</h1>
          <p>
            With trust your audiences follow you, give you permission to operate and work with you to co-create value.
            <br>Trust creates human connections. Improves performance. Strengthens loyalty. And yes, generates revenue. 
          </p>
          <p>
            Trust matters more than ever before. Because when survival is on everyone's mind and uncertainty the only known… <br>TRUST IS THE DEFINING BEACON OF POSSIBILITIES.
          </p>
          <p>
            Trust begins by listening to the stories people are telling. Stories that unearth the language and values that are meaningful. Stories that reveal the TRUST GAPS. And that can shape the conversation and cultivate TRUST NETWORKS.
          </p>
          <p>
            HUME.WORKS quantifies the intelligence that emerges accurately, at speed and at scale. RELIABLY. PERSISTENTLY. PREDICTIVELY. 
          </p>
          <p>
            It’s  the technology platform that ensures you CO-CREATE TRUST. It provides the tools to shape the stories with your audiences. Growing trust networks that constantly generate a following. Networks that are responsive and enduring. Communications that are adaptive and rapid. Accurate and impactful. 
          </p>
          <p>
            BECAUSE THEY ARE CREATED WITH YOUR AUDIENCES, IN REAL TIME.
          </p>
          <!-- <div class="button-container">
            <router-link to="/products" class="button">View product offering</router-link>
          </div> -->
        </div>
      </div>
    </div>
    <!-- TRUST BLURB ENDS -->
    <!-- OFFERING STARTS -->
    <div class="section offering">
      <h1 class="title is-1 has-text-centered">How HUME.WORKS</h1>
      <div class="container content">
        <h2 class="subtitle is-4">TOOLS – CREATE STORIES THAT PENETRATE</h2>
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
        <h2 class="subtitle is-4">ANALYTICS – VALIDATED QUANTIFIED HUMAN INSIGHTS</h2>
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
        <h2 class="subtitle is-4">IMPACT – MEASURE AND GROW TRUST</h2>
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
    </div>
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
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  .hero {
    background: #007191;
    h1 {
      color: #fefefe;
      font-weight: bold;
    }
  }
  .trust {
    border-bottom: 1px solid #eee;
    .content {
      padding: 3rem;    
      .title, .subtitle{
        font-weight: bold;
        color: #007191;
      }
      h2.subtitle {
        margin-bottom: 3rem;
      }
    }
    .button { 
      margin: 1.5rem;
      background: #007191;
      color: #fefefe;
    }
  }
  .offering {
    padding: 5rem 0;
    // background: #f3f3f3;
    .title.is-1 {
      margin-bottom: 3rem;
      font-weight: bold;
      color: #007191;
    }
    h2 {
      margin-bottom: .5rem;
      color: #007191; 
    }
    .columns {
      padding-bottom: 3rem;
      margin-bottom: 3rem;
      padding-top: 1rem;
      border-bottom: 1px solid #eee;
      &:last-of-type {
        margin-bottom: 0;
        border-bottom: none;
      }
    }
    .card {
      border-radius: .25rem;
      height: 100%;
      .card-content {
        padding: 5rem 1rem;
      }
    }
  }
}


</style>
