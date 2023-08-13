<template>
    <div class="landing-page">
        <div class="logo">
            <img src="@/assets/logo1.png" alt="Your Logo">
          </div>
          <div class="ore-text">
            <p>
              <span class="ore-letter">O</span>
              <span class="ore-letter">r</span>
              <span class="ore-letter">e</span>
              <span class="ore-letter">'</span>
              <span class="ore-letter">s</span>
            </p>
          </div>
          <div class="navbar">
            <div class="search-bar">
                <input type="text" placeholder="Search Recipe..">
                <i class="fas fa-search search-icon"></i>
              </div>
          </div>
          <div class="nav-links">
            <router-link to="/about" class="nav-link">About Us</router-link>
            <span class="link-space"></span>
            <router-link to="/contact" class="nav-link">Contact Us</router-link>
              </div>
      <router-view />
      
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style scoped>
  @import '@/LandingPage.css';
  </style>


  