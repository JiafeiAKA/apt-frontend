<template>
    <div class="flex items-center border-b py-2 mx-10 justify-around">

        <div class="w-4 text-sm font-medium text-gray-900">{{ props.index + 1 }}</div>

        <div class="w-8 px-2">

            <!-- <country-flag :country="props.olympicsdetail.symbol" size='big' class="cursor-pointer" /> -->
            <!-- @click="navigateToCountryDetail(props.olympicsdetail)" /> -->
            <country-flag :country="codeCountry.get(nocNames.get(props.olympicsdetail.NOC) || 'USA')" size='big' />
        </div>

        <div class="w-20 px-2 text-base font-medium text-left">{{ nocNames.get(props.olympicsdetail.NOC) }}</div>

        <div class="w-8 px-2 text-md">{{ props.olympicsdetail.Gold }}</div>
        <div class="w-8 px-2 text-md">{{ props.olympicsdetail.Silver }}</div>
        <div class="w-8 px-2 text-md">{{ props.olympicsdetail.Bronze }}</div>
        <div class="w-8 px-2 text-md md:font-bold">{{ props.olympicsdetail.Total }}</div>
        <div class="w-8 px-2 text-md cursor-pointer ">
            <button type="button" @click="showDetail"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</button>
        </div>

    </div>

    <div v-if="isShowDetail">
        <div class="flex items-center border-b py-2 mx-10 justify-around bg-stone-400">
            <div class="w-[10%] px-2 text-sm">Sport</div>
            <div class="w-8 px-2 text-sm">Gold</div>
            <div class="w-[10%] px-2 text-sm">Silver</div>
            <div class="w-8 px-2 text-sm">Bronze</div>
        </div>

        <div v-for="detail in props.olympicsdetail.Sports" v-bind:key="detail.NOC">

            <div class="flex items-center border-b py-2 mx-10 justify-around">
                <div class="w-[10%] px-2 text-sm">{{ detail.Sport }}</div>
                <div class="w-8 px-2 text-sm">{{ detail.Gold }}</div>
                <div class="w-[10%] px-2 text-sm">{{ detail.Silver }}</div>
                <div class="w-8 px-2 text-sm">{{ detail.Bronze }}</div>
            </div>



        </div>
    </div>
</template>

<script setup lang="ts">
import { CountrySportDetail, OlympicDetail } from '@/types';
import { computed, defineProps, ref } from 'vue';
import { NOC_NAMES, countryCodes } from '@/constants/NationName';

const nocNames = NOC_NAMES;
const codeCountry = countryCodes;

const props = defineProps<{
    olympicsdetail: OlympicDetail
    index: number
}>();

// const details: CountrySportDetail[] = props.olympicsdetail.Sports;

const isShowDetail = ref(false);




function showDetail() {
    isShowDetail.value = !isShowDetail.value;

}

</script>

<style scoped></style>