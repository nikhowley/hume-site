<template>
  <div id="home">
    <!-- HERO STARTS -->
    <section class="hero is-primary">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/hero2.mp4" type="video/mp4">
      </video>
    </section>
    <!-- HERO ENDS -->
    <!-- UNCERTAINTY BLURB STARTS -->
    <div class="section uncertainty" id="uncertainty">
      <div class="container">
        <div class="content has-text-centered">
          <h1 class="title is-spaced">Uncertainty?</h1>
          <p><b>The best way to understand the future is to create it.</b></p>
          <p>Hume.Works recasts shared human story as a trust-based intelligence tool, so you can respond to uncertainty confidently, knowing your audience, your trust network, is with you.</p>
          <p>Our mantra? Know where your story’s going next.</p>
          <p><b>Trust Based Design solutions.<br>Conquer uncertainty.</b></p>
        </div>
      </div>
    </div>
    <!-- TRUST BLURB ENDS -->
    <section class="tbd">
      <div class="container">
        <img src="@/assets/graphic.png" alt="">
      </div>
    </section>
    <div class="section offering">
      <div class="container">
        <div class="content has-text-centered">
          <h1 class="title is-spaced">How HUME works</h1>
          <p><b>Three easy steps. Three powerful engines.</b></p>
          <div class="columns"></div>
          <div class="list-heading">
            <h1 class="list-number">1</h1>
            <h1 class="list-text left">Listen.</h1>
          </div>
          <p>First we listen: listen to the human stories of your audiences.<br>Their stories hold deep intelligence and insights into the emotional language and cultural values that matter.<br>They reveal the trust gaps. And trust nodes.</p>
          <p>Then, we analyze and quantify this intelligence.<br>Accurately. In real time. At scale. Reliably. Persistently.</p>
          <p>This is the analytic engine.</p>
          <div class="list-heading">
            <h1 class="list-number">2</h1>
            <h1 class="list-text">Co-create.</h1>
          </div>
          <p>Share this intelligence with your audiences, and with them, create highly targeted, trusted stories and future-state scenarios.<br>You honour your audience as truth tellers, even as you’re learning all you need to know to tackle uncertainty, knowing what’s coming next.<br>Because your audience has told you so.</p>
          <p>This is the story engine.</p>
          <div class="list-heading">
            <h1 class="list-number">3</h1>
            <h1 class="list-text">Network.</h1>
          </div>
          <p>Your audiences share what they’ve created with you. Scaling human trust networks even as they share your stories across their networks.<br>You scale networks and solutions built on trust, co-created with the people who matter most to you.<br>Human story. Bringing us together.</p>
          <p>This is the trust network engine.</p>
          <p><b>Trust Based Design. Networking trust.<br>It’s where your story’s going next.</b></p>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        Photos with thanks to Mitchell Griest on Unspalsh; Tyler Wang on Pexels; Bruno Felix on Pexels and Callum T on Unsplash.
      </div>
    </footer>
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
  .button {
    // margin-top: 1rem;
    border: none;
    &:hover {
      color:  #007191;
    }
  }
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: black;
    margin-top: 64px;
    max-height: 768px;
    overflow: hidden;
  }
  img{
    max-height: 500px;
    margin: 0 auto;
    display: block;
  }
  .content {
    // padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 426px) {
      margin-top:3rem;
      // padding: 3rem 0;
    }
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
  .tbd {
    padding: 0 1.5rem;
  }
  footer {
    font-size: 14px;
    text-align: center;
    margin-bottom: .5rem;
  }
}


</style>
