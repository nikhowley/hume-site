<template>
  <div id="app">
    <!-- NAVBAR STARTS -->
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item navbar-img" >
          <img id="navbarLogo" src=".\assets\logo2.png">
        </router-link>
        <a role="button" @click="toggleNav" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active': nav }">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <router-link to="/clients" class="navbar-item">
            Clients
          </router-link>
          <router-link to="/contact" class="navbar-item">
            Contact
          </router-link>
        </div>
      </div>
      </div>
    </nav>
    <!-- NAVBAR ENDS -->
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>© 2020 HUME.WORKS. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      nav: false
    }
  },
  components: {},
  methods: {
    toggleNav: function () {
      this.nav = !this.nav
    }
  }
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
}
#app {
  height: 100%;
  // background: #fefefe;
}

// NAVBAR
.navbar-menu {
  z-index: 1;
  box-shadow: none;
}
.navbar {
  background: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  .navbar-menu {
    box-shadow: none;
    @media only screen and (max-width: 1023px) {
      padding: 0;
    }
  }
  .navbar-item {
    font-weight: bold;
    font-size: 18px;
    &:hover {
      background: none;
      color: #007191;
    }
    @media only screen and (max-width: 1023px) {
      border-top: 1px solid #eeeeee;
      text-align: center;
    }
    img {
      max-height: unset !important;
      height: 3rem;
    }
  }
  a.navbar-burger {
    height: 64px;
    span {
      height: 3px;
      width: 18px;
    }
    span:nth-child(1) {
      top: calc(50% - 8px);
    }
    span:nth-child(2) {
      top: calc(50% - 2px);
    }
    span:nth-child(3) {
      top: calc(50% + 4px);
    }
    &:hover {
      background: none;
      color: #007191;
    }
  }
  .router-link-exact-active.router-link-active {
    background: none;
    color: #007191;
    font-weight: bold;
  }
}

  .footer {
  padding: 0;
  margin-bottom: 1rem;
  font-size: 14px;
  background: white;
  border-top: none;
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
