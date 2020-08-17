<template>
  <div id="app">
    <!-- NAVBAR STARTS -->
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item navbar-img" >
          <img id="navbarLogo" src=".\assets\logo2.png">
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <router-link to="/products" class="navbar-item">
            products
          </router-link>

          <!-- <router-link to="/about" class="navbar-item">
            pricing
          </router-link> -->

          <router-link to="/clients" class="navbar-item">
            clients
          </router-link>

          <router-link to="/contact" class="navbar-item">
            get in touch
          </router-link>
        </div>
      </div>
      </div>
    </nav>
    <!-- NAVBAR ENDS -->
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          © 2020 HUME.WORKS. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      show: false
    }
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/fsu6rsx.css");

// GLOBAL
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: open-sans, sans-serif;
  height: 100%;
  // overflow: scroll;
}
#app {
  height: 100%;
  background: #fefefe;
}

// NAVBAR
.navbar {
  background: #fefefe;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  .navbar-item {
    text-transform: uppercase;
    img {
      max-height: unset !important;
      height: 3rem;
    }
    &:hover {
      background: none;
      color: #007191;
      font-weight: bold;
    }
  }
  .router-link-exact-active.router-link-active {
    background: none;
    color: #007191;
    font-weight: bold;
  }
}

.footer {
  padding-top: 1rem;
  padding-bottom: .5rem;
  background: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
