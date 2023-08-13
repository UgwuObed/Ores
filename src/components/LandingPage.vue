<template>
    <div class="landing-page">
        <div class="navigation">
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
            <router-link to="/contact" class="nav-link1">Contact</router-link>
              </div>
              <div class="user-buttons">
                <button class="signup-button">Sign Up</button>
                <div class="button-space"></div>
                <button class="login-button">Login</button>
              </div>
            </div>
              <div class="center-left">
                <h2 class="ore-text">
                  <span class="ore-highlight">Ore’s</span><br />
                  Health Place
                </h2>
                <p class="descrip">Get fresh and tasty continental and intercontinental <br>recipes and how to make them, check and calculate <br>their <span class="calo">calorie</span> count </p>
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


  