<template>

    <router-link :to="{name: 'post-details', params: { id: post.id }}">
        <h3>{{ post.title }}</h3>
    </router-link>
    <h3>{{ post.content }}</h3>
    <h3>{{ snippet }}</h3>
    <ul>
        <li><span v-for="tag in post.tags" :key="tag">#{{ tag }}</span></li>
    </ul>
    <!-- <router-view> -->
</template>

<script>

import { computed, onMounted, onUnmounted, onUpdated } from 'vue';

export default {
    props: ['post'],
    setup(props){
        const snippet = computed(()=>{
            return props.post.content.slice(0, 100) + '...';
        })

        onMounted(() => {  console.log('SinglePost component Mounted');  });
        onUnmounted(() => {  console.log('SinglePost component Unmounted');  });
        onUpdated(() => {  console.log('SinglePost component Updated');  });

        return { snippet };
    }
}
</script>

<style>

</style>