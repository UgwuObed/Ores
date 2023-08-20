<template>
  <div class="search-bar">
    <input v-model="searchQuery" type="text" placeholder="Search" />
    <button @click="searchRecipes">Search</button>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

input[type="text"] {
  padding: 8px;
  border-radius: 9px;
  border: 1px solid #800080;
  background: rgba(218, 180, 218, 0.52);
  height: 20px;
  width: 300px;
  
}

button {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #800080;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    async searchRecipes() {
      try {
        const response = await axios.get(`http://localhost:8000/api/recipes/search?q=${this.searchQuery}`);
        const results = response.data; // Assuming the API response is an array of recipes
        this.$emit('search-results', results); // Emit an event with the fetched data
      } catch (error) {
        console.error('Error searching recipes:', error);
        // Handle the error
      }
    },
  },
};
</script>

  
