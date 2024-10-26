<template>
    <div class="flex justify-center items-center text-sm md:flex-rol md:text-base">
        <RouterLink :to="{ name: 'country-detail', params: { id: props.olympicsdetail.NOC } }">
            <div class="bg-white w-[800px] max-w-[95vw] h-[80px] border border-black rounded-lg flex items-center mt-5 p-5 cursor-pointer hover:scale-105 shadow-md shadow-gray-200">
                <div class="flex-none w-[30px] text-center md:w-[100px]">{{ baseIndex + props.index + 1 }}</div>
                <div class="flex flex-row w-[300px] items-center gap-[20px] ml-[10px] md:gap-[40px]">
                    <country-flag :country="codeCountry.get(nocNames.get(props.olympicsdetail.NOC) || 'USA')" size='big' class="border" />
                    <p>{{ nocNames.get(props.olympicsdetail.NOC) }}</p>
                </div>
                <div class="w-[300px] flex justify-evenly md:justify-between">
                    <p>{{ props.olympicsdetail.Gold }}</p>
                    <p>{{ props.olympicsdetail.Silver }}</p>
                    <p>{{ props.olympicsdetail.Bronze }}</p>
                    <p>{{ props.olympicsdetail.Total }}</p>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { OlympicDetail } from '@/types';
import { defineProps } from 'vue';
import { NOC_NAMES, NAME_TO_NOC } from '@/constants/NationName';
import { prop } from 'vue-class-component';

const nocNames = NOC_NAMES;
const codeCountry = NAME_TO_NOC;

const props = defineProps<{
    olympicsdetail: OlympicDetail
    index: number
    baseIndex: number
}>();
</script>
