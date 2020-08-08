<template>
  <div id="products">
    <!-- PRODUCTS PAGE STARTS -->
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <div class="container">          
          <h1>Title goes here</h1>
          <h2>Subtitle</h2>
          <img src="@/assets/products/cycle.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1>Title goes here</h1>
          <h2>Subtitle</h2>
          <img src="@/assets/products/hume-engine.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1>Title goes here</h1>
          <h2>Subtitle</h2>
          <img src="@/assets/products/value-stock.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1>Title goes here</h1>
          <h2>Subtitle</h2>
          <img src="@/assets/products/intensity-maps.png" alt="">
        </div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <h1>Title goes here</h1>
          <h2>Subtitle</h2>
          <img src="@/assets/products/story-engine.png" alt="">
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
        pageDots: false,
        wrapAround: false
        
        // any options from Flickity can be used
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
  min-height: calc(100% - 52px);
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.carousel-cell {
  width: 100%;
  min-height: calc(100vh - 52px);
}
</style>

