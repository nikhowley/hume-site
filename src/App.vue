<template>
  <div id="app">
    <!-- NAVBAR STARTS -->
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item navbar-img" >
          <img id="navbarLogo" src=".\assets\logo-transparent.png">
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

          <router-link to="/about" class="navbar-item">
            pricing
          </router-link>

          <router-link to="/about" class="navbar-item">
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
  </div>
</template>

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
  overflow: hidden;
}
#app {
  height: 100%;
}

// NAVBAR
.navbar {
  // padding: .5rem 0;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  .navbar-img {
    padding-left: 0;
    @media only screen and (max-width: 1080px) {
      padding-left: 1rem;
    }
  } 
  .navbar-item {
    text-transform: uppercase;
    #navbarLogo {
      width: 250px;
      max-height: 100px;
    }
  }
}



</style>
