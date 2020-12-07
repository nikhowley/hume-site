<template>
  <div id="products">
    <!-- PRODUCTS PAGE STARTS -->
    <div class="modal" v-bind:class="{ 'is-active': modal }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Request a live demo</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <p>
            Get in touch with Brendan Howley directly by <a href="mailto: brendan@hume.works">email</a> or <a href="tel: 2268801449">phone</a>
          </p>
        </section>
        <!-- <footer class="modal-card-foot">
          <a href="">
            <button class="button send-button">Send message</button>
          </a>
        </footer> -->
      </div>
    </div>
    <section class="cta">
      <div class="container">
        <div class="content has-text-centered">
          <button class="button is-large" @click="toggleModal">REQUEST A LIVE DEMO <i class="fas fa-arrow-right"></i></button>
          <p class="or">or</p>
          <h1 class="title">View Case Study Demo:</h1>
          <p class="blurb">
            We asked credit card specialists at a big North American  bank, charged with rolling out a new credit card product, to tell us a story:
          </p>
          <p class="blurb">Why do you do what you do?</p>
          <p class="blurb">In their own words, three brief extracts:</p>
          <div class="iframe-frame">
            <div class="iframe-container">
              <iframe class="responsive-iframe" src="https://player.vimeo.com/video/471795270" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            <router-link to="/contact">
              <button class="button is-large products-button">GET IN TOUCH<i class="fas fa-arrow-right"></i></button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="content">
          Photos with thanks to Alex Moiseev on Unsplash; BBH Singapore on Unsplash; Harris Memovic on Unsplash; Jakayla Toney on Unsplash; Jurica Koletic on Unsplash; Jörge Graphiste on Pexels.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /srcs

export default {
  name: "Products",
  data: () => {
    return {
      modal: false
    }
  },
  methods: {
    toggleModal: function () {
      this.modal = !this.modal
    },
    closeModal: function () {
      this.modal = false
    }
  }
};
</script>

<style lang="scss">
#products {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 37px);
  padding-top: 64px;
  .modal-card-title {
    font-weight: bold;
    color: #007191;
  }
  .modal-card-body{
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    a{
      color: #007191; 
      &:hover {
        color: #007191; 
      }
    }
  } 
  .send-button {
    background: #007191;
    border: 0;
    color: white;
    font-size: 16px;
    border-radius: .5rem;
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
  .blurb {
    font-size: 18px;
    margin-bottom: 1rem;
    font-weight: bold;
    &:last-of-type {
      margin-bottom: 3rem;
    }
    @media only screen and (min-width: 426px) {
      font-size: 20px;
    }
  }
  .or {
    margin-top: 1rem;
    margin-bottom: .8rem;
    font-size: 18px;
    @media only screen and (min-width: 426px) {
      font-size: 20px;
    }
  }
  .cta {
    margin-top: 3rem;
    padding: 0 1.5rem;
    .button {
      background: #007191;
      border: 0;
      color: white;
      font-size: 16px;
      border-radius: .5rem;
      i {
        margin-left: .5rem;
      }
      &:hover {
        color: white;
      }
    }
    iframe {
      width: 100%;
    }
  }
  .iframe-frame {
    max-width: 1024px;
    margin: 0 auto;
    padding-bottom: 3rem;
  }
  .iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .products-button {
    margin-top: 3rem;
  }
  footer {
    bottom: 0px;
    width: 100%; 
    font-size: 14px;
    text-align: center;
    margin-bottom: .5rem;
    padding: 0 1rem;
  }
}
</style>

