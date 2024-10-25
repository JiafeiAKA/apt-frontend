<template>
    <div class="card-wrapper">
        <RouterLink :to="{ name: 'country-detail', params: { id: props.olympicsdetail.NOC } }">
            <div class="card-container">
                <div class="card-order">{{ props.index + 1 }}</div>
                <div class="card-noc">
                    <country-flag :country="codeCountry.get(nocNames.get(props.olympicsdetail.NOC) || 'USA')" size='big' />
                    <p>{{ nocNames.get(props.olympicsdetail.NOC) }}</p>
                </div>
                <div class="card-medals">
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
import { NOC_NAMES, countryCodes } from '@/constants/NationName';
import { prop } from 'vue-class-component';

const nocNames = NOC_NAMES;
const codeCountry = countryCodes;

const props = defineProps<{
    olympicsdetail: OlympicDetail
    index: number
}>();
</script>

<style scoped>

.card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-container {
    background-color: #fff;
    width: 800px;
    height: 80px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 15px;
    cursor: pointer;
}

.card-container:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-order {
    flex: 0 0 100px;
    text-align: center;
}


</style>
