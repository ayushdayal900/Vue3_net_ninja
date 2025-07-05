<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <div v-if="showPosts">
      <PostLists :posts="posts"/>
    </div> -->
    <div v-if="posts.length">
      <PostLists :posts="posts"/>
    </div>
    <div v-else>
      <h2>Loading</h2>
    </div>
    <div v-if="error">
      <h2>Error: {{ error }}</h2>
    </div>


    <button @click="toggleShowPosts">Togggle Posts</button>
    <button @click="posts.pop()">Remove posts</button>
  </div>
</template>

<script>

import PostLists from '../components/PostLists.vue';
import getPosts  from '../../composables/getPosts';
import { ref } from 'vue';

export default {

  name: "Home",
  components:{ PostLists},

  setup(){
    const {posts, error, load} = getPosts()
    load();
    const showPosts = ref(true)
    const toggleShowPosts = () => {
      showPosts.value = !showPosts.value;
    }
    return { posts, showPosts, toggleShowPosts, error };
  }
}
</script>
