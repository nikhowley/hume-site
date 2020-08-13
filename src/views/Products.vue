<template>
  <div id="products">
    <!-- PRODUCTS PAGE STARTS -->
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <div class="container">          
          <h1 class="title">HUMEoverview</h1>
          <h2 class="subtitle">Do we need an "overview" slide? If we do, should it be on the homepage? This whole <i>page</i> (hume.works/products) kind of an overview</h2>
          <img src="@/assets/products/cycle.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">HUMEengine</h1>
          <h2 class="subtitle">Each slide should have a subtitle</h2>
          <img src="@/assets/products/hume-engine.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">IMAGEmotives</h1>
          <h2 class="subtitle">Select your most resonant images</h2>
          <img src="@/assets/products/image-motives.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">VALUEstock</h1>
          <h2 class="subtitle">Identify the language and values that are shaping your conversations</h2>
          <img src="@/assets/products/value-stock.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">INTESITYmaps</h1>
          <h2 class="subtitle">Evaluate the salience and incidence of your language and values</h2>
          <img src="@/assets/products/intensity-maps.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">STORYengine</h1>
          <h2 class="subtitle">Each slide should have a subtitle</h2>
          <img src="@/assets/products/story-engine.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">TRUSTgaps</h1>
          <h2 class="subtitle">See the peaks and gaps in your audience's trust</h2>
          <img src="@/assets/products/trust-gaps.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">TRUSTnetworks</h1>
          <h2 class="subtitle">Map which values create your trust networks</h2>
          <img src="@/assets/products/trust-networks.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">SCENARIOspace</h1>
          <h2 class="subtitle">Understand your future possibilities</h2>
          <img src="@/assets/products/scenario-space.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">TRUSTequity</h1>
          <h2 class="subtitle">See your trust assets and weaknesses</h2>
          <img src="@/assets/products/trust-equity.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">HUMEdashboard</h1>
          <h2 class="subtitle">This slide feels superfluous to me, thoughts?</h2>
          <img src="@/assets/products/scenario-space.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1 class="title">HUMEoffering</h1>
          <h2 class="subtitle">This should go on the homepage, thoughts?</h2>
          <img src="@/assets/products/hume-offering.png" alt="">
        </div>
      </div>
    </flickity>
    <!-- <div class="section">
      <div class="container">

      </div>
    </div> -->
    <!-- PRODUCTS PAGE ENDS -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Flickity from 'vue-flickity';


export default {
  name: "Products",
  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        // autoPlay: 3000,
        // pauseAutoPlayOnHover: false
      }
    }
  },
  components: {
    Flickity
  }
};
</script>

<style lang="scss">
#products {
  // min-height: 100%;
  // margin-top: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.carousel-cell {
  width: 100%;
  min-height: calc(100vh - 76px);
  // overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    h1 {
      max-width: 768px;
      font-weight: bold;
      text-align: center;
      color: #007191;
    }
    h2 {
      padding-top: .5rem;
      max-width: 768px;
      text-align: center;
      margin-bottom: 2rem;
    }
    img {
      width: 768px;
    }
  }
}
.flickity-page-dots {
  bottom: 16px;
}
</style>

