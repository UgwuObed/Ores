<template>
  <div class="search-bar">
    <input type="text" placeholder="Search" />
    <button>Search</button>
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
  export default {
    name: 'SearchBar', 
    
  };
  </script>
  
