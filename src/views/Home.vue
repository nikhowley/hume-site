<template>
  <div id="home">
    <!-- HOMEPAGE STARTS -->
    <div class="section">
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
          <h2 class="subtitle is-3">HUME.WORKS: Networking Trust</h2>
          <!-- <img src="@/assets/products/cycle.png" alt=""> -->
          <img class="img-offering" src="@/assets/products/hume-offering.png" alt="">
          <div class="button-container">
            <router-link to="/products" class="button">view product offering</router-link>
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
  min-height: calc(100%);
  margin-top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1.title, h2.subtitle{
    font-weight: bold;
    color: #007191;
  }
  h2.subtitle {
    margin-bottom: 3rem;
  }
  .img-offering {
    max-width: 940px;
    margin-bottom: 2rem;
  }
  .button { 
    background: #007191;
    color: white;
  }
}
// .button-container {
//   width: 100%;
//   display: flex;
//   justify-content: center;
// }

</style>
