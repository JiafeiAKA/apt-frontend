<template>
  <div class="w-full max-w-[1000px] mx-auto p-6 bg-white items-center">
    <!-- Header Section with Flag and Country Name -->
    <div class="flex flex-col items-center md:flex-row m-5">
      <!-- <img src="path-to-flag-image" alt="Country Flag" class="w-32 h-auto mr-6" /> -->
      <div class="w-[250px] h-[150px] md:w-[300px] md:h-[180px] bg-black md:mr-8 flex justify-center">Flag</div>
      <div class="md:text-left mt-5 md:mt-0">
        <h1 class="text-3xl font-bold mb-5">COUNTRY NAME</h1>
        <p>Total Medal: {{ medalSummary.total }}</p>
        <p>Gold: {{ medalSummary.gold }}</p>
        <p>Silver: {{ medalSummary.silver }}</p>
        <p>Bronze: {{ medalSummary.bronze }}</p>
      </div>
    </div>
  </div>
  <hr>

  <!-- Medal Detail Section -->
  <div class="w-full max-w-[1000px] mx-auto px-4 sm:px-10 items-center">
    <div>
      <h2 class="text-2xl font-semibold mb-4">MEDAL DETAIL</h2>
      <!-- Scrollable Table Container -->
      <div class="overflow-x-auto">
        <table class="w-full text-center border border-gray-300 min-w-[600px] ">
          <thead class="bg-gray-700 text-white">
            <tr>
              <th class="p-2 sm:p-4">Sport Name</th>
              <th class="p-2 sm:p-4">Gold</th>
              <th class="p-2 sm:p-4">Silver</th>
              <th class="p-2 sm:p-4">Bronze</th>
              <th class="p-2 sm:p-4">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sport in sportsDetails" :key="sport.name" class="border-t border-gray-300">
              <td class="p-2 sm:p-4 bg-white">{{ sport.name }}</td>
              <td class="p-2 sm:p-4 bg-white">{{ sport.gold }}</td>
              <td class="p-2 sm:p-4 bg-white">{{ sport.silver }}</td>
              <td class="p-2 sm:p-4 bg-white">{{ sport.bronze }}</td>
              <td class="p-2 sm:p-4 bg-white">{{ sport.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <hr>
    <!-- Comments and Cheer Section -->
  <div class="w-full max-w-[1000px] mx-auto p-12 bg-white">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Cheer Input Section -->
      <div class="w-full md:w-1/2">
        <h3 class="text-2xl font-semibold mb-4">CHEER YOUR ATHLETE HERE</h3>
        <textarea placeholder="Type your comment..." class="w-full h-24 border border-gray-300 rounded p-2 mb-4"></textarea>
        <button class="bg-[#26294D] font-cinzel font-semibold text-[#F3DA97] px-4 py-2 rounded">SUBMIT</button>
      </div>

      <!-- Comments Section -->
      <div class="w-full md:w-1/2 md:ml-10">
        <h3 class="text-2xl font-semibold mb-4">COMMENTS</h3>
        <ul>
          <li v-for="(comment, index) in comments" :key="index" class="flex items-start gap-2 mb-4">
            <div class="w-8 h-8 bg-blue-800 rounded-full flex-shrink-0"></div>
            <div>
              <p class="font-medium">{{ comment.username }}</p>
              <p class="bg-yellow-100 p-2 rounded">{{ comment.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SportDetailService from '@/services/SportDetailService';

// Mock data for medal summary
const medalSummary = ref({ gold: 4, silver: 2, bronze: 1, total: 7 });

// Mock data for sports details; replace with actual API data
const sportsDetails = ref([
  { name: "Archery", gold: 2, silver: 0, bronze: 0, total: 2 },
  { name: "Basketball", gold: 0, silver: 1, bronze: 0, total: 1 },
  { name: "Golf", gold: 0, silver: 0, bronze: 1, total: 1 },
  { name: "Fencing", gold: 2, silver: 1, bronze: 0, total: 3 }
]);

// Mock data for comments
const comments = ref([
  { username: "Username1", text: "Great job!" },
  { username: "Username2", text: "Keep it up!" },
  { username: "Username3", text: "Amazing performance!" },
  { username: "Username4", text: "So proud!" }
]);
</script>
