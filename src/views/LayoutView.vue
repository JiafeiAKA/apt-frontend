<template>
    <div class="px-4 sm:px-8 space-y-6">
      <!-- Header with Navigation Buttons -->
      <div class="p-4 rounded bg-white text-blue-500 shadow-md">
        <h2 class="text-xl sm:text-2xl font-bold">Country Information</h2>
        <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4">
          <button
            :class="{ active: currentTab === 'Country' }"
            class="bg-blue-500 text-white hover:bg-blue-100 rounded px-4 py-2 transition-colors duration-200"
            @click="currentTab = 'Country'"
          >
            Detail
          </button>
          <button
            :class="{ active: currentTab === 'Sport' }"
            class="bg-blue-500 text-white hover:bg-blue-100 rounded px-4 py-2 transition-colors duration-200"
            @click="currentTab = 'Sport'"
          >
            Sports
          </button>
        </div>
      </div>
  
      <!-- Dynamic Content Based on Tab Selection -->
      <div v-if="currentTab === 'Country'">
        <!-- Country Detail Content -->
        <div class="country-detail">
          <img src="path-to-flag-image" alt="Country Flag" />
          <h2>COUNTRY NAME</h2>
          <p>Capital City: ...</p>
          <p>Currency: ...</p>
          <p>Continent: ...</p>
          <p>Population: ...</p>
          <p>Official Languages: ...</p>
          <hr />
          <p>
            [Country Name] is a nation located in [Continent], with a population
            of approximately [Population]. The capital city is [Capital City],
            serving as the political and cultural hub...
          </p>
        </div>
      </div>
  
      <div v-if="currentTab === 'Sport'">
        <!-- Sport Detail Content -->
        <div class="sport-detail">
          <img src="path-to-flag-image" alt="Country Flag" />
          <h2>COUNTRY NAME</h2>
          <p>Total Medals:</p>
          <ul>
            <li>Gold: ...</li>
            <li>Silver: ...</li>
            <li>Bronze: ...</li>
          </ul>
          <hr />
          <h3>Medal Detail</h3>
          <table>
            <thead>
              <tr>
                <th>Sport Name</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Archery</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td>2</td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </table>
          <div class="comment-section">
            <h3>Cheer Your Athlete Here</h3>
            <textarea placeholder="Type your comment..."></textarea>
            <button>Submit</button>
            <h3>Comments</h3>
            <ul>
              <li>Username1: Great job!</li>
              <li>Username2: Keep it up!</li>
              <!-- Add more comments as needed -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Track the current tab state
  const currentTab = ref('Country')  // Default to the 'Country' tab
  </script>
  
  <style scoped>
  .active {
    background-color: #f0c040;
    color: white;
  }
  
  .country-detail, .sport-detail {
    padding: 20px;
  }
  
  .comment-section {
    margin-top: 20px;
  }
  
  textarea {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  table, th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f8f8f8;
  }
  </style>
  