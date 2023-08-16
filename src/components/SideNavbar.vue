<template>
  <aside class="sidebar" :class="{ closed: isClosed }">
    <div class="logo">
    </div>
    <ul class="links">
      <li :class="{ active: activeTab === 'home' }">
        <span class="material-icons">home</span>
        <a href="#" @click="setActiveTab('home')">Home</a>
      </li>
<br><br>
  
  <li>
    <span class="material-icons">settings</span>
    <a href="#">Settings</a>
  </li>

  <br><br>
  <li class="logout-link">
    <span class="material-icons">logout</span>
    <a href="#">Logout</a>
  </li>
      
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeTab: null,
      isClosed: false
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>
<style scoped>
.sidebar {
  position: fixed;
  bottom: -20%;
  left: 100px;
  margin-left: -200;
  transform: translateY(-50%);
  width: 40px;
  height: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 9px;
  background: #FFF;
  backdrop-filter: blur(17px);
  --webkit-backdrop-filter: blur(17px);
  border-right: 1px solid rgb(255, 255, 255);
  transition: width 0.6s ease;
}

.sidebar:hover {
  width: 260px;
}

.sidebar .logo {
  color: #000;
  display: flex;
  align-items: center;
  padding: 25px 10px 15px;
}

.logo img {
  width: 43px;
  border-radius: 50%;
}

.logo h2 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-left: 15px;
  display: none;
}

.sidebar:hover .logo h2 {
  display: block;
}

.sidebar .links {
  list-style: none;
  margin-top: 20px;
  overflow-y: auto;
  scrollbar-width: none;
  height: calc(100% - 140px);
}

.sidebar .links::-webkit-scrollbar {
  display: none;
}

.links li {
  display: flex;
  border-radius: 4px;
  align-items: center;
}

.links li:hover {
  cursor: pointer;
  background: linear-gradient(99deg, rgba(128, 0, 128, 0.13) 24.29%, rgba(128, 0, 128, 0.17) 58.64%, rgba(128, 0, 128, 0.17) 59.67%);
}

.links h4 {
  color: #222;
  font-weight: 500;
  display: none;
  margin-bottom: 10px;
}

.sidebar:hover .links h4 {
  display: block;
}

.links hr {
  margin: 10px 8px;
  border: 1px solid #4c4c4c;
}

.sidebar:hover .links hr {
  border-color: transparent;
}

.links li span {
  padding: 12px 10px;
}

.links li a {
  padding: 10px;
  color: #000;
  display: none;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
}

.sidebar:hover .links li a {
  display: block;
}

.material-icons{
  margin-left: -37px;
  color: purple;
}


</style>
