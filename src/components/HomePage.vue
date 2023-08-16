<template>
      <HeaderWeb />
    <SearchBar />
  <div class="home-page">

    <div class="content">
      <SideNavbar />
    </div>
    <h1>Popular Recipes</h1>
    <div class="card-grid">
      <!-- First set of cards -->
      <div
        v-for="(card, index) in cards"
        :key="'set1-' + index"
        class="card"
        @mouseover="elevateCard(index)"
        @mouseleave="resetCardElevation(index)"
        @click="showCardPopup(index)"
      >
        <img :src="card.image" alt="Card Image" />
        <h3>{{ card.title }}</h3>
      </div>
    </div>

    <h1>Popular Restaurants</h1>
    <div class="card-grid">
      
      <div
        v-for="(card, index) in secondSetCards"
        :key="'set2-' + index"
        class="card"
        @mouseover="elevateCard(index)"
        @mouseleave="resetCardElevation(index)"
        @click="showCardPopup(index + cards.length)"
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
        <p>{{ allCards[selectedCardIndex].description }}</p>
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
      cards: [
        {
          title: "Second Card 2",
          description: "Description for Second Card 2",
          image: "second-card2.jpg",
        },
        {
          title: "Card 2",
          description: "Description for Card 2",
          image: "card2.jpg",
        },
        
        {
          title: "Second Card 2",
          description: "Description for Second Card 2",
          image: "second-card2.jpg",
        },
        {
          title: "Second Card 2",
          description: "Description for Second Card 2",
          image: "second-card2.jpg",
        },
      ],
      secondSetCards: [
        {
          title: "Second Card 1",
          description: "Description for Second Card 1",
          image: "second-card1.jpg",
        },
        {
          title: "Second Card 2",
          description: "Description for Second Card 2",
          image: "second-card2.jpg",
        },
       
        {
          title: "Second Card 2",
          description: "Description for Second Card 2",
          image: "second-card2.jpg",
        },

        {
          title: "Second Card 2",
          description: "Description for Second Card 2",
          image: "second-card2.jpg",
        },
      ],
      selectedCardIndex: null,
    };
  },
  computed: {
    allCards() {
      return [...this.cards, ...this.secondSetCards];
    },
  },
  methods: {
    elevateCard(index) {
      this.allCards[index].elevated = true;
    },
    resetCardElevation(index) {
      this.allCards[index].elevated = false;
    },
    showCardPopup(index) {
      this.selectedCardIndex = index;
    },
    closeCardPopup() {
      this.selectedCardIndex = null;
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
  