<template>
    <img src="..//assets/olympic-games-logo.png" alt="" class="w-24 mt-[80px] mx-auto">
    <h1 class="font-semibold text-[28px] text-center">MEDAL LIST</h1>
    <div class="flex flex-row justify-center gap-3 mt-2 mb-8">
        <div class="flex mt-2">
            <label for="pageSizeSpinner">Country Per Page </label>
            <select id="pageSizeSpinner" v-model="itemsPerPage" class="bg-[#F3DA97] w-[40px] rounded ml-2" @change="fetchItemPerPage">
                <option v-for="option in itemsPerPageOptions" :key="option" :value="option">{{ option }}</option>
            </select>
        </div>
        <div class="flex mt-2">
            <label for="yearSpinner">Year: </label>
            <select id="yearSpinner" v-model="selectedYear" class="bg-[#F3DA97] w-[60px] rounded ml-2" @change="fetchYear">
                <option v-for="year in yearList" :key="year" :value="year">{{ year }}</option>
            </select>
        </div>
    </div>
    <div :class="['bg-white shadow-sm flex justify-center items-center transition-all duration-300 sticky top-16', shrinkHeader ? 'p-6' : 'p-6']">
        <div class="flex-none w-16 text-sm md:text-base md:w-[100px]">Order</div>
        <div class="w-48 text-sm md:w-[280px] md:text-base md:pr-5">Name of Countries</div>
        <div class="flex w-52 justify-evenly pr-3 md:w-[330px] md:pr-7 md:justify-between">
            <img src="../assets/gold-medal.png" alt="Gold" class="w-5 md:w-7">
            <img src="../assets/silver-medal.png" alt="Silver" class="w-5 md:w-7">
            <img src="../assets/bronze-medal.png" alt="Bronze" class="w-5 md:w-7">
            <img src="../assets/total-medal.png" alt="Total" class="w-5 md:w-7">
        </div>
    </div>
    
    <CardComponent v-for="(olympic, index) in paginatedData" :key="olympic.NOC" :olympicsdetail="olympic" :index="index" :baseIndex="baseIndex" />

    <div class="flex justify-center items-center mt-10 mb-20 gap-[80px] md:gap-[280px]">
        <button type="button" @click="goToPreviousPage" :disabled="currentPage === 1"
            class="bg-none font-medium underline text-[16px] cursor-pointer">
            &lt; Previous</button>
        <span class="font-medium"> {{ currentPage }} of {{ totalPages }} </span>
        <button type="button" @click="goToNextPage" :disabled="currentPage === totalPages"
            class="bg-none font-medium underline text-[16px] cursor-pointer">
            Next &gt;</button>
    </div>

</template>

<script setup lang="ts">
import OlympicService from '@/services/OlympicService';
import { OlympicDetail } from '@/types';
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue';
import CardComponent from './CardComponent.vue';
import { yearList } from '@/constants/YearList';
import { NOC_NAMES } from '../constants/NationName';

//TODO
const nocNames = NOC_NAMES;

// Pagination declare
const itemsPerPageOptions = [5, 10, 15, 20];
const itemsPerPage = ref(itemsPerPageOptions[1]);
const currentPage = ref(1);

// cal page
const totalPages = computed(() => {
    if (!olympicAllCountry.value) return 0;
    return Math.ceil(olympicAllCountry.value.length / itemsPerPage.value);
});

// Calculate baseIndex for continuous numbering
const baseIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

// cal each page
const paginatedData = computed(() => {
    if (!olympicAllCountry.value) return [];
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return olympicAllCountry.value.slice(start, end);
});

const years: number[] = yearList
    .sort((a, b) => b - a);
const selectedYear = ref(yearList[0]);
const olympicAllCountry = ref<OlympicDetail[] | null>(null);
async function fetchYear() {
    currentPage.value = 1;
    fetchData();
}

async function fetchItemPerPage() {
    currentPage.value = 1;
    fetchData();
}

async function fetchData() {
    try {
        // const response = await OlympicService.getOlympic(selectedYear.value);
        const response = await OlympicService.getOlympicWithPagination(selectedYear.value, currentPage.value, itemsPerPage.value);

        olympicAllCountry.value = response.data;

    } catch (error) {
        console.log('Error fetch data main page ', error);
    }

    olympicAllCountry.value?.sort((a, b) => {
        const goldA = a.Total as number; // แปลงค่าเป็น number
        const goldB = b.Total as number; // แปลงค่าเป็น number
        return goldB - goldA; // ค่ามากไปน้อย
    });
}

function goToPreviousPage() {
    currentPage.value--;
    fetchData();
}

function goToNextPage() {
    currentPage.value++;
    fetchData();
}
fetchData();

//shrink header when scroll down
const shrinkHeader = ref(false);

function handleScroll() {
    // Toggle `shrinkHeader` based on the scroll position
    shrinkHeader.value = window.scrollY > 100; // Shrink when scrolled past 100px
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>
