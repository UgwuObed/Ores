<template>
    <div class="landing-page">
        <div class="navigation fade-in-left">
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
                <router-link to="/register" class="signup-button"><button class="signup-button">Sign Up</button></router-link>
                <div class="button-space"></div>
                
                <router-link to="/login"><button class="login-button">Login</button></router-link>
              </div>
            </div>
            <div class="center-left" :class="{ 'ease-in': animate }">
              <h2 class="ore-text fade-in-left">
                <span class="ore-highlight">Ore’s</span><br />
                Health Place
              </h2>
              <p class="descrip fade-in-left">Get fresh and tasty continental and intercontinental <br>recipes and how to make them, check and calculate <br>their <span class="calo">calorie</span> count </p>
            </div>
            <div class="learn fade-in-up" :class="{ 'ease-in': animate }">
              <button class="learn-more">Learn More</button>
            </div>
            <ul class="thumb" :class="{ 'ease-in': animate }">
              <li><a href="#"><img src="@/assets/pg1.png"></a></li>
              <li><a href="#"><img src="@/assets/pg2.png"></a></li>
              <li><a href="#"><img src="@/assets/pg3.png"></a></li>
            </ul>
      <router-view />
      
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
    data() {
    return {
      animate: false,
    };
  },
  mounted() {

    this.animate = true;
  },
  };
  </script>
  
  <style scoped>
  @import '@/LandingPage.css';

.ease-in {
  transition: opacity 0.5s ease-in, transform 0.5s ease-in;
}

.fade-in-left {
  animation: fadeInLeft 1s ease-in-out;
}
  </style>


  