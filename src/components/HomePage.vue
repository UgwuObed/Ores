<template>
  <div>
    <HeaderWeb />
    <SearchBar @search-results="fetchSearchResults" />
    <div class="home-page">
      <div class="content">
        <SideNavbar />
      </div>
      <h1>Search Results</h1>
      <div class="card-grid">
        <div
          v-for="(card, index) in cards"
          :key="'search-' + index"
          class="card"
          @click="showCardPopup(index)"
        >
          <img :src="card.image" alt="Card Image" />
          <h3>{{ card.title }}</h3>
        </div>
      </div>
      <div class="card-popup" v-if="selectedCardIndex !== null">
        <div class="card-popup-content">
          <button class="cancel-button" @click="closeCardPopup">
            <span class="material-icons">cancel</span>
          </button>
          <h2>{{ allCards[selectedCardIndex].title }}</h2>
          <p>Calories: {{ allCards[selectedCardIndex].calories }}</p>
          <p>Yield: {{ allCards[selectedCardIndex].yield }}</p>
          <img :src="allCards[selectedCardIndex].image" alt="Recipe Image" @click="showDetailsPopup" />
        </div>
      </div>
      <div class="details-popup" v-if="detailsPopupOpen">
        <div class="details-popup-content">
          <button class="cancel-button" @click="closeDetailsPopup">
            <span class="material-icons">cancel</span>
          </button>
          <h2>{{ allCards[selectedCardIndex].title }}</h2>
          <p>Calories: {{ allCards[selectedCardIndex].calories }}</p>
          <p>Yield: {{ allCards[selectedCardIndex].yield }}</p>
          <!-- Add more details here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import SearchBar from "@/components/SearchBar.vue";
import SideNavbar from "@/components/SideNavbar.vue";

export default {
  components: {
    HeaderWeb,
    SearchBar,
    SideNavbar,
  },
  data() {
    return {
      cards: [],
      selectedCardIndex: null,
      detailsPopupOpen: false,
    };
  },
  methods: {
    showCardPopup(index) {
      this.selectedCardIndex = index;
      this.detailsPopupOpen = false; // Close the details popup when showing a new card popup
    },
    closeCardPopup() {
      this.selectedCardIndex = null;
    },
    showDetailsPopup() {
      this.detailsPopupOpen = true;
    },
    closeDetailsPopup() {
      this.detailsPopupOpen = false;
    },
    fetchSearchResults(results) {
      // This method is called when search results are received
      this.updateCards(results);
    },
    updateCards(results) {
      if (Array.isArray(results)) {
        this.cards = results.map(card => ({
          title: card.title,
          image: card.image_url,
          calories: card.calories,
          yield: card.yield,
        }));
      } else if (typeof results === 'object') {
        this.cards = [
          {
            title: results.title,
            image: results.image_url,
            calories: results.calories,
            yield: results.yield,
          },
        ];
      }
    },
  },
  computed: {
    allCards() {
      return this.cards;
    },
  },
};
</script>



  <style scoped>

  .home-page {
    padding: 40px;
    margin-top: -60px;
    margin-left: 190px;
    
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 40px;
  }
  
  .card {
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 15px;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    height: 140px;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  
  .card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .card h3 {
    margin-top: 10px;
  }
  
  .card-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card-popup-content {
    background-color: white;
    padding: 90px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .cancel-button {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute; 
    top: 10px;
    right: 10px; 
  }
  
  .cancel-button .material-icons {
    font-size: 24px;
  }
  </style>
  