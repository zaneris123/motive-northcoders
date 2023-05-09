<script setup> 
import { getSingleLocation } from '../utils/getSingleLocation';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { IonTitle, IonLoading } from '@ionic/vue';
const route = useRoute();
const locoId = route.params.location_id;
const locationInfo = ref(null)
const isLoading = ref(true)
const imgNum = ref(0)
getSingleLocation(locoId).then((location)=>{
    locationInfo.value = location;
    console.log(location.image)
    isLoading.value = false;
})
const ImageClickHandler = () =>{
    if(imgNum.value < locationInfo.value.image.length-1){
        imgNum.value++
    } else{
        imgNum.value = 0;
    }
}

</script>

<template>
    <ion-content>
    <ion-loading :isOpen="isLoading"></ion-loading>
    <ion-card>
    <ion-title class="ion-text-wrap" v-if="locationInfo">
        <h1>{{ locationInfo.name }}</h1>
        <ion-list v-for="category in locationInfo.categories">
            <ion-label>{{ category }}</ion-label>
        </ion-list>
        <button @click="ImageClickHandler">
            <ion-img id="locationImage" :src="locationInfo.image[imgNum]"/>
        </button>
    </ion-title>
</ion-card>
</ion-content>
</template>
<style>
#locationImage{
    display: flex;
    justify-content: center;
    height:30vh;
    width: auto
}
</style>


