<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <div v-for="name in names" :key="name">{{ name }}</div> -->
    
    <input type="text" v-model="search">
    <p> search : {{ search }}</p>
    <div v-for="name in match" :key="name">{{ name }}</div>


    <button @click="handleClick">Stop Watch</button>

  </div>
</template>

<script>

import { computed, ref, watch, watchEffect } from 'vue'
export default {
    setup(){
        
        const search = ref('')
        const names = ref(['Aysuh', 'John', 'Doe', 'Jane', 'Smith', 'Emily', 'Michael', 'Sarah', 'David', 'Laura'])

        const match = computed(()=>{
            return names.value.filter((name)=>name.includes(search.value))
        })


        const stopWatch = watch(search, ()=>{
            console.log('search changed:', search.value)
        })

        const stopEffect =  watchEffect(()=>{
            console.log('search effect:', search.value)
        })

        const handleClick = () => {
            stopWatch()
            stopEffect()
        }

        

        return { names, search , match, handleClick }

    }
}


</script>

<style>

</style>