<template>
    <div class="container mx-auto px-4 py-8">
        <!-- Grid for the cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        </div>
    </div>

    <div class="flex justify-end mt-2 mx-10">
        <label for="pageSizeSpinner" class="mr-2">Items per Page : </label>
        <select id="pageSizeSpinner" v-model="itemsPerPage" class="border rounded px-4 py-2" @change="fetchItemPerPage">
            <option v-for="option in itemsPerPageOptions" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>


    <div class="flex justify-end mt-2 mx-10">
        <label for="yearSpinner" class="mr-2">Year: </label>
        <select id="yearSpinner" v-model="selectedYear" class="border rounded px-4 py-2" @change="fetchYear">
            <option v-for="year in yearList" :key="year" :value="year">{{ year }}</option>
        </select>
    </div>




    <CardComponent v-for="(olympic, index) in paginatedData" :key="olympic.NOC" :olympicsdetail="olympic"
        :index="index" />


    <div class="pagination-container ">
        <button type="button" @click="goToPreviousPage" :disabled="currentPage === 1"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Previous</button>

        <span> {{ currentPage }} of {{ totalPages }} </span>
        <button type="button" @click="goToNextPage" :disabled="currentPage === totalPages"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next</button>
    </div>

</template>

<script setup lang="ts">
import OlympicService from '@/services/OlympicService';
import { OlympicDetail } from '@/types';
import { computed, onMounted, ref, watchEffect } from 'vue';
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


</script>

<style scoped>
.pagination-button {
    margin: 0 10px;
}
</style>