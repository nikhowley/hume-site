<template>
  <div id="products">
    <!-- PRODUCTS PAGE STARTS -->
    <section class="cta">
      <div class="container">
        <div class="content has-text-centered">
          <button class="button is-large">REQUEST A LIVE DEMO</button>
          <p>or</p>
          <h1 class="title">View Case Study Demo:</h1>
          <iframe src="https://player.vimeo.com/video/471220323" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        Photos with thanks to Alex Moiseev on Unsplash; BBH Singapore on Unsplash; Harris Memovic on Unsplash; Jakayla Toney on Unsplash; Jurica Koletic on Unsplash; Jörge Graphiste on Pexels.
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /srcs

export default {
  name: "Products"
};
</script>

<style lang="scss">
#products {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh);
  padding-top: 64px;
  footer {
    position: absolute; 
    bottom: 0px;
    width: 100%; 
    font-size: 14px;
    text-align: center;
    margin-bottom: .5rem;
  }
  .cta {
    margin-top: 3rem;
    .button {
    background: #007191;
    border: 0;
    color: white;
    font-size: 16px;
    border-radius: 34px;
    &:hover {
      color: white;
    }
  }
  p { 
    margin: 1rem 0;
  }
  h1.title {
      font-weight: bold;
      color: #007191;
      margin-bottom: 1rem;
      margin-top: 0;
      font-size: 36px;
      @media only screen and (min-width: 426px) {
        font-size: 48px;
      }
    }
}
}
</style>

