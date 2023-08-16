<template>
  <header class="app-header">
    <div class="logo"><img src="@/assets/logo1.png" alt="Your Logo"></div>
    <div class="user-info">
      <div class="user-name">John Doe</div>
      <div class="user-dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown">
        <span class="material-icons">account_circle</span>
        <div class="dropdown-content" v-show="isDropdownVisible" @mouseover="showDropdown" @mouseleave="hideDropdown">
          <div class="dropdown-item" @click="goToProfile">Profile</div>
          <div class="dropdown-item" @click="logout">Logout</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-name {
  margin-right: 20px;
}

.user-dropdown {
  position: relative;
  cursor: pointer;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.dropdown-content {
  position: absolute;
  top: calc(100% + 0px); 
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: none;
  z-index: 1; 
}

.user-dropdown:hover .dropdown-content,
.dropdown-content:hover {
  display: block;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: linear-gradient(99deg, rgba(128, 0, 128, 0.13) 24.29%, rgba(128, 0, 128, 0.17) 58.64%, rgba(128, 0, 128, 0.17) 59.67%);
}
</style>

<script>
export default {
  name: 'HeaderWeb',
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    goToProfile() {
      
    },
    logout() {
      
    },
  },
  data() {
    return {
      isDropdownVisible: false,
    };
  },
};
</script>
